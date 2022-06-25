// @ts-ignore
/* eslint-disable */
import http from '@/luch-request/service.js';

/** 获取使用主体 POST /Basic/MainbodyList */
export async function basicapplyMainbodyListPOST(options) {
  return http.request({
    url: '/Basic/MainbodyList',
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取供应商 POST /Basic/SupplierList */
export async function basicapplySupplierListPOST(body, options) {
  return http.request({
    url: '/Basic/SupplierList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取入账凭证号 POST /Basic/VoucherList */
export async function basicapplyVoucherListPOST(body, options) {
  return http.request({
    url: '/Basic/VoucherList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取币种 POST /Basic/CurrencyList */
export async function basicapplyCurrencyListPOST(options) {
  return http.request({
    url: '/Basic/CurrencyList',
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取员工数据 POST /Basic/EmployeeList */
export async function basicapplyEmployeeListPOST(options) {
  return http.request({
    url: '/Basic/EmployeeList',
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取合同 POST /Basic/ContractList */
export async function basicapplyContractListPOST(body, options) {
  return http.request({
    url: '/Basic/ContractList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取押金列表当前用户所属账套 POST /Basic/AllUserLedger */
export async function basicapplyAllUserLedgerPOST(options) {
  return http.request({
    url: '/Basic/AllUserLedger',
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取账套 POST /Basic/GetLedgerModel */
export async function basicapplyGetLedgerModelPOST(body, options) {
  return http.request({
    url: '/Basic/GetLedgerModel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取账套 银行卡 POST /Basic/BankcardList */
export async function basicapplyBankcardListPOST(options) {
  return http.request({
    url: '/Basic/BankcardList',
    method: 'POST',
    ...(options || {}),
  });
}

/** 对方科目 POST /Basic/GetSujectListList */
export async function basicapplyGetSujectListListPOST(body, options) {
  return http.request({
    url: '/Basic/GetSujectListList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取部门数据 POST /Basic/GetDepartmentList */
export async function basicapplyGetDepartmentListPOST(options) {
  return http.request({
    url: '/Basic/GetDepartmentList',
    method: 'POST',
    ...(options || {}),
  });
}
