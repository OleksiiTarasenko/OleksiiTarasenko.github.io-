<template>
  <div id="forums">
    <div class="content">
      <h1 class="title">Message board</h1>
      <form class="form">
        <textarea
          class="input"
          v-model="itemInput"
          placeholder="Add message"
          rows="1"
          cols="75"
        ></textarea>
        <button class="btn btn_add" v-on:click.prevent="insert" type="submit">
          Add
        </button>
      </form>
      <ul class="forums__list">
        <topic
          v-for="item in this.$store.getters.GET_TOPICS"
          v-bind:forumTopic="item"
          v-on:remove="removeTopic(item.id)"
          :key="item.id"
        ></topic>
      </ul>
    </div>
    <footer class="footer bg-dark">
      <ul class="footer__list">
        <li class="footer__item">
          <span>
            <a
              class="nav-link"
              href="https://drive.google.com/file/d/1cMEX-y4hQhM8W--l6DuC9DKst-4ztws1/view?usp=sharing"
              target="blank"
              >Oleksii Tarasenko 2021 &copy;</a
            >
          </span>
        </li>
        <li class="footer__item">
          <ul class="social">
            <li class="social__item">
              <a
                class="nav-link"
                href="https://github.com/OleksiiTarasenko"
                target="blank"
                ><i class="fab fa-github"></i
              ></a>
            </li>
            <li class="social__item">
              <a
                class="nav-link"
                href="https://www.facebook.com/profile.php?id=100003839317784"
                target="blank"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li class="social__item">
              <a
                class="nav-link"
                href="https://www.linkedin.com/in/oleksiitarasenko/"
                target="blank"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import topic from "./Topic";
import { mapGetters } from "vuex";
import db from "../main";

export default {
  name: "Home",

  components: {
    topic,
  },
  beforeCreate: function () {
    this.$store.dispatch("setTopics");
  },
  data() {
    return {
      itemInput: "",
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    insert: function () {
      if (!this.itemInput) return;
      db.collection("topics")
        .add({
          time: Date.now(),
          name: this.itemInput,
          author: this.user.data.displayName,
        })
        .then((response) => {
          if (response) {
            this.itemInput = "";
          }
        });
    },
    removeTopic: function (id) {
      let creator;
      db.collection("topics")
        .doc(id)
        .get()
        .then((doc) => (creator = doc.data().author))
        .then((creator) => {
          if (creator == this.user.data.displayName && id) {
            db.collection("topics")
              .doc(id)
              .delete()
              .then(function () {
                console.log("Document successfully deleted");
              });
          } else this.$router.replace({ name: "Error" });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#forums {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content {
  flex: 1 0 auto;
}

.title {
  text-align: center;
  text-transform: uppercase;
  padding-top: 40px;
}

.input {
  resize: none;
  overflow: hidden;
  padding: 1em;
  box-sizing: border-box;
  max-width: 80%;
}

.input::placeholder {
  opacity: 0.7;
}

.btn_add {
  margin: 0 5px;
  width: 200px;
  height: 55px;
  background-color: lightslategray;
  border: 1px black solid;
  color: whitesmoke;
}

.forums {
  margin: 20px auto 0;
  width: 90%;
  background-color: azure;
}

.forums__list {
  width: 90%;
  margin: 0 auto;
  list-style: none;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 50px;
}

.footer {
  flex-shrink: 0;
}
.footer__list {
  width: 90%;
  margin: 0 auto;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
footer a {
  color: lightgray;
}
.social {
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 25%;
}
.nav-link:hover {
  color: white;
}

@media screen and (max-width: 767px) {
  .forums {
    width: 100%;
  }
  .forums__list {
    width: 100%;
    padding: 0;
  }
}
@media screen and (max-width: 639px) {
  .footer__list {
    flex-direction: column-reverse;
    margin: 0 auto;
    padding: 0;
  }
  .footer__item {
    width: 100%;
    text-align: center;
  }
  .form {
    flex-direction: column;
  }
  .input,
  .btn_add {
    width: 80%;
    margin: 5px;
  }
  .social {
    font-size: 1.25rem;
    width: 100%;
    padding: 10px 0;
    justify-content: space-evenly;
  }
}
</style>