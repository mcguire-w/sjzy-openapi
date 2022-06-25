// @ts-ignore
/* eslint-disable */
import http from '@/luch-request/service.js';

/** 添加/编辑固定资产分类 POST /FixedAssets/AddFixedassetsCategory */
export async function fixedassetsAddFixedassetsCategoryPOST(body, options) {
  return http.request({
    url: '/FixedAssets/AddFixedassetsCategory',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 查看固定资产分类 POST /FixedAssets/FixedassetsCategoryDetailed */
export async function fixedassetsFixedassetsCategoryDetailedPOST(body, options) {
  return http.request({
    url: '/FixedAssets/FixedassetsCategoryDetailed',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 固定资产分类列表 POST /FixedAssets/GetFixedassetsCategoryList */
export async function fixedassetsGetFixedassetsCategoryListPOST(body, options) {
  return http.request({
    url: '/FixedAssets/GetFixedassetsCategoryList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 删除固定资产分类 POST /FixedAssets/DeleteFixedassetsCategory */
export async function fixedassetsDeleteFixedassetsCategoryPOST(body, options) {
  return http.request({
    url: '/FixedAssets/DeleteFixedassetsCategory',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加固定资产 POST /FixedAssets/AddFixedAssets */
export async function fixedassetsAddFixedAssetsPOST(body, options) {
  return http.request({
    url: '/FixedAssets/AddFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 编辑/变动固定资产 POST /FixedAssets/ModifyFixedAssets */
export async function fixedassetsModifyFixedAssetsPOST(body, options) {
  return http.request({
    url: '/FixedAssets/ModifyFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 查询录入期间 POST /FixedAssets/SelectEnterTime */
export async function fixedassetsSelectEnterTimePOST(body, options) {
  return http.request({
    url: '/FixedAssets/SelectEnterTime',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 每月计算月折旧 POST /api/fixedassets/fixedassets-monthold */
export async function fixedassetsAddFixedassetsMontholdPOST(body, options) {
  return http.request({
    url: '/api/fixedassets/fixedassets-monthold',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 查看固定资产详细 POST /FixedAssets/FixedAssetsDetailed */
export async function fixedassetsFixedAssetsDetailedPOST(body, options) {
  return http.request({
    url: '/FixedAssets/FixedAssetsDetailed',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 固定资产列表 POST /FixedAssets/GetFixedAssetsList */
export async function fixedassetsGetFixedAssetsListPOST(body, options) {
  return http.request({
    url: '/FixedAssets/GetFixedAssetsList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 导出固定资产列表 POST /FixedAssets/GetFixedAssetsListExcel */
export async function fixedassetsGetFixedAssetsListExcelPOST(body, options) {
  return http.request({
    url: '/FixedAssets/GetFixedAssetsListExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 删除固定资产 POST /FixedAssets/DeleteFixedAssets */
export async function fixedassetsDeleteFixedAssetsPOST(body, options) {
  return http.request({
    url: '/FixedAssets/DeleteFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 生成固定资产凭证 POST /FixedAssets/CreateVoucher */
export async function fixedassetsCreateVoucherPOST(body, options) {
  return http.request({
    url: '/FixedAssets/CreateVoucher',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 删除入账凭证 POST /FixedAssets/DeleteVoucher */
export async function fixedassetsDeleteVoucherPOST(body, options) {
  return http.request({
    url: '/FixedAssets/DeleteVoucher',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 删除减值准备凭证 POST /FixedAssets/DeleteReduceVoucher */
export async function fixedassetsDeleteReduceVoucherPOST(body, options) {
  return http.request({
    url: '/FixedAssets/DeleteReduceVoucher',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取固定资产清理 POST /FixedAssets/GetClearUpFixedAssetsList */
export async function fixedassetsGetClearUpFixedAssetsListPOST(body, options) {
  return http.request({
    url: '/FixedAssets/GetClearUpFixedAssetsList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 取消固定资产清理 POST /FixedAssets/CancelClearUpFixedAssets */
export async function fixedassetsCancelClearUpFixedAssetsPOST(body, options) {
  return http.request({
    url: '/FixedAssets/CancelClearUpFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加固定资产清理 POST /FixedAssets/AddClearUpFixedAssets */
export async function fixedassetsAddPOST(body, options) {
  return http.request({
    url: '/FixedAssets/AddClearUpFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取固定资产减值 POST /FixedAssets/GetReduceFixedAssetsList */
export async function fixedassetsGetReduceFixedAssetsListPOST(body, options) {
  return http.request({
    url: '/FixedAssets/GetReduceFixedAssetsList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加固定资产减值 POST /FixedAssets/AdtReduceFixedAssets */
export async function fixedassetsAdtReduceFixedAssetsPOST(body, options) {
  return http.request({
    url: '/FixedAssets/AdtReduceFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 固定资产减值记录 POST /FixedAssets/GetReduceFixedAssetsRecordList */
export async function fixedassetsGetReduceFixedAssetsRecordListPOST(body, options) {
  return http.request({
    url: '/FixedAssets/GetReduceFixedAssetsRecordList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 导出固定资产减值记录 POST /FixedAssets/GetReduceFixedAssetsRecordExcel */
export async function fixedassetsGetReduceFixedAssetsRecordExcelPOST(body, options) {
  return http.request({
    url: '/FixedAssets/GetReduceFixedAssetsRecordExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 固定资产变动记录 POST /FixedAssets/GetChangeFixedAssetsRecordList */
export async function fixedassetsGetChangeFixedAssetsRecordListPOST(body, options) {
  return http.request({
    url: '/FixedAssets/GetChangeFixedAssetsRecordList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 导出固定资产变动记录 POST /FixedAssets/GetChangeFixedAssetsRecordExcel */
export async function fixedassetsGetChangeFixedAssetsRecordExcelPOST(body, options) {
  return http.request({
    url: '/FixedAssets/GetChangeFixedAssetsRecordExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 固定资产折旧汇总 POST /FixedAssets/GetFixedAssetsOldCollectList */
export async function fixedassetsGetFixedAssetsOldCollectListPOST(body, options) {
  return http.request({
    url: '/FixedAssets/GetFixedAssetsOldCollectList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 导出折旧汇总表 POST /FixedAssets/GetFixedAssetsOldCollectExcel */
export async function fixedassetsGetFixedAssetsOldCollectExcelPOST(body, options) {
  return http.request({
    url: '/FixedAssets/GetFixedAssetsOldCollectExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
