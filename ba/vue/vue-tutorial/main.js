Vue.component("product-details", {
  template: ` <ul class="product-details">
  <li v-for="detail in details">{{ detail }}</li>
</ul>`,
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  /*  data() {
    return {};
  },
  methods: {},
  computed: {}, */
});

Vue.component("product", {
  template: `
  <div class="product">
  
  <div class="product__img">
    <img :src="image" :alt="product" />
  </div>
  <div class="product__info">
    <h1>{{title}}</h1>
    <p>{{description}}</p>
   <product-details :details="details"></product-details>
    <ul>
      <li v-for="size in sizes" v-bind:key="size">{{ size}}</li>
    </ul>
    <p>User is premium: {{ premium }}</p>
  <p> Shipping is {{shipping}}</p>
    <div
      @mouseover="updateProduct(index)"
      class="color-box"
      v-for="(variant,index) in variants"
      :key="variant.variantId"
      :style="{backgroundColor:variant.variantColor}"
    ></div>
    <div class="cart">
      <p>Cart({{ cart }})</p>
    </div>
    <button
      :disabled="!inStock"
      @click="addToCart"
      :class="{ disabledButton: !inStock }"
    >
      Add to cart
    </button>
    <button v-on:click="removeFromCart">Remove from cart</button>
    <p v-if="inStock > 10">In stock</p>
    <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
    <p :class="{ crossedText: !inStock}" v-else>Out of stock</p>
    <p>{{sale}}</p>
    <a :href="link">More products like this</a>
  </div>
</div>
  `,
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      description: "A pair of warm socks",
      selectedVariant: 0,
      link:
        "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",

      onSale: true,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./assets/Socks-green.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./assets/Socks-blue.jpg",
          variantQuantity: 0,
        },
      ],
      cart: 0,
    };
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      return this.title + (this.onSale ? " is " : " is not ") + "on Sale!";
    },
    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return 2.99;
      }
    },
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart--;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
});

const app = new Vue({
  el: "#app",
  data: {
    premium: true,
  },
});
