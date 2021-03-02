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
       v-on:remove="removeFromList(item.id)"
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
      /*    
      
      items: [
        {
          id: 1,
          name: 'Усім привіт✋ Нагадую, що у нас сьогодні прогон та чекап перед захистом о 19:00',
          author: 'Admin'
        },
        {
          id: 2,
          name: 'Захист проектів Захист проектів 20200831_FE_Postpay 3 березня 2021 року Початок о 19:00  ',
           author: 'Admin'
        },
        {
          id: 3,
          name: 'Усім привіт  Хто хоче перед або після менторської сесії приєднуйтесь до захисту робіт, подивитись що вас чекає у середу)',
           author: 'Admin'
        },
        {
          id: 4,
          name: 'Welcome! You are invited to join a meeting: 20200831_FE_POSTPAY. ',
           author: 'Admin'

        }
      ], */
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
        id: Date.now(),
        name: this.itemInput,
        author: this.user.data.displayName
      })
      this.itemInput = '';
     
    },
    removeFromList: function(id){
      this.items =  this.items.filter(item => item.id !== id)
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