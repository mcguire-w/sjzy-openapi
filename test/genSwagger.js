/*
 * @Author: 王明贵 1611377934@qq.com
 * @Date: 2022-05-10 18:42:18
 * @LastEditors: 王明贵 1611377934@qq.com
 * @LastEditTime: 2022-06-25 10:30:56
 * @FilePath: \sjzy-openapi\test\genSwagger.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { vbenOpenAPI } = require('../dist/index');

vbenOpenAPI({
  schemaPath: 'http://192.168.80.55:8091/swagger/Default/swagger.json',
  serversPath: './servers',
  projectName: 'finance-center',
  templateName: 'gotofreight_app',
  requestLibPath: "import http from '@/luch-request/service.js'",
  isTS: false,
});
