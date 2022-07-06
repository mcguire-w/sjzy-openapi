// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 获取发票申请列表66 POST /Invoice/GetInvoiceList */
export async function invoiceapplyGetInvoiceListPOST(body, options) {
  return request({
    url: '/api1/Invoice/GetInvoiceList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
