declare namespace API {
  type AddUserAnswerReply = {
    id?: string;
  };

  type AddUserAnswerRequest = {
    appId?: string;
    choices?: string[];
  };

  type AppInfo = {
    appName?: string;
    appDesc?: string;
    appIcon?: string;
    appType?: number;
    scoringStrategy?: number;
    reviewStatus?: number;
    reviewMessage?: string;
    reviewId?: string;
    userId?: string;
    appId?: string;
  };

  type AppModInfo = {
    appName?: string;
    appDesc?: string;
    appIcon?: string;
    appType?: number;
    scoringStrategy?: number;
  };

  type CreatAppReply = {};

  type CreatAppRequest = {
    appName?: string;
    appDesc?: string;
    appIcon?: string;
    appType?: number;
    scoringStrategy?: number;
  };

  type CreatePostReply = {
    id?: string;
  };

  type CreatePostRequest = {
    title?: string;
    text?: string;
    tags?: string;
    userId?: string;
  };

  type CreatQuestionReply = {};

  type CreatQuestionRequest = {
    appId?: string;
    contents?: QuestionContent[];
  };

  type GetAppByIdReply = {
    app?: AppInfo;
    user?: UserInfo;
  };

  type GetAppByIdRequest = {
    appId?: string;
  };

  type GetCurrentUserReply = {
    id?: string;
    account?: string;
    password?: string;
    username?: string;
    avatarUrl?: string;
    gender?: number;
    userInfo?: string;
    userRole?: number;
  };

  type GetCurrentUserRequest = {};

  type GetResultByIdReply = {
    id?: string;
    resultName?: string;
    resultDesc?: string;
  };

  type GetResultByIdRequest = {
    id?: string;
  };

  type ListAppPageReply = {
    appList?: AppInfo[];
    total?: number;
  };

  type ListAppPageRequest = {
    current?: number;
    pageSize?: number;
  };

  type ListQuestionByPageReply = {
    appId?: string;
    /** string createTime = 2;
  string updateTime = 3; */
    contents?: QuestionContent[];
  };

  type ListQuestionByPageRequest = {
    appId?: string;
  };

  type ListReply = {
    username?: string;
    avatarUrl?: string;
    userInfo?: string;
  };

  type ListRequest = {
    id?: string;
  };

  type ListUserByPageReply = {
    userList?: UserInfo[];
    total?: number;
  };

  type ListUserByPageRequest = {
    current?: number;
    pageSize?: number;
  };

  type LoginReply = {
    id?: string;
    token?: string;
  };

  type LoginRequest = {
    account?: string;
    password?: string;
  };

  type ModifyAppReply = {};

  type ModifyAppRequest = {
    appId?: string;
    appModInfo?: AppModInfo;
  };

  type ModifyQuestionReply = {};

  type ModifyQuestionRequest = {
    appId?: string;
    contents?: QuestionContent[];
  };

  type Option = {
    key?: string;
    result?: string;
    score?: number;
    value?: string;
  };

  type QuestionContent = {
    options?: Option[];
    title?: string;
  };

  type RegisterReply = {
    id?: string;
  };

  type RegisterRequest = {
    account?: string;
    password?: string;
    checkPassword?: string;
  };

  type UserInfo = {
    id?: string;
    account?: string;
    password?: string;
    username?: string;
    avatarUrl?: string;
    gender?: number;
    userInfo?: string;
    userRole?: number;
  };

  type UserInfo = {
    id?: string;
    account?: string;
    password?: string;
    username?: string;
    avatarUrl?: string;
    gender?: number;
    userInfo?: string;
    userRole?: number;
  };
}
