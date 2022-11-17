import { defineStore } from 'pinia'
import { TOKEN_NAME } from '@/config/global'
import { store, usePermissionStore } from '@/store'
import { staffLogin, staffLogout } from '@/api/common'

const InitUserInfo = {
  roles: ['all'],
}

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem(TOKEN_NAME) || 'abeer-token', // 默认token不走权限
    userInfo: InitUserInfo,
  }),
  getters: {
    roles: state => {
      return state.userInfo?.roles
    },
  },
  actions: {
    async login(userInfo: Record<string, unknown>) {
      const res: string = await staffLogin({ phone: userInfo.account, pwd: userInfo.password })
      if (res) {
        this.token = res
        localStorage.setItem(TOKEN_NAME, res)
        return {
          code: 2000,
          message: '登陆成功',
          data: res,
        }
      }
      throw res
    },
    async getUserInfo() {
      const mockRemoteUserInfo = async (token: string) => {
        if (token === 'main_token') {
          return {
            name: 'td_main',
            roles: ['all'],
          }
        }
        return {
          name: 'td_dev',
          roles: ['UserIndex', 'DashboardBase', 'login'],
        }
      }

      const res = await mockRemoteUserInfo('main_token')

      console.log('getUserInfo', res)
      this.userInfo = res
    },
    async logout() {
      localStorage.removeItem(TOKEN_NAME)
      this.token = ''
      this.userInfo = InitUserInfo
      await staffLogout()
    },
    async removeToken() {
      this.token = ''
    },
  },
  persist: {
    afterRestore: ctx => {
      if (ctx.store.roles && ctx.store.roles.length > 0) {
        const permissionStore = usePermissionStore()
        permissionStore.initRoutes(ctx.store.roles)
      }
    },
  },
})

export function getUserStore() {
  return useUserStore(store)
}
