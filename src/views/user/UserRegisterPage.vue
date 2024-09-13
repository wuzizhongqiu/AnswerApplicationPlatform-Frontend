<template>
  <div id="UserRegisterPage">
    <h2 style="margin-bottom: 16px">用户注册</h2>
    <a-form
      :model="formState"
      :style="{width: '400px', margin: '0 auto'}"
      name="basic"
      :label-align="'left'"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      @submit="handleSubmit"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="账号"
        name="account"
        :rules="[{ required: true, message: '请输入账号' }]"
      >
        <a-input v-model:value="formState.account" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item
        label="请确认密码"
        name="checkPassword"
        :rules="[{ required: true, message: '请再次输入密码' }]"
      >
        <a-input-password v-model:value="formState.checkPassword" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 20 }">
        <div style="display: flex; justify-content: space-between; width: 100%; align-items: center">
          <a-button type="primary" html-type="submit" style="width: 120px">注册</a-button>
          <a href="/user/login">老用户登录</a>
        </div>
      </a-form-item>
    </a-form>
  </div>

</template>

<script setup lang="ts">
import { reactive } from "vue";
import API from "@/api";
import { userLogin, userRegister } from "@/api/user";
import { useLoginUserStore } from "@/store/userStore";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";

const loginUserStore = useLoginUserStore();

const router = useRouter();

const formState = reactive<API.RegisterRequest>({
  account: "",
  password: "",
  checkPassword: "",
});


const handleSubmit = async () => {
  // 给 Axios 专门设置捕捉异常
  const res = await userRegister(formState).catch(() => {
    message.error("用户存在，请重新输入");
  });
  console.log(res)
  // @ts-ignore
  if (res.data.code === 200) {
    // @ts-ignore
    message.success("注册成功");
    await router.push({
      path: "/user/login",
      replace: true
    });
  } else {
    message.error("注册失败");
  }
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style scoped>
#UserRegisterPage {

}

</style>