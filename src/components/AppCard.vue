  <template>
    <a-card class="appCard" hoverable style="width: 300px" @click="doCardClick">
      <template #cover>
        <img
          :alt="app.appName"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </template>
      <template #actions>
        <setting-outlined key="setting" />
        <edit-outlined key="edit" />
        <ellipsis-outlined key="ellipsis" />
      </template>
      <a-card-meta :title="app.appName" :description="app.appDesc" />
    </a-card>
  </template>



<script lang="ts" setup>

import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';

import API from "@/api";
import { defineProps, withDefaults } from "vue";
import { useRouter } from "vue-router";

interface Props {
  app: API.AppInfo;
}

const props = withDefaults(defineProps<Props>(), {
  app: () => {
    return {};
  },
});

const router = useRouter();

const doCardClick = () => {
  router.push(`/app/detail/${props.app.appId}`);
};

</script>

<style scoped>
.appCard {
  cursor: pointer;
}

</style>