import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/css/material-icons.scss';

Vue.use(Vuesax)

new Vue({
  el: '#app',
  render: h => h(App)
})
