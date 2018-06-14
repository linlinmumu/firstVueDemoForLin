import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  //定义状态
  state: {
    author: 'lin shuang'
  }
})

export default store
