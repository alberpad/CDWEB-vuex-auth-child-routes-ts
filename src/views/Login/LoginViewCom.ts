import LoginForm from '@/components/authentication/Login/LoginCom';
import { Component, Vue } from 'vue-property-decorator';
import Template from './LoginViewTem.vue';
import { UserLogin } from '@/modules/types';
import { State, Action } from 'vuex-class';

@Component({
  mixins: [Template],
  components: {
    LoginForm,
  },
})
export default class LoginView extends Vue {
  private user: UserLogin = {
    email: 'admin@vue.com',
    password: '@Password1',
  };

  @Action('signIn', { namespace: 'authModule' })
  private signIn!: Function;
  @State('error', { namespace: 'authModule' })
  private error!: boolean;
  @State('errorMessage', { namespace: 'authModule' })
  private errorMessage!: string;
  private async processLoginSubmit(): Promise<boolean | undefined> {
    const validate = await this.$validator.validateAll();
    if (!validate) {
      return false;
    }
    await this.signIn(this.user);
    this.$router.push('/secret');
    return true;
  }
}
