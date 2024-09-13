<template>
  <div id="appDetailPage">
    <a-card>
      <a-row style="margin-bottom: 16px">
        <a-col flex="auto" class="content-wrapper">
          <h2>{{ data.appName }}</h2>
          <p>应用简介：{{ data.appDesc }}</p>
          <p>应用类型：{{ APP_TYPE_MAP[data.appType] }}</p>
          <p>评分策略：{{ APP_SCORING_STRATEGY_MAP[data.scoringStrategy] }}</p>
          <p v-if="isMy">作者：{{ user.username }}</p>
          <p v-else>作者：小明同学</p>
          <a-space>
            <a-button type="primary" :href="`/answer/do/${id}`"
            >开始答题
            </a-button
            >
            <a-button>分享应用</a-button>
            <a-button v-if="isMy" :href="`/add/question/${id}`"
            >设置题目
            </a-button>
            <a-button v-if="isMy" :href="`/add/app/${id}`">修改应用</a-button>
          </a-space>
        </a-col>
        <a-col flex="320px">
          <a-image width="100%" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"></a-image>
        </a-col>
        <a-col flex="100px">
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>


<script setup lang="ts">
import { APP_SCORING_STRATEGY_MAP, APP_TYPE_MAP } from "@/constant/app";
import { computed, defineProps, ref, watchEffect, withDefaults } from "vue";
import { message } from "ant-design-vue";
import { appGetAppById } from "@/api/app";
import API from "@/api";
import { useLoginUserStore } from "@/store/userStore";

interface Props {
  id: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: () => {
    return "";
  }
});

const data = ref<API.AppInfo>({});
const user = ref<API.UserInfo>({});

// 获取登录用户
const loginUserStore = useLoginUserStore();
let loginUser = loginUserStore.loginUser;

// 是否为本人创建的
const isMy = computed(() => {
  // @ts-ignore
  return loginUser.id && loginUser.id == data.value.userId;
});

/**
 * 加载数据
 */
const loadData = async () => {
  const res = await appGetAppById({
    appId: props.id
  }).catch(() => {
    message.error("获取数据失败");
  });
  if (res) {
    // @ts-ignore
    data.value = res.data.data.app;
    // @ts-ignore
    user.value = res.data.data.user;
  }
};

/**
 * 监听 searchParams 变量，改变时触发数据的重新加载
 */
watchEffect(() => {
  loadData();
});

</script>

<style scoped>

#appDetailPage {

}

#appDetailPage .content-wrapper > * {
  margin-bottom: 24px;
}

</style>
