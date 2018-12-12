import Vue from 'vue';
import { ActionContext, ActionTree } from 'vuex';
import { AuthState, User } from '@/modules/auth/types';
import { RootState } from '@/modules/types';
import { AxiosResponse } from 'axios';

type AuthActionContext = ActionContext<AuthState, RootState>;
type AuthActionTree = ActionTree<AuthState, RootState>;

export const actions: AuthActionTree = {
  async signIn(context: AuthActionContext, user: User): Promise<any> {
    try {
      // Empezamos mostrando el Loader
      context.commit('setLoading', true, { root: true });
      const response: AxiosResponse = await Vue.axios({
        method: 'POST',
        url: '/login',
        data: user,
      });
      context.commit('setUser', user);
    } catch (error) {
      context.commit('authError', error.message);
    } finally {
      // Finalizamos deteniendo el Loader
      context.commit('setLoading', false, { root: true });
      console.log('petición de login finalizada');
    }
  },
};
