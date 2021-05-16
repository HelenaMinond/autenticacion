import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//FIREBASE
import Firebase from "firebase";
import FirebaseConfig from "../config/Firebase";
Firebase.initializeApp(FirebaseConfig);

//BOOTSTRAP VUE
import { BootstrapVue } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Firebase, //FIREBASE
  render: (h) => h(App),
}).$mount("#app");
