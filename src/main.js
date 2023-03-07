import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { store } from './store/Tasks.js';
// import 'bootstrap/dist/css/bootstrap.css'
import "../styles/scrollbar.css";
import "../styles/cardStyles.css";

Vue.config.productionTip = false

new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
