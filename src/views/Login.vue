<template>
  <div>
    <b-card title="Login" style="max-width: 20rem;" class="mx-auto mt-5">
      <!-- Formulario -->
      <b-form>
        <!-- Usuario -->
        <b-form-group class="mt-3" label="Usuario:">
          <b-form-input v-model="user" type="email" placeholder="Ingrese correo" required></b-form-input>
        </b-form-group>
        <!-- Contraseña -->
        <b-form-group class="mt-3" label="Contraseña:">
          <b-form-input v-model="pass" type="password" placeholder="Ingrese contraseña" required></b-form-input>
        </b-form-group>
        <!-- Botón -->
        <b-button @click="login()" class="mt-4" variant="info">Ingresar</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "Login",
  computed: {
    user: {
      get() {
        return this.$store.state.user;
      },
      set(value) {
        this.$store.commit("cargaUser", value);
      },
    },
    pass: {
      get() {
        return this.$store.state.pass
      },
      set(value) {
        this.$store.commit("cargaPass", value);
      },
    },
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>