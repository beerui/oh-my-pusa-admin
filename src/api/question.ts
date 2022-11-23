import { request } from '@/utils/request'

/**
 * 应用列表
 * @param query
 */
export function questionList(query) {
  return request.post(
    {
      url: '/question/list',
      data: query,
    },
    { urlPrefix: '/api-cms' }
  )
}

export function questionTagList() {
  return request.get(
    {
      url: '/question/tag',
    },
    { urlPrefix: '/api-cms' }
  )
}

export function questionAdd(query) {
  return request.post(
    {
      url: '/question/add',
      data: query,
    },
    { urlPrefix: '/api-cms' }
  )
}
export function questionUpdate(query) {
  return request.post(
    {
      url: '/question/update',
      data: query,
    },
    { urlPrefix: '/api-cms' }
  )
}
export function questionDel(id) {
  return request.get(
    {
      url: `/question/delete?id=${id}`,
    },
    { urlPrefix: '/api-cms' }
  )
}
export function questionDetail(id) {
  return request.get(
    {
      url: `/question/detail?id=${id}`,
    },
    { urlPrefix: '/api-cms' }
  )
}

/**
 * 故事
 * @param query
 */
export function storyList(query) {
  return request.post(
    {
      url: '/story/list',
      data: query,
    },
    { urlPrefix: '/api-cms' }
  )
}

export function storyAdd(query) {
  return request.post(
    {
      url: '/story/add',
      data: query,
    },
    { urlPrefix: '/api-cms' }
  )
}
export function storyUpdate(query) {
  return request.post(
    {
      url: '/story/update',
      data: query,
    },
    { urlPrefix: '/api-cms' }
  )
}
export function storyDel(id) {
  return request.get(
    {
      url: `/story/delete?id=${id}`,
    },
    { urlPrefix: '/api-cms' }
  )
}
export function storyDetail(id) {
  return request.get(
    {
      url: `/question/detail?id=${id}`,
    },
    { urlPrefix: '/api-cms' }
  )
}
