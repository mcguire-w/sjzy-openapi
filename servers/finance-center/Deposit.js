// @ts-ignore
/* eslint-disable */
import http from '@/luch-request/service.js';

/** 添加更新(押金/预付) POST /Deposit/AddDeposit */
export async function depositAddDepositPOST(body, options) {
  return http.request({
    url: '/Deposit/AddDeposit',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** (押金/预付)查看 POST /Deposit/DepositDetailed */
export async function depositDepositDetailedPOST(body, options) {
  return http.request({
    url: '/Deposit/DepositDetailed',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取(押金/预付)列表 POST /Deposit/GetDepositList */
export async function depositGetDepositListPOST(body, options) {
  return http.request({
    url: '/Deposit/GetDepositList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 押金 已处置历史记录 POST /Deposit/GetDepositHistoryList */
export async function depositGetDepositHistoryListPOST(body, options) {
  return http.request({
    url: '/Deposit/GetDepositHistoryList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** (押金/预付)审核 POST /Deposit/CheckDeposit */
export async function depositCheckDepositPOST(body, options) {
  return http.request({
    url: '/Deposit/CheckDeposit',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** (押金/预付)反审 POST /Deposit/CounterCheckDeposit */
export async function depositCounterCheckDepositPOST(body, options) {
  return http.request({
    url: '/Deposit/CounterCheckDeposit',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** (押金/预付)删除 POST /Deposit/DeleteDeposit */
export async function depositDeleteDepositPOST(body, options) {
  return http.request({
    url: '/Deposit/DeleteDeposit',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** (押金/预付)导出 POST /Deposit/DepositListExcel */
export async function depositDepositListExcelPOST(body, options) {
  return http.request({
    url: '/Deposit/DepositListExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 处置选择(押金/预付)列表 POST /Deposit/HandleDepositList */
export async function depositHandleDepositListPOST(body, options) {
  return http.request({
    url: '/Deposit/HandleDepositList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加处置 POST /Deposit/AddHandleDeposit */
export async function depositAddHandleDepositPOST(body, options) {
  return http.request({
    url: '/Deposit/AddHandleDeposit',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 查看处置/摊销记录 POST /Deposit/HandleDepositDetailed */
export async function depositHandleDepositDetailedPOST(body, options) {
  return http.request({
    url: '/Deposit/HandleDepositDetailed',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 处置/摊销明细列表 POST /Deposit/HandleList */
export async function depositHandleListPOST(body, options) {
  return http.request({
    url: '/Deposit/HandleList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加处置/摊销当前点击记录 POST /Deposit/GetAddHandleInfo */
export async function depositGetAddHandleInfoPOST(body, options) {
  return http.request({
    url: '/Deposit/GetAddHandleInfo',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 删除押金预付处置 POST /Deposit/DeleteHandleDeposit */
export async function depositDeleteHandleDepositPOST(body, options) {
  return http.request({
    url: '/Deposit/DeleteHandleDeposit',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 导出处置明细 POST /Deposit/HandleDepositListExport */
export async function depositHandleDepositListExportPOST(body, options) {
  return http.request({
    url: '/Deposit/HandleDepositListExport',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 押金预付处置列表 POST /Deposit/DisposalAmortizationList */
export async function depositDisposalAmortizationListPOST(body, options) {
  return http.request({
    url: '/Deposit/DisposalAmortizationList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 押金预付添加/编辑 POST /Deposit/AddDisposalAmortization */
export async function depositAddDisposalAmortizationPOST(body, options) {
  return http.request({
    url: '/Deposit/AddDisposalAmortization',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 汇总报表接口（按账套，供应商，主体） POST /Deposit/SummaryRecordList */
export async function depositSummaryRecordListPOST(body, options) {
  return http.request({
    url: '/Deposit/SummaryRecordList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 汇总报表接口（按账套，供应商，主体）导出 POST /Deposit/SummaryRecordListExcel */
export async function depositSummaryRecordListExcelPOST(body, options) {
  return http.request({
    url: '/Deposit/SummaryRecordListExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 汇总明细报表接口（按账套，主体） POST /Deposit/SummaryRecordDetailList */
export async function depositSummaryRecordDetailListPOST(body, options) {
  return http.request({
    url: '/Deposit/SummaryRecordDetailList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 汇总明细报表接口（按账套，主体）导出 POST /Deposit/SummaryRecordDetailListExcel */
export async function depositSummaryRecordDetailListExcelPOST(body, options) {
  return http.request({
    url: '/Deposit/SummaryRecordDetailListExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
