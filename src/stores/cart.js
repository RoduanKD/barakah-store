import {defineStore} from "pinia";
import {ref} from "vue";


export const useCartStore = defineStore('cart', () => {
  // const items = ref(JSON.parse(localStorage.getItem('cartItems')) ?? [])
  const items = ref([])

  const addItem = item => {
    items.value.push(item)
    // localStorage.setItem('cartItems', JSON.stringify(items.value))
  }
  const removeItem = (product) => {
    const id = product.id
    const indexToBeDeleted = items.value.findIndex((item) => item.id === id)
    items.value.splice(indexToBeDeleted, 1)
    // localStorage.setItem('cartItems', JSON.stringify(items.value))
  }

  return {items, addItem, removeItem}
}, {
  persist: true,
})
