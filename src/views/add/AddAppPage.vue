<template>
  <div id="addAppPage">
    <h2 style="margin-bottom: 32px">创建应用</h2>
    <a-form
      :model="form"
      :style="{ width: '480px', margin: '0 auto' }"
      label-align="left"
      auto-label-width
      @submit="handleSubmit"
    >
      <a-form-item field="appName" label="应用名称">
        <a-input v-model:value= "form.appName" placeholder="请输入应用名称" />
      </a-form-item>
      <a-form-item field="appDesc" label="应用描述">
        <a-input v-model:value="form.appDesc" placeholder="请输入应用描述" />
      </a-form-item>
      <a-form-item field="appIcon" label="应用图标">
        <a-input v-model:value="form.appIcon" placeholder="请输入应用图标" />
      </a-form-item>
      <a-form-item field="appType" label="应用类型">
        <a-select
          v-model:value="form.appType"
          :options="options1"
          :style="{ width: '320px' }"
          placeholder="请选择应用类型"
        >
        </a-select>
      </a-form-item>
      <a-form-item field="scoringStrategy" label="评分策略">
        <a-select
          v-model:value="form.scoringStrategy"
          :options="options2"
          :style="{ width: '320px' }"
          placeholder="请选择评分策略"
        >
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 120px">
          提交
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watchEffect, withDefaults } from "vue";
import API from "@/api";
import { useRouter } from "vue-router";
import { APP_SCORING_STRATEGY_MAP, APP_TYPE_MAP } from "@/constant/app";
import { message, SelectProps } from "ant-design-vue";
import { appCreatApp, appGetAppById, appModifyApp } from "@/api/app";

const options1 = ref<SelectProps['options']>([
  { value: "1", label: "得分类" },
  { value: "2", label: "测评类" },
]);

const options2 = ref<SelectProps['options']>([
  { value: "1", label: "自定义" },
]);

interface Props {
  id: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: () => {
    return "";
  },
});

const router = useRouter();

const form = ref({
  appDesc: "",
  appIcon: "",
  appName: "",
  appType: 0,
  scoringStrategy: 0,
} as API.AppModInfo);

// 如果有 ID 那就获取曾经的数据（修改 APP 的接口） TODO 好像没啥用
// const oldApp = ref<API.AppInfo>();

/**
 * 加载数据
 */
const loadData = async () => {
  if (!props.id) {
    return;
  }
  const res = await appGetAppById ({
    appId: props.id as any,
  }).catch(() => {
    message.error("获取数据失败");
  });
  // @ts-ignore
  form.value = res.data.data.app;
  console.log(form.value)
};

// 获取旧数据
watchEffect(() => {
  loadData();
});

/**
 * 提交（修改和创建两种接口）
 */
const handleSubmit = async () => {
  let res: any;
  // 如果是修改
  if (props.id) {
    // console.log(form.value)
    res = await appModifyApp({
      appId: props.id,
      appModInfo: form.value,
    }).catch(() => {
      message.error("修改数据失败");
      return
    });
  } else {
    // console.log(form.value)
    // 创建
    res = await appCreatApp(form.value).catch(() => {
      message.error("修改数据失败");
      return
    });
  }

  // 走到这里必定是成功的
  message.success("操作成功，即将跳转到应用详情页");
  setTimeout(() => {
    router.push(`/app/detail/${props.id}`);
  }, 3000);

};
</script>

<style scoped>
#addAppPage {
  text-align: center;
}
</style>