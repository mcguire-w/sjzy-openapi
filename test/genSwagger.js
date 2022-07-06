/*
 * @Author: 王明贵 1611377934@qq.com
 * @Date: 2022-05-10 18:42:18
 * @LastEditors: 王明贵 1611377934@qq.com
 * @LastEditTime: 2022-07-06 14:13:21
 * @FilePath: \sjzy-openapi\test\genSwagger.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { vbenOpenAPI } = require('../dist/index');

vbenOpenAPI({
  schemaPath: 'http://192.168.80.55:8091/swagger/Default/swagger.json', // swagger.json 地址
  serversPath: 'src/api', // 生成接口的路径
  projectName: 'finance-center', // 生成接口的文件夹名
  templateName: 'financeCenter', // 使用的模板名
  requestLibPath: '@/utils/request', // 请求request路径
  isTS: false, // 是否ts
  apiPrefix: 'api1', // 请求接口前缀
});
