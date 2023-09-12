const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      inStock: true,
      inventory: 100,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" }
      ]
    }
  }
})
