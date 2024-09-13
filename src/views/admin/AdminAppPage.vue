AdminUserPage.vueAdminUserPage.vue<template>
  <a-table :dataSource="dataList" :columns="columns" :pagination="pagination"
           @change="handleTableChange"
  />
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import { userListUserByPage } from "@/api/user";
import API from "@/api";
import { message } from "ant-design-vue";

const searchParams = ref<API.ListUserByPageRequest>({
  current: 1,
  pageSize: 10
});


const dataList = ref<API.UserInfo[]>([]);
const total = ref<number>(0);

const pagination = computed(() => ({
  total: total.value,
  current: searchParams.value.current,
  pageSize: searchParams.value.pageSize
}));

const loadDate = async () => {
  const res = await userListUserByPage(searchParams.value).catch((err) => {
    console.log(err);
    message.error("获取数据失败");
  });
  if (res) {
    // @ts-ignore
    total.value = res.data.data.total;
    // @ts-ignore
    dataList.value = res.data.data.userList;
  }
};

// 监听分页变化， 改变时触发数据重新加载 TODO 有问题，总之就是用不了
const handleTableChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    // @ts-ignore
    current: page
  };
};

// 监听分页变化， 改变时触发数据重新加载
watchEffect(() => {
  loadDate();
});

const columns = [
  {
    title: "用户名",
    dataIndex: "username"
  },
  {
    title: "头像",
    dataIndex: "avatarUrl"
  },
  {
    title: "性别",
    dataIndex: "gender"
  },
  {
    title: "用户简介",
    dataIndex: "userInfo"
  },
  {
    title: "角色",
    dataIndex: "userRole"
  }
];


</script>

