import { Component, Vue } from 'vue-property-decorator';
import Template from './NotesViewTem.vue';

@Component({
  mixins: [Template],
})
export default class NotesView extends Vue {}
