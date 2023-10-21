<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h3 font-weight-thin mb-4">
        Welcome to AlBarakah Store
      </h1>
      <VBtn>View Products</VBtn>
    </div>
  </v-parallax>
  <ProductsList />
</template>

<script setup>
import ProductsList from "@/components/ProductsList.vue";
</script>
