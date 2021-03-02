<template>
  <li class="row topic">
               <span class="col-10 topic__text">{{forumTopic.name}} </span>
               <span class="col-1"> {{forumTopic.author}}</span>
               <button v-on:click="removeItems" class="btn btn_del col-1">Delete</button>
  </li>
</template>

<script>
export default {
  name: "Topic",
  props: ['forumTopic'],
  methods: {
        removeItems: function(){
        
        this.$emit('remove', this.forumTopic.id)
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topic {
  margin: 40px auto 0;
  width:100%;
  background-color: lightskyblue;

}
</style>