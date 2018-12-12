import { Component, Vue } from 'vue-property-decorator';
import Template from './SecretViewTem.vue';

@Component({
  mixins: [Template],
})
export default class SecretView extends Vue {}
