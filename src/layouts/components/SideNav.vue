<template>
  <div :class="sideNavCls">
    <t-menu :class="menuCls" :theme="theme" :value="active" :collapsed="collapsed" :default-expanded="defaultExpanded">
      <template #logo>
        <span v-if="showLogo" class="m-logo" :class="`${prefix}-side-nav-logo-wrapper`" @click="goHome">
          <img class="logo" src="@/assets/logo.jpg" /> <span class="m-logo-name">我滴天哪</span>
        </span>
      </template>
      <menu-content :nav-data="menu" />
      <template #operations>
        <span class="version-container"> {{ !collapsed ? '我滴天哪' : '' }} {{ pgk.version }} </span>
      </template>
    </t-menu>
    <div :class="`${prefix}-side-nav-placeholder${collapsed ? '-hidden' : ''}`"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, PropType } from 'vue'
import { useRouter } from 'vue-router'
import union from 'lodash/union'

import { useSettingStore } from '@/store'
import { prefix } from '@/config/global'
import pgk from '../../../package.json'
import { MenuRoute } from '@/types/interface'
import { getActive, getRoutesExpanded } from '@/router'

import MenuContent from './MenuContent.vue'

const MIN_POINT = 992 - 1

const props = defineProps({
  menu: {
    type: Array as PropType<MenuRoute[]>,
    default: () => [],
  },
  showLogo: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  isFixed: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  layout: {
    type: String as PropType<string>,
    default: '',
  },
  headerHeight: {
    type: String as PropType<string>,
    default: '64px',
  },
  theme: {
    type: String as PropType<string>,
    default: 'light',
  },
  isCompact: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const collapsed = computed(() => useSettingStore().isSidebarCompact)

const active = computed(() => getActive())

const defaultExpanded = computed(() => {
  const path = getActive()
  const parentPath = path.substring(0, path.lastIndexOf('/'))
  const expanded = getRoutesExpanded()
  return union(expanded, parentPath === '' ? [] : [parentPath])
})

const sideNavCls = computed(() => {
  const { isCompact } = props
  return [
    `${prefix}-sidebar-layout`,
    {
      [`${prefix}-sidebar-compact`]: isCompact,
    },
  ]
})

const menuCls = computed(() => {
  const { showLogo, isFixed, layout } = props
  return [
    `${prefix}-side-nav`,
    {
      [`${prefix}-side-nav-no-logo`]: !showLogo,
      [`${prefix}-side-nav-no-fixed`]: !isFixed,
      [`${prefix}-side-nav-mix-fixed`]: layout === 'mix' && isFixed,
    },
  ]
})

const router = useRouter()
const settingStore = useSettingStore()

const autoCollapsed = () => {
  const isCompact = window.innerWidth <= MIN_POINT
  settingStore.updateConfig({
    isSidebarCompact: isCompact,
  })
}

onMounted(() => {
  autoCollapsed()
  window.onresize = () => {
    autoCollapsed()
  }
})

const goHome = () => {
  router.push('/dashboard/base')
}
</script>

<style lang="less" scoped>
.logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
}
.m-logo {
  display: flex;
  align-items: center;
  &-name {
    margin-left: 20px;
    font-size: 18px;
  }
}
</style>
