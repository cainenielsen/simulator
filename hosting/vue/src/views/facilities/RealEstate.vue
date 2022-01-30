<template>
  <div>
    <p class="text-align-center">
      Here you can rent or purchase additional facilities.
    </p>
    <div class="text-align-center">
      <router-link :to="{ query: { type: 'office' } }">
        <span
          class="bubble-button"
          style="
            background-color: var(--peter-river-100);
            color: var(--peter-river-900);
          "
          :class="{ 'active-blue': $route.query.type === 'office' }"
          >Offices</span
        >
      </router-link>
      <router-link :to="{ query: { type: 'storefront' } }">
        <span
          class="bubble-button"
          style="background-color: var(--carrot-100); color: var(--carrot-900)"
          :class="{ 'active-red': $route.query.type === 'storefront' }"
          >Storefronts</span
        >
      </router-link>
      <router-link :to="{ query: { type: 'storage' } }">
        <span
          class="bubble-button"
          style="
            background-color: var(--emerald-100);
            color: var(--emerald-900);
          "
          :class="{ 'active-green': $route.query.type === 'storage' }"
          >Storage</span
        >
      </router-link>
    </div>
    <Card v-for="facility in filteredLocations" :key="facility.id">
      <h1>{{ facility.name }}</h1>
      {{ facility.type }}<br /><br />Capacity: {{ facility.capacity
      }}<br /><br />Storage: {{ facility.storage }}<br /><br />Up Front Cost:
      <b>{{ formatCurrency(facility.cost) }}</b
      ><br /><br />
      Rent:
      <b>{{ formatCurrency(facility.rent) }}/m</b><br /><br />
      <Button
        name="Purchase"
        backgroundColor="var(--emerald)"
        textColor="white"
        @click="purchaseFacility(facility)"
      />
    </Card>
  </div>
</template>

<script>
import { toCurrency } from "@/scripts/tools.js";
import card from "@/components/card.vue";
import button from "@/components/button.vue";

export default {
  components: { Card: card, Button: button },
  methods: {
    formatCurrency(num) {
      return toCurrency(num);
    },
    purchaseFacility(facility) {
      this.$store.dispatch("purchaseFacility", facility).then((resp) => {
        alert(resp);
      });
    },
  },
  computed: {
    sortedLocations() {
      return this.$store.getters.get_availableFacilities
        .slice(0)
        .sort((a, b) => a.cost - b.cost);
    },
    filteredLocations() {
      if (this.$route.query.type) {
        return this.sortedLocations.filter(
          (location) => location.type === this.$route.query.type
        );
      } else {
        return this.sortedLocations;
      }
    },
  },
};
</script>

<style scoped>
.bubble-button {
  height: 48px;
  border-radius: 32px;
  line-height: 48px;
  display: inline-block;
  min-width: 128px;
  margin-right: 8px;
  margin-left: 8px;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
}

.active-blue {
  background-color: var(--peter-river-200) !important;
  color: var(--peter-river-900) !important;
}

.active-red {
  background-color: var(--carrot-200) !important;
  color: var(--peter-river-900) !important;
}

.active-green {
  background-color: var(--emerald-200) !important;
  color: var(--peter-river-900) !important;
}
</style>
