<template>
  <div class="login-wrapper">
    <login-header />

    <div class="login-container">
      <div class="title-container">
        <h1 class="title margin-no">登录到</h1>
        <h1 class="title">我滴天哪后台管理系统</h1>
      </div>

      <login />
      <tdesign-setting />
    </div>

    <footer class="copyright">Copyright @ 2021-2022 我滴天哪. All Rights Reserved</footer>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LoginIndex',
}
</script>
<script setup lang="ts">
import Login from './components/Login.vue'
import LoginHeader from './components/Header.vue'
import TdesignSetting from '@/layouts/setting.vue'
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
