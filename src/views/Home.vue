<template>
  <div>
    <b-dropdown text="H" variant="info" class="m-2">
      <b-dropdown-item href="" @click="cerrar">Cerras sesión</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import Firebase from "firebase"
export default {
  name: "Home",
  methods: {
    cerrar() {
      Firebase.auth().signOut()
        .then((accept) => {
          console.log(accept);
          this.$router.push("login");
        });
    },
  },
};
</script>
