<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
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
      <VBtn icon="mdi-cart" />
    </VCardActions>
  </VCard>
</template>
