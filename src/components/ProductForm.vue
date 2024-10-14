<template>
  <form @submit.prevent="submitProduct">
    <div>
      <label for="name">Product Name</label>
      <input type="text" v-model="product.name" id="name" required />
    </div>

    <div>
      <label for="price">Price</label>
      <input type="number" v-model="product.price" id="price" required />
    </div>

    <div>
      <label for="description">Description</label>
      <textarea v-model="product.description" id="description" required></textarea>
    </div>

    <button type="submit">Add Product</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        price: null,
        description: ''
      }
    }
  },
  methods: {
    submitProduct() {
      this.$emit('add-product', { ...this.product })
      this.product = { name: '', price: null, description: '' }
    }
  }
}
</script>
