// @ts-ignore
/* eslint-disable */
import request from '../request';

/** 懒得再开一个文件，所以把 UserAnswer 的接口也直接放这里了 POST /v1/question/adduseranswer */
export async function questionAddUserAnswer(
  body: API.AddUserAnswerRequest,
  options?: { [key: string]: any },
) {
  return request<API.AddUserAnswerReply>('/v1/question/adduseranswer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v1/question/creatquestion */
export async function questionCreatQuestion(
  body: API.CreatQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<API.CreatQuestionReply>('/v1/question/creatquestion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v1/question/getresultbyid */
export async function questionGetResultById(
  body: API.GetResultByIdRequest,
  options?: { [key: string]: any },
) {
  return request<API.GetResultByIdReply>('/v1/question/getresultbyid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v1/question/listquestion */
export async function questionListQuestionByPage(
  body: API.ListQuestionByPageRequest,
  options?: { [key: string]: any },
) {
  return request<API.ListQuestionByPageReply>('/v1/question/listquestion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v1/question/modifyquestion */
export async function questionModifyQuestion(
  body: API.ModifyQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<API.ModifyQuestionReply>('/v1/question/modifyquestion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
