import Layout from '@/layouts/index.vue'
import SettingIcon from '@/assets/setting.svg'

export default [
  {
    path: '/setting',
    name: 'setting',
    component: Layout,
    redirect: '/setting/config',
    meta: { title: '系统管理', icon: SettingIcon },
    children: [
      {
        path: 'config',
        name: 'SettingConfig',
        component: () => import('@/pages/setting/config/index.vue'),
        meta: { title: '基础配置' },
      },
    ],
  },
]
