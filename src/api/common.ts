import { request } from '@/utils/request'

export function staffLogin(userInfo: Record<string, unknown>) {
  return request.post<string>({
    url: '/staff/login',
    data: userInfo,
  })
}

export function staffLogout() {
  return request.get({
    url: '/staff/logout',
  })
}

/**
 * 微信小程序信息管理
 * @param query
 */
export function wechatConfig(query) {
  return request.post({
    url: '/wechat/mini/app/add',
    data: query
  })
}
