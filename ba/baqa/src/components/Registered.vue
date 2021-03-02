<template>
  <div class="title">
    <div  class="alert alert-success name" role="alert">Successfully registered! Please log in!</div>
     <router-link to="navbar" class="nav-link">Close</router-link>
  </div>
</template>

<script>
export default {
  name: "Registered",
  data() {
    return {}
       }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin: 40px 0 0;
}
</style>