<template>
  <t-form
    ref="form"
    :class="['item-container', `login-${type}`]"
    :data="formData"
    :rules="FORM_RULES"
    label-width="0"
    @submit="onSubmit"
  >
    <template v-if="type == 'password'">
      <t-form-item name="account">
        <t-input v-model="formData.account" size="large" placeholder="请输入账号：admin">
          <template #prefix-icon>
            <t-icon name="user" />
          </template>
        </t-input>
      </t-form-item>

      <t-form-item name="password">
        <t-input
          v-model="formData.password"
          size="large"
          :type="showPsw ? 'text' : 'password'"
          clearable
          placeholder="请输入登录密码：admin"
        >
          <template #prefix-icon>
            <t-icon name="lock-on" />
          </template>
          <template #suffix-icon>
            <t-icon :name="showPsw ? 'browse' : 'browse-off'" @click="showPsw = !showPsw" />
          </template>
        </t-input>
      </t-form-item>

      <div class="check-container remember-pwd">
        <t-checkbox>记住账号</t-checkbox>
      </div>
    </template>

    <t-form-item v-if="type !== 'qrcode'" class="btn-container">
      <t-button block size="large" type="submit"> 登录 </t-button>
    </t-form-item>
  </t-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { FormInstanceFunctions, MessagePlugin } from 'tdesign-vue-next'
import { useUserStore } from '@/store'

const userStore = useUserStore()

const INITIAL_DATA = {
  phone: '',
  account: 'admin',
  password: '20221111',
  verifyCode: '',
  checked: false,
}

const FORM_RULES = {
  phone: [{ required: true, message: '手机号必填', type: 'error' }],
  account: [{ required: true, message: '账号必填', type: 'error' }],
  password: [{ required: true, message: '密码必填', type: 'error' }],
  verifyCode: [{ required: true, message: '验证码必填', type: 'error' }],
}

const type = ref('password')

const form = ref<FormInstanceFunctions>()
const formData = ref({ ...INITIAL_DATA })
const showPsw = ref(false)

const router = useRouter()

const onSubmit = async ({ validateResult }) => {
  if (validateResult === true) {
    try {
      await userStore.login(formData.value)

      MessagePlugin.success('登陆成功')
      router.push({
        path: '/dashboard/base',
      })
    } catch (e) {
      console.log(e)
      MessagePlugin.error(e.message)
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../index.less');
</style>
