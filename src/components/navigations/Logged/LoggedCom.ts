import { Component, Vue } from 'vue-property-decorator';
import Template from './LoggedTem.vue';
import { Mutation } from 'vuex-class';

@Component({
  mixins: [Template],
})
export default class Logged extends Vue {
  @Mutation('logout', { namespace: 'authModule' })
  private logout!: () => void;

  private _logout(): void {
    this.logout();
    this.$router.push('/login');
  }
}
