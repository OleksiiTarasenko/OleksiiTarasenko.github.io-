<template>
  <div>
    <navbar></navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import navbar from "./components/Navbar";
export default {
  components: {
    navbar,
  },
};
</script>