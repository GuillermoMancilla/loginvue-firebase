import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import router from "@/router"
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false;

let app = null

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
})


