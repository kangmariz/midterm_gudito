<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
    <router-view :products="products" @add-product="addProduct" @edit-product="editProduct" />
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const products = reactive([])

    const addProduct = (newProduct) => {
      products.push(newProduct)
    }

    const editProduct = ({ index, product }) => {
      products[index] = product
    }

    return {
      products,
      addProduct,
      editProduct
    }
  }
}
</script>

<style scoped>
nav {
  background-color: #f0f0f0;
  padding: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: gray;
}

a.router-link-exact-active {
  font-weight: bold;
}
</style>
