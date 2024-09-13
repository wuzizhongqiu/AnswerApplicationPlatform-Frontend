<template>
  <div id="basicLayout">
    <a-layout style="height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader/>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://blog.csdn.net/Locky136?type=blog" target="_blank">个人博客 by 戊子仲秋</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">

import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>
#basicLayout {

}

/**/
#basicLayout .header {
  background: #ffffff; /*白色*/
  margin-bottom: 5px; /*和底部的间距*/
  box-shadow: #eee 1px 1px 5px; /*一层阴影*/
}

/**/
#basicLayout .content {
  /*max-width: 1200px; !*最大宽度*!*/
  width: 100%;
  background: linear-gradient(to right, #fefefe, #fff); /*一个渐变背景*/
  /*box-sizing: border-box;*/
  /*margin: 0 auto 28px; !*居中*! !*auto 后面的事和底部的间距*!*/
  margin-bottom: 28px;
  padding: 20px; /*内部的间距*/
}

/**/
.footer {
  background: #efefef; /*背景颜色（浅灰色）*/
  padding: 16px; /*间距*/
  text-align: center; /*居中*/
  text-decoration: none; /*去除底下的横线*/
}

</style>