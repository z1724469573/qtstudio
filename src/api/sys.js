//用户登录，管理
import Ajax from '@/utils/request'

export const login = data => {
   return Ajax.post('/login.do', {account: data})
}