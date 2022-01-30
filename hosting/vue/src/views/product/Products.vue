<template>
  <div>
    <p class="text-align-center">
      This is a list of products that you can sell.
    </p>
    <router-link to="/product/products/new">
      <Button name="New Product"></Button>
    </router-link>
    <card v-for="product in $store.getters.get_allProducts" :key="product.id">
      <h2>{{ product.name }}</h2>
      <div>Cost: <currency :amount="product.cost" /></div>
    </card>
  </div>
</template>

<script>
import card from "@/components/card.vue";
import button from "@/components/button.vue";
import currency from "@/components/currency.vue";
export default {
  components: {
    card,
    Button: button,
    currency,
  },
};
</script>

<style></style>
