<template>
  <div class="title">
    <h1>Hello {{msg}}  </h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {msg: 'Welcome to my World'}
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin: 40px 0 0;
}
</style>
