<template>
  <div>
    <t-card class="list-card-container">
      <t-row justify="space-between">
        <div class="left-operation-container">
          <t-button @click="handleAdd"> 新增 </t-button>
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
        <template #categories="{ row }">
          <t-tag v-for="item in row.categories" class="m-5" theme="success" variant="light">
            {{ commonStore.GET_CATE_NAME(item) }}
          </t-tag>
        </template>
        <template #tags="{ row }">
          <t-tag v-for="item in row.tags" class="m-5" theme="success" variant="light">
            {{ commonStore.GET_TAG_NAME(item) }}
          </t-tag>
        </template>
        <template #icon="{ row }">
          <img class="m-icon" :src="row.icon" alt="" />
        </template>
        <template #op="slotProps">
          <a class="t-button-link" @click="handleClickEdit(slotProps)">编辑</a>
          <a class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
        </template>
      </t-table>
    </t-card>

    <t-dialog
      v-model:visible="confirmVisible"
      header="确认删除当前所选合同？"
      :body="confirmBody"
      :on-cancel="onCancel"
      @confirm="onConfirmDelete"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ListApp',
}
</script>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'

import { useRouter } from 'vue-router'
import { useCommonStore, useSettingStore } from '@/store'
import { prefix } from '@/config/global'

import { COLUMNS } from './constants'
import { programDel, programList } from '@/api/app'

const router = useRouter()

const commonStore = useCommonStore()
const store = useSettingStore()

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
    const { list, total } = await programList({
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
    await programDel(chooseId.value)
    await MessagePlugin.success('删除成功')
    await fetchData()
    confirmVisible.value = false
  }
  resetIdx()
}

const onCancel = () => {
  resetIdx()
}

const rowKey = 'id'

const rehandlePageChange = curr => {
  pagination.value = { ...curr }
}
const rehandleChange = () => {
  fetchData()
}
/**
 * 新增
 */
const handleAdd = () => {
  router.push('/app/handle?type=add')
}
const handleClickDelete = (row: { row: any; rowIndex: any }) => {
  chooseId.value = row.row.id
  confirmVisible.value = true
}
const handleClickEdit = (row: { row: any }) => {
  router.push(`/app/handle?type=edit&id=${row.row.id}`)
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
.m-icon {
  width: 40px;
  height: 40px;
}
.m-5 {
  margin: 5px;
}
</style>
