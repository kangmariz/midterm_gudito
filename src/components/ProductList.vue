<template>
  <div>
    <ul v-if="products.length > 0">
      <li v-for="(product, index) in products" :key="index">
        <span>{{ product.name }} - ${{ product.price }}</span>
        <button @click="editProduct(index)">Edit</button>
      </li>
    </ul>
    <div v-if="editingIndex !== null">
      <h3>Edit Product</h3>
      <form @submit.prevent="submitEdit">
        <input v-model="editingProduct.name" placeholder="Name" />
        <input v-model="editingProduct.price" type="number" placeholder="Price" />
        <textarea v-model="editingProduct.description" placeholder="Description"></textarea>
        <button type="submit">Save</button>
        <button @click="cancelEdit">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data() {
    return {
      editingIndex: null,
      editingProduct: null
    }
  },
  methods: {
    editProduct(index) {
      this.editingIndex = index
      this.editingProduct = { ...this.products[index] }
    },
    submitEdit() {
      this.$emit('edit-product', { index: this.editingIndex, product: this.editingProduct })
      this.editingIndex = null
    },
    cancelEdit() {
      this.editingIndex = null
    }
  }
}
</script>
