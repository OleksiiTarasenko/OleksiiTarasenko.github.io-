<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link
        to="/"
        class="navbar-brand logo animate__animated animate__bounce animate__delay-2s"
        >BAQA</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <template v-if="user.loggedIn">
            <div class="nav-item nav-name">{{ user.data.displayName }}</div>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
          </template>

          <template v-else>
            <li class="nav-item">
              <router-link to="login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link">Register</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
    }),
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Login",
          });
        });
    },
  },
};
</script>

<style>
.navbar {
  margin-bottom: 40px;
}
.nav-name {
  padding-top: 8px;
  color: whitesmoke;
}
.logo {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>