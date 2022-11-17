<template>
  <div>
    <t-card class="list-card-container">
      <t-row justify="space-between">
        <div class="left-operation-container">
          <t-form>
            <t-form-item label-width="0">
              <t-input v-model="addForm.name" placeholder="请输入类别名称"></t-input>
              <t-button v-if="renameVisible" @click="onConfirmRename"> 修改 </t-button>
              <t-button v-else @click="handleAdd"> 新增 </t-button>
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
          <a class="t-button-link" @click="handleClickRename(slotProps)">重命名</a>
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
  name: 'ListCategory',
};
</script>

<script setup lang="ts">
import { ref, onMounted, computed, reactive } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';

import { useSettingStore } from '@/store';
import { prefix } from '@/config/global';

import { COLUMNS } from './constants';
import { categoryAdd, categoryDel, categoryList, categoryUpdate } from '@/api/app';

const store = useSettingStore();

const data = ref([]);
const pagination = ref({
  defaultPageSize: 20,
  pageSize: 20,
  current: 1,
  total: 0,
  defaultCurrent: 1,
});

const dataLoading = ref(false);
const fetchData = async () => {
  dataLoading.value = true;
  try {
    const { list, total } = await categoryList({
      page: pagination.value.current,
      size: pagination.value.pageSize,
    });
    data.value = list;
    pagination.value = {
      ...pagination.value,
      total,
    };
  } catch (e) {
    console.log(e);
  } finally {
    dataLoading.value = false;
  }
};

const chooseId = ref(-1);
const confirmBody = computed(() => {
  if (chooseId.value > -1) {
    return `删除确认？`;
  }
  return '';
});

onMounted(() => {
  fetchData();
});

const confirmVisible = ref(false);

const resetIdx = () => {
  chooseId.value = -1;
};

const onConfirmDelete = async () => {
  // 真实业务请发起请求
  if (chooseId.value !== -1) {
    await categoryDel(chooseId.value);
    fetchData();
    MessagePlugin.success('删除成功');
    confirmVisible.value = false;
  }
  resetIdx();
};

const renameVisible = ref(false);
const onConfirmRename = async () => {
  // 真实业务请发起请求
  if (chooseId.value !== -1) {
    await categoryUpdate({ id: chooseId.value, name: addForm.name });
    fetchData();
    MessagePlugin.success('修改成功');
    renameVisible.value = false;
    addForm.name = '';
  }
  resetIdx();
};

const onCancel = () => {
  resetIdx();
};

const rowKey = 'id';

const rehandlePageChange = (curr) => {
  // console.log('分页变化', curr, pageInfo);
  pagination.value = { ...curr };
};
const rehandleChange = () => {
  // console.log('统一Change', changeParams, triggerAndData);
  fetchData();
};
/**
 * 新增
 */
const addForm = reactive({ name: '' });
const handleAdd = async () => {
  if (!addForm.name) {
    MessagePlugin.error('无内容');
    return;
  }
  await categoryAdd(addForm);
  MessagePlugin.success('新增成功');
  addForm.name = '';
  fetchData();
};
const handleClickDelete = (row: { row: any; rowIndex: any }) => {
  chooseId.value = row.row.id;
  confirmVisible.value = true;
};
const handleClickRename = (row: { row: any; rowIndex: any }) => {
  chooseId.value = row.row.id;
  renameVisible.value = true;
};

const offsetTop = computed(() => {
  return store.isUseTabsRouter ? 48 : 0;
});

const getContainer = () => {
  return document.querySelector(`.${prefix}-layout`);
};
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
