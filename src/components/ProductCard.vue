<script setup>
import {useCartStore} from "@/stores/cart";

defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const cart = useCartStore()
</script>

<template>
  <VCard>
    <v-img
      height="200"
      :src="product.image"
      class="text-white"
      contain
    />
    <VCardTitle>{{ product.title }}</VCardTitle>
    <VCardActions class="justify-end">
      <VBtn
        icon="mdi-cart"
        @click="cart.addItem(product)"
      />
      <slot name="actions" />
    </VCardActions>
  </VCard>
</template>
