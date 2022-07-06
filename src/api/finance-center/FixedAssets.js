// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 添加/编辑固定资产分类 POST /FixedAssets/AddFixedassetsCategory */
export async function fixedassetsAddFixedassetsCategoryPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/AddFixedassetsCategory',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 查看固定资产分类 POST /FixedAssets/FixedassetsCategoryDetailed */
export async function fixedassetsFixedassetsCategoryDetailedPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/FixedassetsCategoryDetailed',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 选择固定资产分类列表 POST /FixedAssets/GetFixedassetsCategoryAll */
export async function fixedassetsGetFixedassetsCategoryAllPOST(options) {
  return request({
    url: '/api1/FixedAssets/GetFixedassetsCategoryAll',
    method: 'POST',
    ...(options || {}),
  });
}

/** 固定资产分类列表 POST /FixedAssets/GetFixedassetsCategoryList */
export async function fixedassetsGetFixedassetsCategoryListPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetFixedassetsCategoryList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 删除固定资产分类 POST /FixedAssets/DeleteFixedassetsCategory */
export async function fixedassetsDeleteFixedassetsCategoryPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/DeleteFixedassetsCategory',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加/编辑固定资产 POST /FixedAssets/AddFixedAssets */
export async function fixedassetsAddFixedAssetsPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/AddFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 变动固定资产 POST /FixedAssets/ChangeFixedAssets */
export async function fixedassetsChangeFixedAssetsPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/ChangeFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 查询录入期间 POST /FixedAssets/SelectEnterTime */
export async function fixedassetsSelectEnterTimePOST(body, options) {
  return request({
    url: '/api1/FixedAssets/SelectEnterTime',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 每月计算月折旧 POST /FixedAssets/GetFixedassetsMonthold */
export async function fixedassetsGetFixedassetsMontholdPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetFixedassetsMonthold',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 测试月测旧 POST /FixedAssets/TextMonthold */
export async function fixedassetsTextMontholdPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/TextMonthold',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 查看固定资产详细 POST /FixedAssets/FixedAssetsDetailed */
export async function fixedassetsFixedAssetsDetailedPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/FixedAssetsDetailed',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 固定资产列表 POST /FixedAssets/GetFixedAssetsList */
export async function fixedassetsGetFixedAssetsListPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetFixedAssetsList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 导出固定资产列表 POST /FixedAssets/GetFixedAssetsListExcel */
export async function fixedassetsGetFixedAssetsListExcelPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetFixedAssetsListExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 删除固定资产 POST /FixedAssets/DeleteFixedAssets */
export async function fixedassetsDeleteFixedAssetsPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/DeleteFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 生成固定资产凭证 POST /FixedAssets/CreateVoucher */
export async function fixedassetsCreateVoucherPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/CreateVoucher',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 删除入账凭证 POST /FixedAssets/DeleteVoucher */
export async function fixedassetsDeleteVoucherPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/DeleteVoucher',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 删除减值准备凭证 POST /FixedAssets/DeleteReduceVoucher */
export async function fixedassetsDeleteReduceVoucherPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/DeleteReduceVoucher',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取固定资产清理 POST /FixedAssets/GetClearUpFixedAssetsList */
export async function fixedassetsGetClearUpFixedAssetsListPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetClearUpFixedAssetsList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 取消固定资产清理 POST /FixedAssets/CancelClearUpFixedAssets */
export async function fixedassetsCancelClearUpFixedAssetsPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/CancelClearUpFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加固定资产清理 POST /FixedAssets/AddClearUpFixedAssets */
export async function fixedassetsAddPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/AddClearUpFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 获取固定资产减值 POST /FixedAssets/GetReduceFixedAssetsList */
export async function fixedassetsGetReduceFixedAssetsListPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetReduceFixedAssetsList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 添加固定资产减值 POST /FixedAssets/AdtReduceFixedAssets */
export async function fixedassetsAdtReduceFixedAssetsPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/AdtReduceFixedAssets',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 固定资产减值记录 POST /FixedAssets/GetReduceFixedAssetsRecordList */
export async function fixedassetsGetReduceFixedAssetsRecordListPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetReduceFixedAssetsRecordList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 导出固定资产减值记录 POST /FixedAssets/GetReduceFixedAssetsRecordExcel */
export async function fixedassetsGetReduceFixedAssetsRecordExcelPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetReduceFixedAssetsRecordExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 固定资产变动记录 POST /FixedAssets/GetChangeFixedAssetsRecordList */
export async function fixedassetsGetChangeFixedAssetsRecordListPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetChangeFixedAssetsRecordList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 导出固定资产变动记录 POST /FixedAssets/GetChangeFixedAssetsRecordExcel */
export async function fixedassetsGetChangeFixedAssetsRecordExcelPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetChangeFixedAssetsRecordExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 固定资产折旧汇总 POST /FixedAssets/GetFixedAssetsOldCollectList */
export async function fixedassetsGetFixedAssetsOldCollectListPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetFixedAssetsOldCollectList',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 导出折旧汇总表 POST /FixedAssets/GetFixedAssetsOldCollectExcel */
export async function fixedassetsGetFixedAssetsOldCollectExcelPOST(body, options) {
  return request({
    url: '/api1/FixedAssets/GetFixedAssetsOldCollectExcel',
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
