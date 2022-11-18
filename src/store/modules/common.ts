import { defineStore } from 'pinia'
import { categoryList, tagList } from '@/api/app'
import { store } from '@/store'

export const useCommonStore = defineStore('common', {
  state: () => ({
    TAG_LIST: [],
    CATE_LIST: [],
    BELONG_LIST: [
      { id: 1, name: '默认' },
      { id: 2, name: '自有-外部发布的小程序' },
      { id: 3, name: '第三方-小程序' },
      { id: 4, name: '其它' },
    ],
  }),
  getters: {
    GET_TAG_NAME: state => {
      const findIdx = id => state.TAG_LIST.findIndex(el => el.id === id)
      return id => {
        if (!id) return '*'
        if (findIdx(id) < 0) return '-'
        return state.TAG_LIST[findIdx(id)].name
      }
    },
    GET_CATE_NAME: state => {
      const findIdx = id => state.CATE_LIST.findIndex(el => el.id === id)
      return id => {
        if (!id) return '*'
        if (findIdx(id) < 0) return '-'
        return state.CATE_LIST[findIdx(id)].name
      }
    },
    GET_TAG_LIST: state => {
      return state.TAG_LIST
    },
    GET_BELONG_LIST: state => {
      return state.BELONG_LIST
    },
    GET_CATE_LIST: state => {
      return state.CATE_LIST
    },
  },
  actions: {
    async initCommon() {
      await tagList({ page: 1, size: 99 }).then(res => {
        this.TAG_LIST = res.list
      })
      await categoryList({ page: 1, size: 99 }).then(res => {
        this.CATE_LIST = res.list
      })
    },
  },
})

export function getCommonStore() {
  return useCommonStore(store)
}
