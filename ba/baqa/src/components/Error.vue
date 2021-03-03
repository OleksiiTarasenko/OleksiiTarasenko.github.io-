<template>
  <div class="title">
    <div class="alert alert-danger name" role="alert">
      You can not delete other users' messages
    </div>
    <router-link to="/" class="nav-link">Close</router-link>
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>


<style scoped>
.title {
  margin: 40px auto 0;
  width: 60%;
}
</style>