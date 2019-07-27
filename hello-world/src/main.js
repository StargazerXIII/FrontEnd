import Vue from 'vue'
import App from './App.vue'
import PolarisVue from '@eastsideco/polaris-vue';

// Recommended: import the correct CSS for the version of Polaris the library uses.
import '@eastsideco/polaris-vue/lib/polaris-vue.css';

// Register the plugin with Vue
Vue.use(PolarisVue);

// Use polaris components in your Vue templates
new Vue({
  el: '#app',
  template: '<polaris-layout><polaris-button>Hello world!</polaris-button></polaris-layout>'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
