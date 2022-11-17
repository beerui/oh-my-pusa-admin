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
    <div class="form-basic-container">
      <div class="form-basic-item">
        <div class="form-basic-container-title">系统配置</div>
        <t-row class="row-gap" :gutter="[16, 24]">
          <t-col :span="6">
            <t-form-item label="小程序名称（全局）" name="name">
              <t-input v-model="formData.name" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="邮箱" name="name">
              <t-input v-model="formData.name" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="版本信息" name="name">
              <t-input v-model="formData.name" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="官方网站" name="name">
              <t-input v-model="formData.name" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="appid" name="name">
              <t-input v-model="formData.name" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="secret" name="name">
              <t-input v-model="formData.name" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="平台内部的appid" name="name">
              <t-input v-model="formData.name" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="关于我们" name="name">
              <t-textarea v-model="formData.name" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
        </t-row>
      </div>
    </div>

    <div class="form-submit-container">
      <div class="form-submit-sub">
        <div class="form-submit-left">
          <t-button theme="primary" class="form-submit-confirm" type="submit"> 提交 </t-button>
          <t-button type="reset" class="form-submit-cancel" theme="default" variant="base"> 取消 </t-button>
        </div>
      </div>
    </div>
  </t-form>
</template>

<script lang="ts">
export default {
  name: 'FormBase',
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { FORM_RULES, INITIAL_DATA } from './constants'

const formData = ref({ ...INITIAL_DATA })

const onReset = () => {
  MessagePlugin.warning('取消新建')
}
const onSubmit = ({ validateResult }) => {
  if (validateResult === true) {
    MessagePlugin.success('新建成功')
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
