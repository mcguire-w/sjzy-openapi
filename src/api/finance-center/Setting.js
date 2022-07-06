// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 获取辅助核算列表 POST /Setting/CalculateType/GetCalculateTypeList */
export async function settingGetCalculateTypeListPOST(body, options) {
  return request({
    url: '/api1/Setting/CalculateType/GetCalculateTypeList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加/编辑/删除辅助核算类别 POST /Setting/CalculateType/EditCalculateType */
export async function settingEditCalculateTypePOST(body, options) {
  return request({
    url: '/api1/Setting/CalculateType/EditCalculateType',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取不跨账套核算项目列表 POST /Setting/CalculateItem/GetNotAcrossCalculateItemList */
export async function settingGetAcrossCalculateItemListPOST(body, options) {
  return request({
    url: '/api1/Setting/CalculateItem/GetNotAcrossCalculateItemList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加/编辑/删除不跨账套核算项目 POST /Setting/CalculateItem/EditNotAcrossCalculateItem */
export async function settingEditAcrossCalculateItemPOST(body, options) {
  return request({
    url: '/api1/Setting/CalculateItem/EditNotAcrossCalculateItem',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取跨账套核算项目列表 POST /Setting/CalculateItem/GetAcrossCalculateItemList */
export async function settingGetAcrossCalculateItemListPOST_2(body, options) {
  return request({
    url: '/api1/Setting/CalculateItem/GetAcrossCalculateItemList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加/编辑/删除跨账套核算项目 POST /Setting/CalculateItem/EditAcrossCalculateItem */
export async function settingEditAcrossCalculateItemPOST_2(body, options) {
  return request({
    url: '/api1/Setting/CalculateItem/EditAcrossCalculateItem',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 更新账套核算项目状态 POST /Setting/CalculateItem/UpdateStatusCalculateItem */
export async function settingUpdateStatusCalculateItemPOST(body, options) {
  return request({
    url: '/api1/Setting/CalculateItem/UpdateStatusCalculateItem',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
