<template>
  <div>
    <p class="text-align-center">
      This is your financial dashboard, where you can see your costs and income.
    </p>
    <div class="layout">
      <div class="left card">
        <h1>Costs</h1>
        <h2>Payroll:</h2>
        <list>
          <line-item
            v-for="position in $store.getters.get_activePositions"
            :key="position.id"
          >
            <span>{{ $store.getters.get_typeById(position.type).name }}</span>
            <span>{{ currencyDisplay(position.compensation) }}</span>
          </line-item>
        </list>
        Total: {{ currencyDisplay($store.getters.get_totalPayRollCost) }}
        <h2>Resources:</h2>
        <list>
          <line-item
            v-for="resource in $store.getters.get_activeResources"
            :key="resource.id"
          >
            <span>{{ resource.name }}</span>
            <span>{{ currencyDisplay(resource.cost) }}</span>
          </line-item>
        </list>
        Total: {{ currencyDisplay($store.getters.get_totalResourceCost) }}
        <h2>Facilities:</h2>
        <list>
          <line-item
            v-for="facility in $store.getters.get_ownedFacilities"
            :key="facility.id"
          >
            <span>{{ facility.name }}</span>
            <span>{{ currencyDisplay(facility.cost) }}</span>
          </line-item>
        </list>
        Total: {{ currencyDisplay($store.getters.get_totalFacilitiesCost) }}
        <h3>Total: {{ currencyDisplay($store.getters.get_totalCosts) }}</h3>
      </div>
      <div class="right card">
        <h1>Income</h1>
        <ul>
          <li>Product 1:</li>
          <li>Product 2:</li>
          <li>Product 3:</li>
          <li>Product 4:</li>
        </ul>
        <h3>Total:</h3>
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/components/list.vue";
import lineItem from "@/components/line-item.vue";
import { toCurrency } from "@/scripts/tools.js";
export default {
  name: "Finance",
  components: {
    "line-item": lineItem,
    list: List,
  },
  methods: {
    currencyDisplay(number) {
      return toCurrency(number);
    },
  },
};
</script>
<style scoped>
.layout {
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
