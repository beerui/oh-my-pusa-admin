import Layout from '@/layouts/index.vue'
import ListIcon from '@/assets/assets-slide-list.svg'

export default [
  {
    path: '/setting',
    name: 'setting',
    component: Layout,
    redirect: '/setting/config',
    meta: { title: '系统管理', icon: ListIcon },
    children: [
      {
        path: 'config',
        name: 'ListBase',
        component: () => import('@/pages/setting/config/index.vue'),
        meta: { title: '基础配置' },
      },
    ],
  },
]
