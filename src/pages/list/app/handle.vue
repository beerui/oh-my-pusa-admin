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
        <div class="form-basic-container-title">应用{{ pageType === 'add' ? '新增' : '编辑' }}</div>
        <t-row class="row-gap" :gutter="[16, 24]">
          <t-col :span="6">
            <t-form-item label="应用名称" name="name">
              <t-input v-model="formData.name" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="应用评分(0-10)" name="score">
              <t-input-number v-model="formData.score" :max="10" :min="0" :decimal-places="2" />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="应用图标" name="icon">
              <t-upload
                v-model="filesIcon"
                action="https://file.beer-ui.com/file-api/file/upload"
                draggable
                accept="image/*"
                tips="建议尺寸：124x124"
                is-batch-upload
                theme="image"
              />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="应用简介" name="descr">
              <t-textarea v-model="formData.descr" :maxlength="50" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="类别" name="categories">
              <t-select v-model="formData.categories" placeholder="请选择" multiple>
                <t-option
                  v-for="item in commonStore.GET_CATE_LIST"
                  :key="item.id"
                  :value="item.id"
                  :label="item.name"
                ></t-option>
              </t-select>
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="标签" name="tags">
              <t-select v-model="formData.tags" placeholder="请选择" multiple>
                <t-option
                  v-for="item in commonStore.GET_TAG_LIST"
                  :key="item.id"
                  :value="item.id"
                  :label="item.name"
                ></t-option>
              </t-select>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="应用归属" name="belong">
              <t-radio-group v-model="formData.belong" default-value="1">
                <t-radio allow-uncheck :value="1">默认（集成在小程序中）</t-radio>
                <t-radio allow-uncheck :value="2">自有-外部发布的小程序</t-radio>
                <t-radio allow-uncheck :value="3">第三方-小程序</t-radio>
                <t-radio :value="4">其他</t-radio>
              </t-radio-group>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="补充内容（自有：路径 外部：appid 第三方：appid 其它：自定义）" name="belongInfo">
              <t-input v-model="formData.belongingInfo" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="推荐排序(0-100 越小越前)" name="weight">
              <t-input v-model="formData.weight" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="编辑推荐" name="isEditorChoice">
              <t-radio-group v-model="formData.isEditorChoice" :default-value="0">
                <t-radio :value="0">否</t-radio>
                <t-radio :value="1">是</t-radio>
              </t-radio-group>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="应用评测" name="evaluation">
              <v-md-editor v-model="formData.evaluation" height="400px"></v-md-editor>
            </t-form-item>
          </t-col>
        </t-row>
      </div>
    </div>
    <div class="form-submit-container">
      <t-button theme="primary" class="form-submit-confirm" type="submit">
        {{ pageType === 'add' ? '新增' : '更新' }}
      </t-button>
      <t-button type="reset" class="form-submit-cancel" theme="default" variant="base"> 返回 </t-button>
    </div>
  </t-form>
</template>

<script lang="ts">
export default {
  name: 'ListAppHandle',
}
</script>

<script setup lang="ts">
import { onBeforeMount, reactive, ref } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { useRoute, useRouter } from 'vue-router'
import { programAdd, programDetail, programUpdate } from '@/api/app'
import { useCommonStore } from '@/store'
import { AddAppModel } from '@/api/model/appModel'

const route = useRoute()
const router = useRouter()
const pageType = route.query.type
const FORM_RULES = {
  name: [{ required: true, message: '此项必填', type: 'error', trigger: 'blur' }],
  descr: [
    { required: true, message: '次项必填', type: 'error', trigger: 'blur' },
    { validator: val => val.length < 50, message: '不能超过 50 个字，中文长度等于英文长度' },
  ],
  evaluation: [{ required: true, message: '此项必填', type: 'error', trigger: 'blur' }],
  icon: [{ required: true }],
  categories: [
    { required: true, message: '此项必选', type: 'warning', trigger: 'blur' },
    { required: true, message: '此项必选', type: 'warning', trigger: 'change' },
  ],
  tags: [
    { required: true, message: '此项必选', type: 'warning', trigger: 'blur' },
    { required: true, message: '此项必选', type: 'warning', trigger: 'change' },
  ],
  belong: [{ required: true, message: '此项必填', type: 'error', trigger: 'blur' }],
  belongingInfo: [{ required: true, message: '此项必填', type: 'error', trigger: 'blur' }],
}
/**
 * 类别 标签
 */
const commonStore = useCommonStore()
/**
 * 判断是新增还是修改
 */
onBeforeMount(async () => {
  if (pageType === 'edit') {
    const { id } = route.query
    const res = await programDetail(id)
    for (const resKey in res) {
      formData[resKey] = res[resKey]
    }
    formData.id = Number(id)
    if (formData.icon) {
      filesIcon.value = [
        {
          status: 'success',
          uploadTime: '编辑 不展示',
          response: {
            url: formData.icon,
          },
          url: formData.icon,
        },
      ]
    }
  }
})

const filesIcon = ref([])
let formData = reactive({
  name: '',
  descr: '',
  evaluation: '',
  icon: '',
  score: 0,
  weight: 100,
  belong: 1,
  belongingInfo: '',
  isEditorChoice: 0, // 0 否 1 是
  categories: [],
  tags: [],
} as AddAppModel)
const onReset = () => {
  router.back()
}
const onSubmit = ({ validateResult }) => {
  if (filesIcon.value.length === 0) {
    MessagePlugin.error('图标未传')
    return
  }
  formData.icon = filesIcon.value[0].response.url
  if (validateResult === true) {
    if (pageType === 'add') {
      programAdd(formData)
        .then(res => {
          MessagePlugin.success('新建成功')
          router.back()
        })
        .catch(err => {
          console.log(err)
        })
    }
    if (pageType === 'edit') {
      programUpdate(formData)
        .then(res => {
          MessagePlugin.success('更新成功')
          router.back()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped></style>
