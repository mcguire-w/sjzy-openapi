"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripDot = exports.formatParamsForYFH = exports.formatApiInfo = exports.getTagName = exports.writeFile = exports.prettierFile = exports.mkdir = exports.getAbsolutePath = void 0;
const tslib_1 = require("tslib");
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-lonely-if */
/* eslint-disable no-param-reassign */
const path_1 = tslib_1.__importDefault(require("path"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const prettier = tslib_1.__importStar(require("prettier"));
const lodash_1 = require("lodash");
const { prettier: defaultPrettierOptions } = require('@umijs/fabric');
const getAbsolutePath = (filePath) => {
    if (filePath && !path_1.default.isAbsolute(filePath)) {
        return path_1.default.join(process.cwd(), filePath);
    }
    return filePath;
};
exports.getAbsolutePath = getAbsolutePath;
const mkdir = (dir) => {
    if (!fs_1.default.existsSync(dir)) {
        exports.mkdir(path_1.default.dirname(dir));
        fs_1.default.mkdirSync(dir);
    }
};
exports.mkdir = mkdir;
const prettierFile = (content) => {
    let result = content;
    let hasError = false;
    try {
        result = prettier.format(content, Object.assign({ singleQuote: true, trailingComma: 'all', printWidth: 100, parser: 'typescript' }, defaultPrettierOptions));
    }
    catch (error) {
        hasError = true;
    }
    return [result, hasError];
};
exports.prettierFile = prettierFile;
const writeFile = (folderPath, fileName, content) => {
    const filePath = path_1.default.join(folderPath, fileName);
    exports.mkdir(path_1.default.dirname(filePath));
    const [prettierContent, hasError] = exports.prettierFile(content);
    fs_1.default.writeFileSync(filePath, prettierContent, {
        encoding: 'utf8',
    });
    return hasError;
};
exports.writeFile = writeFile;
const getTagName = (name) => {
    const result = name.split('.');
    // ??????????????? tag ?????????????????? op API ??????????????? 4-5 ??????????????????
    // ???????????? 1-2 ???????????? tag????????? serviceController ?????????????????????
    if (result.length === 4) {
        return result[2];
    }
    if (result.length === 5) {
        return result[2] + lodash_1.upperFirst(result[3]);
    }
    return name;
};
exports.getTagName = getTagName;
/**
 * ??????????????????????????????????????????????????? apiInfo ???????????????
 * ????????? op ??????????????? tags ?????? path ?????? tags ????????????
 * - before: ??????????????????.???????????? + ????????????????????????+ ???????????????????????????+ ??????????????????
 * - after: ????????????????????????+ ??????????????????????????? ==> ??????
 */
const formatApiInfo = (apiInfo) => {
    if (!(apiInfo &&
        apiInfo.schema.info &&
        apiInfo.schema.info.extensions &&
        apiInfo.schema.info.extensions['x-antTech-description'])) {
        // ??? op ????????????????????????
        return apiInfo;
    }
    apiInfo.schema.tags = apiInfo.schema.tags.map((item) => {
        return Object.assign(Object.assign({}, item), { name: exports.getTagName(item.name) });
    });
    for (const child_path in apiInfo.schema.paths) {
        apiInfo.schema.paths[child_path].post.tags = apiInfo.schema.paths[child_path].post.tags.map((tag) => exports.getTagName(tag));
    }
    return apiInfo;
};
exports.formatApiInfo = formatApiInfo;
/**
 * ??????????????????????????? onex ??????????????????????????????
 *  1. ??? Response & Request ?????????????????????????????????????????????
 *  onex ???????????? ??? http://gitlab.alipay-inc.com/one-console/sdk/blob/master/src/request.ts#L110
 *  2. ??????????????????
 *  op ????????????????????????????????????????????? ????????????????????????
 *  - (name) key.n, (type) string  ==> key: string []
 *  - (name) key.m,  (type) string ===>  key: string []
 *  - (name) key.key1 , (type) string ==> key: {key1:string}
 *  - (name) key.n.key1 ,(type) string => key:{ key1 :string}[]
 *  - (name) key.n.key1.m,(type) string ==> key:{key1: string[]}[]
 */
function formatParamsForYFH(params, paramsObject = {}) {
    Object.keys(params).forEach((name) => {
        const prop = params[name];
        let key = name;
        const nameList = name.split('.');
        const nameListLength = nameList.length;
        if (nameListLength === 1) {
            // ????????? key
            paramsObject[key] = Object.assign({}, prop);
        }
        else if (nameListLength === 2 && nameList[1] !== 'n' && nameList[1] !== 'm') {
            const [childKey] = nameList;
            // key.child_key
            const key_child_key = lodash_1.camelCase(nameList[1]);
            paramsObject[childKey] = combineParams(childKey, key_child_key, prop, paramsObject);
        }
        else {
            // key.n.child_key
            if (nameList[nameListLength - 2] === 'n' || nameList[nameListLength - 2] === 'm') {
                const child_key = lodash_1.camelCase(nameList.pop());
                nameList.pop();
                key = nameList.join('.');
                paramsObject[key] = combineParams(key, child_key, prop, paramsObject, '.n.key');
            }
            else {
                const child_key = lodash_1.camelCase(nameList.pop());
                key = nameList.join('.');
                // .key.n
                if (child_key === 'n' || child_key === 'm') {
                    // .n.key.m
                    if (nameList[nameList.length - 2] === 'n' || nameList[nameList.length - 2] === 'm') {
                        const child_child_key = lodash_1.camelCase(nameList.pop());
                        nameList.pop();
                        key = nameList.join('.');
                        paramsObject[key] = combineParams(key, child_child_key, prop, paramsObject, '.n.key.m');
                    }
                    else {
                        prop.type = `${prop.type}[]`;
                        paramsObject[key] = Object.assign({}, prop);
                    }
                }
                else {
                    paramsObject[key] = combineParams(key, child_key, prop, paramsObject);
                }
            }
        }
        paramsObject[key].name = lodash_1.camelCase(key);
    });
    const hasInvoke = Object.keys(paramsObject).filter((param) => param.includes('.')).length > 0;
    if (hasInvoke) {
        // ??????
        return formatParamsForYFH(paramsObject);
    }
    return paramsObject;
}
exports.formatParamsForYFH = formatParamsForYFH;
function combineParams(key, child_key, prop, paramsObject, type) {
    const typeSuffix = type === '.n.key.m' ? '[]' : '';
    const keySuffix = type === '.n.key' || type === '.n.key.m' ? '[]' : '';
    if (paramsObject[key]) {
        const child_type = `{${child_key}:${prop.type}${typeSuffix}, ${paramsObject[key].type.slice(1)}`;
        paramsObject[key] = Object.assign(Object.assign({}, paramsObject[key]), { type: child_type });
    }
    else {
        paramsObject[key] = Object.assign(Object.assign({}, prop), { type: `{${child_key}:${prop.type}
      }${keySuffix}` });
    }
    return paramsObject[key];
}
const stripDot = (str) => {
    return str.replace(/[-_ .](\w)/g, (_all, letter) => letter.toUpperCase());
};
exports.stripDot = stripDot;
