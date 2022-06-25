// @ts-ignore
/* eslint-disable */
import http from '@/luch-request/service.js';

/** 获取发票申请列表66 POST /Invoice/GetInvoiceList */
export async function invoiceapplyGetInvoiceListPOST(body, options) {
  return http.request({
    url: '/Invoice/GetInvoiceList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
