<script setup>
import { ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";

const products = ref([])
const cart = ref([])

fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(items => {
  products.value = items
})
</script>

<template>
  <section class="pt-16">
    <v-container>
      <h2 class="text-h4 text-center">
        Our Products
      </h2>

      <VDivider
        class="my-3"
        color="primary"
      />

      <VRow class="mt-6">
        <VCol
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          lg="4"
        >
          <ProductCard :product="product" />
        </VCol>
      </VRow>
    </v-container>
  </section>
</template>
