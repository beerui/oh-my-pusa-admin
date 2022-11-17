import { request } from '@/utils/request'
import { AddAppModel, AppListResult, CategoryListResult, TagListResult } from '@/api/model/appModel'

/**
 * 应用列表
 * @param query
 */
export function programList(query) {
  return request.post<AppListResult>({
    url: '/app/program/list',
    data: query,
  })
}

export function programAdd(query) {
  return request.post<AddAppModel>({
    url: '/app/program/add',
    data: query,
  })
}
export function programDel(id) {
  return request.get({
    url: `/app/program/del?id=${id}`,
  })
}

/**
 * 应用类别
 * @param query
 */
export function categoryAdd(query) {
  return request.post({
    url: '/app/program/category/add',
    data: query,
  })
}

export function categoryUpdate(query) {
  return request.post({
    url: '/app/program/category/update',
    data: query,
  })
}
export function categoryList(query) {
  return request.post<CategoryListResult>({
    url: '/app/program/category/list',
    data: query,
  })
}
export function categoryDel(id) {
  return request.get({
    url: `/app/program/category/del?id=${id}`,
  })
}

/**
 * 应用标签
 * @param query
 */
export function tagAdd(query) {
  return request.post({
    url: '/app/program/tag/add',
    data: query,
  })
}

export function tagUpdate(query) {
  return request.post({
    url: '/app/program/tag/update',
    data: query,
  })
}
export function tagList(query) {
  return request.post<TagListResult>({
    url: '/app/program/tag/list',
    data: query,
  })
}
export function tagDel(id) {
  return request.get({
    url: `/app/program/tag/del?id=${id}`,
  })
}
