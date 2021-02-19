Vue.component("app-form", {
  template: `<form>
  <input v-model="message" placeholder="Enter a color" :type="type" :name="name" :id="id">
  <button @click = "textUpdate">Click me!</button>
  <p> {{text}}</p>
</form>`,
  props: {},
  data() {
    return {
      type: "text",
      name: "color",
      id: "id",
      message: "",
      text: "",
      color: "black",
    };
  },
  methods: {
    textUpdate(e) {
      e.preventDefault();
      this.text = this.message;
      this.color = this.message;
      document.body.style.backgroundColor = this.color;
      this.message = "";
    },
  },
  computed: {},
});

Vue.component("number", {
  template: `<form>
  <input v-model="message" placeholder="Enter a number" :type="type" :name="name" :id="id" @blur="update" >
  <p> {{text}}</p>
  <button v-for="(variant, index) in variants" @click.prevent=action(index)>{{variant.text}}</button>
  
</form>`,
  props: {},
  data() {
    return {
      type: "text",
      name: "number",
      id: "number_input",
      message: "",
      text: "0",
      variants: [
        {
          text: "+",
        },
        {
          text: "-",
        },
      ],
    };
  },
  methods: {
    update(e) {
      e.preventDefault();
      this.text = this.message;

      this.message = "";
    },
    action(index, event) {
      index ? this.text-- : this.text++;
    },
  },
  computed: {},
});

Vue.component("links", {
  template: `<ol>
  
  <li v-for="link in links" :key=link.text><a :href = "link.href" :title="link.title"> {{link.text}}</a></li>
  
</ol>`,
  props: {},
  data() {
    return {
      links: [
        {
          text: "Google",
          href: "http://google.com",
          title: "Google",
        },
        {
          text: "Apple",
          href: "http://apple.com",
          title: "Apple",
        },
      ],
    };
  },
  methods: {
    update(e) {
      e.preventDefault();
      this.text = this.message;

      this.message = "";
    },
    action(index, event) {
      index ? this.text-- : this.text++;
    },
  },
  computed: {},
});

Vue.component("variants", {
  template: `
  <div class="variants">
  <button @click.prevent = "ask">{{btnState}}</button>
<button v-for="(variant, index) in variants" v-if="active" @click.prevent=action(index) :ref=variant.ref>{{variant.text}}</button>

  </div>
 `,
  props: {},
  data() {
    return {
      active: false,
      variants: [
        {
          text: "1",
          callBack: "showClick",
          ref: "btn1",
        },
        {
          text: "2",
          callBack: "showTime",
          ref: "btn2",
        },
      ],
    };
  },
  methods: {
    ask(e) {
      this.active = !this.active;
    },
    action(index, event) {
      document.body.removeEventListener("mousedown", this.whichBtn);
      if (index) alert(new Date().toDateString());
      if (!index) {
        document.body.addEventListener("mousedown", this.whichBtn);
      }
    },
    whichBtn(e) {
      console.log(e.which);
    },
  },
  computed: {
    btnState() {
      return this.active ? "Hide variants" : "Show variants";
    },
  },
});

const app = new Vue({
  el: "#app",
  data: {},
  /*  mounted: function () {
    // Attach event listener to the root vue element
    //this.$el.addEventListener("click", this.onClick);
    // Or if you want to affect everything
    document.addEventListener("mousedown", this.onClick);
  },
  beforeDestroy: function () {
    // this.$el.removeEventListener("click", this.onClick);
    document.removeEventListener("mousedown", this.onClick);
  },
  methods: {
    onClick: function (ev) {
      // console.log(ev.offsetX, ev.offsetY);
      // console.log(ev.which);
    },
  }, */
});
