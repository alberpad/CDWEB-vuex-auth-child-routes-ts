<template>
  <div id="app">
    <loading :active.sync="loading"></loading>
    <b-container>
      <navigation-guest v-if="!isLogged"></navigation-guest>
      <navigation-logged v-else></navigation-logged>
      <router-view/>
    </b-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import { State } from 'vuex-class';
import NavigationLogged from '@/components/navigations/Logged/LoggedCom';
import NavigationGuest from '@/components/navigations/Guest/GuestCom';
// @ts-ignore
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

@Component({
  components: {
    NavigationLogged,
    NavigationGuest,
    Loading,
  },
})
export default class App extends Vue {
  private currentPath: string = '/';
  @State('isLogged', {namespace: 'authModule'})
  private isLogged !: boolean;
  @State('loading')
  private loading !: boolean;
  // @Watch('$route.path', {immediate: true})
  // private changeRoute(path: string): void {
  //   this.currentPath = path;
  //   console.log(this.currentPath);
  // }
}
</script>