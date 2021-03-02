<template>
  <div id="forums">
  
 <h1 class="title">Message board</h1>
  <form class="form">
			<textarea class="input" v-model="itemInput"  placeholder="Add message" rows="2" cols="75"></textarea>
			<button class="btn" v-on:click="insert" type="submit">Add</button>
	</form>
  <ul class="forums__list">
     <topic
       v-for="item in this.$store.getters.GET_TOPICS" 
       v-bind:forumTopic = "item"
       v-on:remove="removeTopic(item.id)"
       :key="item.id"
     ></topic>
  </ul>
  </div>
</template>

<script>
import topic from "./Topic";
import { mapGetters } from "vuex";
import db  from '../main'; 

export default {
  name: "Home",
  
 components: {
    topic
  },
  beforeCreate: function () {
    this.$store.dispatch('setTopics')
  },
  data(){
    return{
      
      itemInput:  ''    
    }
  },
   computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    insert: function(event){
      event.preventDefault()
      if(!this.itemInput)  return 
      db.collection('topics').add({
        time:Date.now(),
        name: this.itemInput,
        author: this.user.data.displayName
      }).then((response) => {
    if (response) {
      this.itemInput = ''
    }
  })
     
    },
    removeTopic: function(id){
      let creator;
      db.collection('topics').doc(id).get().then((doc) =>
       creator = doc.data().author).then((creator) => 
       {if (creator==this.user.data.displayName && id) { db.collection('topics').doc(id).delete()
                                                        .then(function() {
                                                                          console.log('Document successfully deleted')
                                                                          }
                                                        )} else console.log('Can not delete!')
        });
    
     
      /* if (id) {
        
        db.collection('topics').doc(id).delete().then(function() {
          console.log('Document successfully deleted')
        })
      } */
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
  text-transform: uppercase;
}
.forums {
  margin: 20px auto 0;
  width: 90%;
  background-color: azure;

}
.forums__list {
  list-style: none;
  width: 90%;
  margin: 0 auto;
}
.form {
  display:flex;
 justify-content: center;
 align-items: center;
}
</style>