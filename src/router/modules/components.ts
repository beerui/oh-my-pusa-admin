import Layout from '@/layouts/index.vue';
import ListIcon from '@/assets/assets-slide-list.svg';

export default [
  {
    path: '/app',
    name: 'app',
    component: Layout,
    redirect: '/app/list',
    meta: { title: '应用列表', icon: ListIcon },
    children: [
      {
        path: 'list',
        name: 'ListApp',
        component: () => import('@/pages/list/app/index.vue'),
        meta: { title: '应用列表', hidden: true },
      },
      {
        path: 'handle',
        name: 'ListAppHandle',
        component: () => import('@/pages/list/app/handle.vue'),
        meta: { title: '处理', hidden: true },
      },
    ],
  },
  {
    path: '/tag',
    name: 'tag',
    component: Layout,
    redirect: '/tag/list',
    meta: { title: '标签列表', icon: ListIcon },
    children: [
      {
        path: 'list',
        name: 'ListTag',
        component: () => import('@/pages/list/tag/index.vue'),
        meta: { title: '标签列表', hidden: true },
      },
    ],
  },
  {
    path: '/category',
    name: 'category',
    component: Layout,
    redirect: '/category/list',
    meta: { title: '类别列表', icon: ListIcon },
    children: [
      {
        path: 'list',
        name: 'ListCategory',
        component: () => import('@/pages/list/category/index.vue'),
        meta: { title: '类别列表', hidden: true },
      },
    ],
  },
  {
    path: '/question',
    name: 'question',
    component: Layout,
    redirect: '/question/list',
    meta: { title: '题目列表', icon: ListIcon },
    children: [
      {
        path: 'list',
        name: 'ListQuestion',
        component: () => import('@/pages/list/question/index.vue'),
        meta: { title: '题目列表', hidden: true },
      },
    ],
  },
  {
    path: '/story',
    name: 'story',
    component: Layout,
    redirect: '/story/list',
    meta: { title: '故事列表', icon: ListIcon },
    children: [
      {
        path: 'list',
        name: 'ListStory',
        component: () => import('@/pages/list/story/index.vue'),
        meta: { title: '故事列表', hidden: true },
      },
    ],
  },
];
