<script setup>
import {useCartStore} from "@/stores/cart";
import {computed} from "vue";
import ProductCard from "@/components/ProductCard.vue";

const cart = useCartStore()

const products = computed(() => cart.items)
</script>

<template>
  <VContainer>
    <VRow>
      <VCol
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        lg="4"
      >
        <ProductCard :product="product">
          <template #actions>
            <VBtn
              icon="mdi-delete"
              color="error"
              @click="cart.removeItem(product)"
            />
          </template>
        </ProductCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
