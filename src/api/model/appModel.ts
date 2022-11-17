export interface AppListResult {
  list: Array<AppListModel>
  total: number
  code: number
}
export interface TagListResult {
  list: Array<commonListModel>
  total: number
  code: number
}
export interface CategoryListResult {
  list: Array<commonListModel>
  total: number
  code: number
}
export interface AppListModel {
  id: number
  name: string
  descr: string
  icon: string
  categories: Array<number>
  score: number
  tags: Array<number>
  weight: number
  userCount: number
  favoritesTimes: number
  likeTimes: number
  belong: number
}
export interface commonListModel {
  id: number
  name: string
}

export interface AddAppModel {
  id?: number
  name: string
  descr: string
  evaluation: string
  icon: string
  categories: Array<number>
  score: number
  tags: Array<number>
  weight: number
  favoritesTimes: number
  likeTimes: number
  belong: number
  belongInfo: string
  isEditorChoice: number
}
