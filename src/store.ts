import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import vuexLocal from '@/plugins/vuex-persist';
import { RootState } from '@/modules/types';
// import { todoModule } from '@/store/modules/todo/index';
import { authModule } from '@/modules/auth/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    loading: false,
    appName: 'Vuejs 2 + Vuex + TypeScript',
    appVersion: '0.0.1',
  },
  mutations: {
    setLoading(state: RootState, bool: boolean): void {
      state.loading = bool;
    },
  },
  modules: {
    // todoModule,
    authModule,
  },
  plugins: [vuexLocal.plugin],
};

export default new Vuex.Store<RootState>(store);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
// });
