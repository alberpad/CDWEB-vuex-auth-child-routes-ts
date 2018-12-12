import { Component, Vue } from 'vue-property-decorator';
import Template from './GuestTem.vue';

@Component({
  mixins: [Template],
})
export default class Guest extends Vue {}
