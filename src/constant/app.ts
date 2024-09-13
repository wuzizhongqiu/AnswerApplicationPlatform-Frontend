// 用户角色枚举
export const  USER_ROLE_ENUM = {
  // 普通用户
  USER : 10,
  // 管理员
  ADMIN: 20,
  // 封禁用户
  BANNED: 30,
}

// 审核状态枚举
export const REVIEW_STATUS_ENUM = {
  // 待审核
  REVIEWING: 0,
  // 通过
  PASS: 1,
  // 拒绝
  REJECT: 2,
};

// 审核状态映射
export const REVIEW_STATUS_MAP = {
  0: "待审核",
  1: "通过",
  2: "拒绝",
};

// 应用类型枚举
export const APP_TYPE_ENUM = {
  // 得分类
  SCORE: 0,
  // 测评类
  TEST: 1,
};

// 应用类型映射
export const APP_TYPE_MAP = {
  1: "得分类",
  2: "测评类",
};

// 应用评分策略枚举
export const APP_SCORING_STRATEGY_ENUM = {
  // 自定义
  CUSTOM: 0,
  // AI
  AI: 1,
};

// 应用评分策略映射
export const APP_SCORING_STRATEGY_MAP = {
  1: "自定义",
  2: "AI",
};