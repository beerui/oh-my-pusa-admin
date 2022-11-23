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
        <template #tag="{ row }">
          <t-tag class="m-5" theme="success" variant="light">
            {{ getTagName(Number(row.tag)) }}
          </t-tag>
        </template>
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
        :label-width="60"
        @reset="onReset"
        @submit="onSubmit"
      >
        <t-row class="row-gap" :gutter="[0, 6]">
          <t-col :span="12">
            <t-form-item label="标题" name="title">
              <t-textarea v-model="queryForm.title" placeholder="请输入内容" />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="标签" name="tag">
              <t-select v-model="queryForm.tag" placeholder="请选择">
                <t-option v-for="item in tags" :key="item.id" :value="item.id" :label="item.name"></t-option>
              </t-select>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="内容" name="content">
              <v-md-editor v-model="queryForm.content" height="400px"></v-md-editor>
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
  name: 'ListStory',
}
</script>

<script setup lang="ts">
import { ref, onMounted, computed, reactive } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'

import { useSettingStore } from '@/store'
import { prefix } from '@/config/global'

import { COLUMNS } from './constants'
import { storyAdd, storyDel, storyDetail, storyList, questionTagList, storyUpdate } from '@/api/question'

const store = useSettingStore()

const tags = ref([])
const fetchTag = async () => {
  if (tags.value.length !== 0) {
    return Promise.resolve(tags.value)
  }
  const res = await questionTagList()
  tags.value = res.rows
  return Promise.resolve(tags.value)
}
const getTagName = id => {
  if (tags.value.length === 0) return ''
  const findIdx = id => tags.value.findIndex(el => el.id === id)
  if (!id) return '*'
  if (findIdx(id) < 0) return '-'
  return tags.value[findIdx(id)].name
}
interface QueryForm {
  title: string
  content: string
  tag: number
  id?: number
}
const queryForm = reactive({
  title: '',
  content: '',
  tag: '',
} as unknown as QueryForm)
const FORM_RULES = {
  title: [{ required: true, message: '此项必填', type: 'error', trigger: 'blur' }],
  content: [{ required: true, message: '此项必选', type: 'error', trigger: 'blur' }],
  tag: [{ required: true, message: '此项必选', type: 'error', trigger: 'blur' }],
}
const onReset = () => {
  console.log('reset')
}
const onSubmit = ({ validateResult }) => {
  if (validateResult === true) {
    if (handleType.value === 'add') {
      storyAdd(queryForm)
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
      storyUpdate(queryForm)
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
    const { rows, count } = await storyList({
      page: pagination.value.current,
      size: pagination.value.pageSize,
    })
    data.value = rows
    pagination.value = {
      ...pagination.value,
      total: count,
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
  fetchTag()
  fetchData()
})

const confirmVisible = ref(false)

const resetIdx = () => {
  chooseId.value = -1
}

const onConfirmDelete = async () => {
  // 真实业务请发起请求
  if (chooseId.value !== -1) {
    await storyDel(chooseId.value)
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
  if (tags.value.length === 0) {
    await fetchTag()
  }
  handleVisible.value = true
}
const handleClickDelete = (row: { row: any; rowIndex: any }) => {
  chooseId.value = row.row.id
  confirmVisible.value = true
}
const handleClickEdit = async (row: { row: any; rowIndex: any }) => {
  handleType.value = 'edit'
  if (tags.value.length === 0) {
    await fetchTag()
  }
  chooseId.value = row.row.id
  queryForm.id = Number(chooseId.value)
  storyDetail(chooseId.value).then(res => {
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
