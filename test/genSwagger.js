const { vbenOpenAPI } = require('../dist/index');

console.log(vbenOpenAPI, 'vbenOpenAPI');
vbenOpenAPI({
  schemaPath: '/',
  serversPath: './servers',
  projectName: 'finance-center',
  templateName: 'financeCenter',
  requestLibPath: '@/utils/request',
});
