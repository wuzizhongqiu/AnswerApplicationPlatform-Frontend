<template>
  <a-space direction="vertical" :style="{ width: '100%' }">
    <a-upload
      :fileList="file ? [file] : []"
      :show-file-list="false"
      :custom-request="customRequest"
    >
      <template #upload-button>
        <div
          :class="`arco-upload-list-item${
            file && file.status === 'error'
              ? ' arco-upload-list-item-error'
              : ''
          }`"
        >
          <div
            class="arco-upload-list-picture custom-upload-avatar"
            v-if="file && file.url"
          >
            <img :src="file.url" />
            <div class="arco-upload-list-picture-mask">
              <IconEdit />
            </div>
            <a-progress
              v-if="file.status === 'uploading' && file.percent < 100"
              :percent="file.percent"
              type="circle"
              size="mini"
              :style="{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
              }"
            />
          </div>
          <div class="arco-upload-picture-card" v-else>
            <div class="arco-upload-picture-card-text">
              <IconPlus />
              <div style="margin-top: 10px; font-weight: 600">上传</div>
            </div>
          </div>
        </div>
      </template>
    </a-upload>
  </a-space>
</template>

<script setup lang="ts">
import { ref, withDefaults, defineProps } from "vue";
import { message } from "ant-design-vue";

// TODO 换成 AntDesign Vue 的组件
// import { IconEdit, IconPlus } from "@ant-design/web-vue/es/icon";

// TODO 后端实现图片上传功能
// import { uploadFileUsingPost } from "@/api/fileController";

/**
 * 定义组件属性类型
 */
interface Props {
  biz: string;
  onChange?: (url: string) => void;
  value?: string;
}

/**
 * 给组件指定初始值
 */
const props = withDefaults(defineProps<Props>(), {
  value: () => "",
});

const file = ref();
if (props.value) {
  file.value = {
    url: props.value,
    percent: 100,
    status: "done",
  };
}

// 自定义请求
const customRequest = async (option: any) => {
  const { onError, onSuccess, fileItem } = option;

  const res: any = await uploadFileUsingPost(
    { biz: props.biz },
    {},
    fileItem.file
  );
  if (res.data.code === 0 && res.data.data) {
    const url = res.data.data;
    file.value = {
      name: fileItem.name,
      file: fileItem.file,
      url,
    };
    props.onChange?.(url);
    onSuccess();
    console.log(file.value);
  } else {
    message.error("上传失败，" + res.data.message || "");
    onError(new Error(res.data.message));
  }
};
</script>