import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Usando import './plugins' da error con bootstrap-vue
// import './plugins'
// Usando require funciona
require('./plugins');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
