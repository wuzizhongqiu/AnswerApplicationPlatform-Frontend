<template>
  <div id="doAnswerPage">
    <a-card>
      <h1>{{ app.appName }}</h1>
      <p>{{ app.appDesc }}</p>
      <h2 style="margin-bottom: 16px">
        {{ currentQuestion?.title }}
      </h2>
      <div>
        <a-radio-group
          v-model:value="value"
          @change="doRadioChange"
        >
          <a-space direction="vertical">
            <a-radio :style="radioStyle" v-for="option in questionOptions" :value="option.value">
              {{ option.label }}
            </a-radio>
          </a-space>
        </a-radio-group>
      </div>
      <div style="margin-top: 24px">
        <a-space size="large">
          <a-button
            type="primary"
            shape="circle"
            v-if="current < questionContent.length"
            :disabled="!currentAnswer"
            @click="current += 1"
          >
            下一题
          </a-button>
          <a-button
            type="primary"
            v-if="current === questionContent.length"
            :loading="submitting"
            shape="circle"
            :disabled="!currentAnswer"
            @click="doSubmit"
          >
            {{ submitting ? "评分中" : "查看结果" }}
          </a-button>
          <a-button v-if="current > 1" shape="circle" @click="current -= 1">
            上一题
          </a-button>
        </a-space>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  defineProps,
  reactive,
  ref,
  watchEffect,
  withDefaults,
} from "vue";
import API from "@/api";
import { useRouter } from "vue-router";
import { appGetAppById } from "@/api/app";
import { message } from "ant-design-vue";
import { questionAddUserAnswer, questionListQuestionByPage } from "@/api/question";

const value = ref<number>(1);

interface Props {
  appId: string;
}

const props = withDefaults(defineProps<Props>(), {
  appId: () => {
    return "";
  },
});

const radioStyle = reactive({
  display: 'flex',
  height: '30px',
  lineHeight: '30px',
});

const router = useRouter();

const app = ref<API.AppInfo>({});
// 题目内容结构（理解为题目列表）
const questionContent = ref<API.QuestionContent[]>([]);

// 当前题目的序号（从 1 开始）
const current = ref(1);
// 当前题目
const currentQuestion = ref<API.QuestionContent>({});
// 当前题目选项
const questionOptions = computed(() => {
  console.log(currentQuestion.value)
  return currentQuestion.value?.options
    ? currentQuestion.value.options.map((option) => {
      return {
        label: `${option.key}. ${option.value}`,
        value: option.key,
      };
    })
    : [];
});
// 当前答案
const currentAnswer = ref<string>();
// 回答列表
const answerList = reactive<string[]>([]);
// 是否正在提交结果
const submitting = ref(false);

/**
 * 加载数据
 */
const loadData = async () => {
  if (!props.appId) {
    return;
  }
  // 获取 app
  let res: any = await appGetAppById({
    appId: props.appId as any,
  }).catch((e) => {
    message.error("获取应用信息失败");
  });

  app.value = res.data.data.app;

  // 获取题目
  res = await questionListQuestionByPage({
    appId: props.appId as any,
  }).catch((e) => {
    message.error("获取题目信息失败");
  });

  questionContent.value = res.data.data.contents;
};

// 获取旧数据
watchEffect(() => {
  loadData();
});

// 改变 current 题号后，会自动更新当前题目和答案
watchEffect(() => {
  currentQuestion.value = questionContent.value[current.value - 1];
  currentAnswer.value = answerList[current.value - 1]
});

/**
 * 选中选项后，保存选项记录
 * @param value
 */
const doRadioChange = (value: string) => {
  answerList[current.value - 1] = value;
};

/**
 * 提交
 */
const doSubmit = async () => {
  submitting.value = true;
  const res = await questionAddUserAnswer({
    appId: props.appId as any,
    choices: answerList,
  }).catch((e) => {
    message.error("提交答案失败");
  });
  // @ts-ignore
  // await router.push(`/answer/result/${res.data.data.id}`);
  if (props.appId === "1") {
    await router.push(`/answer/result/1`);
  }
  if (props.appId === "2") {
    await router.push(`/answer/result/17`);
  }


  submitting.value = false;
};
</script>