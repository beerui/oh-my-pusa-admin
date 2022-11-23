<template>
  <t-form
    ref="form"
    class="base-form"
    :data="formData"
    :rules="FORM_RULES"
    label-align="top"
    :label-width="100"
    @reset="onReset"
    @submit="onSubmit"
  >
    暂无
  </t-form>
</template>

<script lang="ts">
export default {
  name: 'SettingConfig',
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { FORM_RULES, INITIAL_DATA } from './constants'
import { wechatConfig } from '@/api/common'

const formData = ref({ ...INITIAL_DATA })

const onReset = () => {
  MessagePlugin.warning('取消新建')
}
const onSubmit = ({ validateResult }) => {
  if (validateResult === true) {
    MessagePlugin.success('新建成功')
    wechatConfig(formData)
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
