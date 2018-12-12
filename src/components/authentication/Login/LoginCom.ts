import { Component, Vue, Prop } from 'vue-property-decorator';
import Template from './LoginTem.vue';
import { UserLogin } from '@/modules/types';
import MixinValidation from '@/mixins/validation';

@Component({
  mixins: [Template, MixinValidation],
})
export default class Login extends Vue {
  @Prop({
    type: Object,
    required: true,
    validator: (user: UserLogin) => {
      if (!user.hasOwnProperty('email') || !user.hasOwnProperty('password')) {
        console.warn('Usuario no válido');
        return false;
      }
      return true;
    },
  })
  private user!: UserLogin;
}
