import { createStore } from 'vuex'
import user from './modules/user.js'
import app from './modules/app'
import theme from './modules/theme.js'
import getters from './getters'



export default createStore({
  getters,
  modules: {
    user,
    app,
    theme
  }
})
