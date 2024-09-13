// @ts-ignore
/* eslint-disable */
import request from '../request';

/** 此处后端没有提供注释 POST /v1/app/creatapp */
export async function appCreatApp(body: API.CreatAppRequest, options?: { [key: string]: any }) {
  return request<API.CreatAppReply>('/v1/app/creatapp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v1/app/getappbyid */
export async function appGetAppById(body: API.GetAppByIdRequest, options?: { [key: string]: any }) {
  return request<API.GetAppByIdReply>('/v1/app/getappbyid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取应用列表分页 POST /v1/app/listapppage */
export async function appListAppPage(
  body: API.ListAppPageRequest,
  options?: { [key: string]: any },
) {
  return request<API.ListAppPageReply>('/v1/app/listapppage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v1/app/modifyapp */
export async function appModifyApp(body: API.ModifyAppRequest, options?: { [key: string]: any }) {
  return request<API.ModifyAppReply>('/v1/app/modifyapp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
