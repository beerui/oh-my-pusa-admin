<template>
  <div>
    <t-card class="list-card-container">
      <t-row justify="space-between">
        <div class="left-operation-container">
          <t-form>
            <t-form-item label-width="0">
              <t-button @click="handleAdd"> 新增 </t-button>
            </t-form-item>
          </t-form>
        </div>
      </t-row>
      <t-table
        :data="data"
        :columns="COLUMNS"
        :row-key="rowKey"
        vertical-align="top"
        :hover="true"
        :pagination="pagination"
        :loading="dataLoading"
        :header-affixed-top="{ offsetTop, container: getContainer }"
        @page-change="rehandlePageChange"
        @change="rehandleChange"
      >
        <template #op="slotProps">
          <a class="t-button-link" @click="handleClickEdit(slotProps)">修改</a>
          <a class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
        </template>
      </t-table>
    </t-card>

    <t-dialog
      v-model:visible="confirmVisible"
      header="确认删除当前所选？"
      :body="confirmBody"
      :on-cancel="onCancel"
      @confirm="onConfirmDelete"
    />
    <t-dialog
      v-model:visible="handleVisible"
      :header="handleType === 'add' ? '新增' : '编辑'"
      :footer="false"
      width="80%"
      :on-cancel="onCancel"
      @confirm="onConfirmDelete"
    >
      <t-form
        ref="form"
        :data="queryForm"
        :rules="FORM_RULES"
        label-align="left"
        :label-width="160"
        @reset="onReset"
        @submit="onSubmit"
      >
        <t-row class="row-gap" :gutter="[16, 24]">
          <t-col :span="6">
            <t-form-item label="小程序名称（全局）" name="name">
              <t-input v-model="queryForm.name" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="邮箱" name="email">
              <t-input v-model="queryForm.email" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="版本信息" name="version">
              <t-input v-model="queryForm.version" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="官方网站" name="officialSite">
              <t-input v-model="queryForm.officialSite" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="appid(标注)" name="miniAppId">
              <t-input v-model="queryForm.miniAppId" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="secret(标注)" name="miniAppSecret">
              <t-input v-model="queryForm.miniAppSecret" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="appid(本平台)" name="appId">
              <t-input v-model="queryForm.appId" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="关于我们" name="descr">
              <t-textarea v-model="queryForm.descr" :style="{ width: '322px' }" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
        </t-row>
        <t-button theme="primary" class="form-submit-confirm" type="submit">
          {{ handleType === 'add' ? '新增' : '更新' }}
        </t-button>
      </t-form>
    </t-dialog>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ListMiniApp',
}
</script>

<script setup lang="ts">
import { ref, onMounted, computed, reactive } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'

import { useSettingStore } from '@/store'
import { prefix } from '@/config/global'

import { COLUMNS } from './constants'
import { miniAppAdd, miniAppDel, miniAppDetail, miniAppList, miniAppUpdate } from '@/api/app'

const store = useSettingStore()

const queryForm = reactive({
  appId: '',
  miniAppId: '',
  miniAppSecret: '',
  name: '',
  descr: '',
  email: '',
  version: '',
  officialSite: '',
})
const FORM_RULES = {
  appId: [{ required: true }],
  miniAppId: [{ required: true }],
  miniAppSecret: [{ required: true }],
  name: [{ required: true }],
  descr: [{ required: true }],
  email: [{ required: true }],
  version: [{ required: true }],
  officialSite: [{ required: true }],
}
const onReset = () => {}
const onSubmit = ({ validateResult }) => {
  if (validateResult === true) {
    if (handleType.value === 'add') {
      miniAppAdd(queryForm)
        .then(res => {
          MessagePlugin.success('新建成功')
          handleVisible.value = false
          fetchData()
        })
        .catch(err => {
          console.log(err)
        })
    }
    if (handleType.value === 'edit') {
      miniAppUpdate(queryForm)
        .then(res => {
          MessagePlugin.success('更新成功')
          handleVisible.value = false
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
const data = ref([])
const pagination = ref({
  defaultPageSize: 20,
  pageSize: 20,
  current: 1,
  total: 0,
  defaultCurrent: 1,
})

const dataLoading = ref(false)
const fetchData = async () => {
  dataLoading.value = true
  try {
    const { list, total } = await miniAppList({
      page: pagination.value.current,
      size: pagination.value.pageSize,
    })
    data.value = list
    pagination.value = {
      ...pagination.value,
      total,
    }
  } catch (e) {
    console.log(e)
  } finally {
    dataLoading.value = false
  }
}

const chooseId = ref(-1)
const confirmBody = computed(() => {
  if (chooseId.value > -1) {
    return `删除确认？`
  }
  return ''
})

onMounted(() => {
  fetchData()
})

const confirmVisible = ref(false)

const resetIdx = () => {
  chooseId.value = -1
}

const onConfirmDelete = async () => {
  // 真实业务请发起请求
  if (chooseId.value !== -1) {
    await miniAppDel(chooseId.value)
    fetchData()
    MessagePlugin.success('删除成功')
    confirmVisible.value = false
  }
  resetIdx()
}

const handleVisible = ref(false)
const handleType = ref('add')

const onCancel = () => {
  resetIdx()
}

const rowKey = 'id'

const rehandlePageChange = curr => {
  // console.log('分页变化', curr, pageInfo);
  pagination.value = { ...curr }
}
const rehandleChange = () => {
  // console.log('统一Change', changeParams, triggerAndData);
  fetchData()
}
/**
 * 新增
 */
const handleAdd = async () => {
  handleType.value = 'add'
  handleVisible.value = true
}
const handleClickDelete = (row: { row: any; rowIndex: any }) => {
  chooseId.value = row.row.id
  confirmVisible.value = true
}
const handleClickEdit = async (row: { row: any; rowIndex: any }) => {
  handleType.value = 'edit'
  chooseId.value = row.row.id
  queryForm.id = Number(chooseId.value)
  miniAppDetail(chooseId.value).then(res => {
    for (const resKey in res) {
      queryForm[resKey] = res[resKey]
    }
    handleVisible.value = true
  })
}
const offsetTop = computed(() => {
  return store.isUseTabsRouter ? 48 : 0
})

const getContainer = () => {
  return document.querySelector(`.${prefix}-layout`)
}
</script>

<style lang="less" scoped>
.payment-col {
  display: flex;

  .trend-container {
    display: flex;
    align-items: center;
    margin-left: 8px;
  }
}

.left-operation-container {
  padding: 6px 0;
  margin-bottom: 16px;

  .selected-count {
    display: inline-block;
    margin-left: 8px;
    color: var(--td-text-color-secondary);
  }
}

.search-input {
  width: 360px;
}
</style>
