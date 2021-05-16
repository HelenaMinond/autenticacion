import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase"
import router from '@/router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "", 
    pass: "" 
  },
  mutations: {
    cargaUser(state, user) {
      state.user = user
    },
    cargaPass(state, pass) {
      state.pass = pass
    }
  },
  actions: {
    login({ state }) { 
      firebase.auth().signInWithEmailAndPassword(state.user, state.pass)
        .then((userCredential) => {
          console.log(userCredential);
          router.push("home")
        })
        .catch((error) => {
          console.log(error)
        });
    },
  },
});