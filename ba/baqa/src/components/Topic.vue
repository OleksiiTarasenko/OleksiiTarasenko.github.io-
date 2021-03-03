<template>
  <li class="row topic">
    <span class="col-6 col-md-8 col-sm-6 topic__text topic__element"
      >{{ forumTopic.name }}
    </span>
    <div class="col-3 col-md-2 col-sm-3 topic__element topic__author">
      <span class="author"> {{ forumTopic.author }}</span>
    </div>
    <button
      v-on:click="removeItems"
      class="btn btn_del btn_grey col-3 col-md-2 col-sm-3 topic__element"
    >
      Delete
    </button>
  </li>
</template>

<script>
export default {
  name: "Topic",
  props: ["forumTopic"],
  methods: {
    removeItems: function () {
      this.$emit("remove", this.forumTopic.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  line-height: 200%;
}
.topic {
  margin: 10px auto;
  width: 100%;
  color: whitesmoke;
  background-color: lightslategray;
}
.topic__element {
  border: 1px solid whitesmoke;
  text-align: center;
  vertical-align: middle;
}
.topic__text {
  text-align: justify;
  padding: 0 20px;
}

.topic__author {
  display: flex;
}

.author {
  margin: auto;
}

.btn.btn_del.btn_grey {
  background-color: lightslategray;
  color: whitesmoke;
}
</style>