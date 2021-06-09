import Vue from 'vue';
import Vuex from 'vuex';
import{getUserLocal} from '@/utils/localStorage.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:getUserLocal() ? getUserLocal() :{}
  },
  mutations: {
    setUser(state,info){
      state.user = {...info};
    }
  },
  actions: {
    asyncSetUser(ctx,info){
      ctx.commit('setUser',info)
    }
  },
  modules: {
  },
});
