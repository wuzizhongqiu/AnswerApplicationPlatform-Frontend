<template>
  <div id="answerResultPage">
    <a-card>
      <a-row style="margin-bottom: 16px">
        <a-col flex="auto" class="content-wrapper">
          <h2>{{ data.resultName }}</h2>
          <p>结果描述：{{ data.resultDesc }}</p>
          <p>结果 id：{{ data.id }}</p>
          <a-space>
          <div :style="{ display: 'flex', alignItems: 'center' }">
            <a-image
              :size="24"
              :style="{ marginRight: '8px' }"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          </div>
          </a-space>
          <p/>
          <a-space size="middle">
            <a-button type="primary" :href="`/`"
            >返回应用列表
            </a-button>
          </a-space>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watchEffect, withDefaults } from "vue";
import API from "@/api";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
import { questionGetResultById } from "@/api/question";


interface Props {
  id: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: () => {
    return "";
  }
});

const router = useRouter();

const data = ref<API.GetResultByIdReply>({});

/**
 * 加载数据
 */
const loadData = async () => {
  if (!props.id) {
    return;
  }
  const res = await questionGetResultById({
    id: props.id as any
  }).catch((err) => {
    message.error("获取结果数据失败");
  });
  // @ts-ignore
  data.value = res.data.data as any;
};

/**
 * 监听 searchParams 变量，改变时触发数据的重新加载
 */
watchEffect(() => {
  loadData();
});
</script>

<style scoped>
#answerResultPage {
}

#answerResultPage .content-wrapper > * {
  margin-bottom: 24px;
}
</style>