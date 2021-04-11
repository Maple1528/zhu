import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    isLogin: false,
    user: {
      id: ''
    }
  },
  mutations: {
    changeLogin (state, isLogin) {
      state.isLogin = isLogin
    },
    changeUser (state, id) {
      state.user.id = id
    },
    set_token (state, token) {
      state.token = token
      // sessionStorage.token = token
    },
    del_token (state) {
      state.token = ''
      // sessionStorage.removeItem('token')
    }
  },
  actions: {
  },
  getters: {

  },
  modules: {
  }
})

export default store
