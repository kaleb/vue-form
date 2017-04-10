
import VueFormConfigMixin from './config';

export default class VueForm extends VueFormConfigMixin {
  static install(Vue, ...options) {
    Vue.mixin(new this(...options));
  }
  static get installed() {
    return !!this.install.done;
  }
  static set installed(val) {
    this.install.done = val;
  }
}

// Allow to be used as mixin itself
VueFormConfigMixin.call(VueForm);