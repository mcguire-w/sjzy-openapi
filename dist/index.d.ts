import type { OperationObject } from 'openapi3-ts';
import type { TypescriptFileType } from './serviceGenerator';
export declare type GenerateServiceProps = {
    requestLibPath?: string;
    requestImportStatement?: string;
    /**
     * api 的前缀
     */
    apiPrefix?: string | ((params: {
        path: string;
        method: string;
        namespace: string;
        functionName: string;
        autoExclude?: boolean;
    }) => string);
    /**
     * 生成的文件夹的路径
     */
    serversPath?: string;
    /**
     * openAPI 3.0 的地址
     */
    schemaPath?: string;
    /**
     * 项目名称
     */
    projectName?: string;
    hook?: {
        /** 自定义函数名称 */
        customFunctionName?: (data: OperationObject) => string;
        /** 自定义类名 */
        customClassName?: (tagName: string) => string;
    };
    namespace?: string;
    mockFolder?: string;
    templateName?: TypescriptFileType;
    isTS: boolean;
};
export declare const getSchema: (schemaPath: string) => Promise<any>;
export declare const vbenOpenAPI: ({ requestLibPath, schemaPath, mockFolder, ...rest }: GenerateServiceProps) => Promise<void>;
