export const COLUMNS = [
  {
    title: '应用名称',
    align: 'left',
    width: 120,
    ellipsis: true,
    colKey: 'name',
  },
  {
    title: '简介',
    colKey: 'descr',
    width: 120,
    ellipsis: true,
  },
  {
    title: '图标',
    width: 85,
    colKey: 'icon',
    cell: { col: 'icon' },
  },
  {
    title: '类别',
    width: 180,
    colKey: 'categories',
    cell: { col: 'categories' },
  },
  {
    title: '评分',
    width: 85,
    ellipsis: true,
    colKey: 'score',
  },
  {
    title: '标签',
    width: 180,
    colKey: 'tags',
    cell: { col: 'tags' },
  },
  {
    title: '排序',
    width: 85,
    ellipsis: true,
    colKey: 'weight',
  },
  {
    title: '使用人数',
    width: 85,
    ellipsis: true,
    colKey: 'userCount',
  },
  {
    title: '应用归属',
    width: 120,
    ellipsis: true,
    colKey: 'belong',
  },
  {
    title: '应用归属信息',
    width: 160,
    ellipsis: true,
    colKey: 'belongingInfo',
  },
  {
    title: '收藏',
    width: 85,
    ellipsis: true,
    colKey: 'favoritesTimes',
  },
  {
    title: '点赞',
    width: 85,
    ellipsis: true,
    colKey: 'likeTimes',
  },
  {
    title: '编辑推荐',
    width: 120,
    ellipsis: true,
    colKey: 'isEditorChoice',
  },
  {
    align: 'left',
    fixed: 'right',
    width: 180,
    colKey: 'op',
    title: '操作',
  },
]
