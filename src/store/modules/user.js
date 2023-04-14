import { login } from "@/api/sys";
import { setItem, getItem, removeAllItem } from "@/utils/storage";
import { TOKEN } from "@/constant";
import router from "@/router";
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || "",
    userInfo: {}
  }),
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
    },
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        login({
          username,
          password: password,
        })
          .then((data) => {      
            console.log(data)
                  
            this.commit('user/setToken',data.token)
            this.commit('user/setUserInfo', data.data)
            router.push('/')
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  },
};
