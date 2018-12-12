import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class MixinValidation extends Vue {
  private validateState(ref: string): string | null {
    // @ts-ignore
    if (this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)) {
      // @ts-ignore
      return !this.errors.has(ref) ? 'valid' : 'invalid';
    }
    return null;
  }
}
