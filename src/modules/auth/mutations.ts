import { MutationTree } from 'vuex';
import { AuthState, User } from './types';

type AuthMutationTree = MutationTree<AuthState>;

export const mutations: AuthMutationTree = {
  setUser(state: AuthState, user: User) {
    state.user = user;
    state.isLogged = true;
    state.error = false;
    state.errorMessage = '';
  },
  logout(state: AuthState) {
    state.user = null;
    state.isLogged = false;
  },
  authError(state: AuthState, payload: string) {
    state.error = true;
    state.errorMessage = payload;
    state.user = null;
    state.isLogged = false;
  },
};
