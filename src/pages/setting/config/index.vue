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
            <t-form-item label="邮箱" name="email">
              <t-input v-model="formData.email" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="版本信息" name="version">
              <t-input v-model="formData.version" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="官方网站" name="officialSite">
              <t-input v-model="formData.officialSite" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="appid(标注)" name="miniAppId">
              <t-input v-model="formData.miniAppId" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="secret(标注)" name="miniAppSecret">
              <t-input v-model="formData.miniAppSecret" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="appid(本平台)" name="appId">
              <t-input v-model="formData.appId" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="关于我们" name="descr">
              <t-textarea v-model="formData.descr" :style="{ width: '322px' }" placeholder="请输入内容" />
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
