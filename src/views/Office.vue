<template>
  <div>
    <h1>Owned Locations</h1>
    <div class="grid">
      <div
        v-for="office in $store.getters.get_ownedOffices"
        :key="office.id"
        class="grid-item active"
      >
        {{ office.name }}<br /><br />Capacity: {{ office.capacity
        }}<br /><br /><b>{{ formatCurrency(office.cost) }}</b
        ><br /><br /><button @click="sellOffice(office.id)">Sell</button>
      </div>
    </div>
    <hr />
    <h1>Available Locations</h1>
    <div class="grid">
      <div
        v-for="office in $store.getters.get_availableOffices"
        :key="office.id"
        class="grid-item"
      >
        {{ office.name }}<br /><br />Capacity: {{ office.capacity
        }}<br /><br /><b>{{ formatCurrency(office.cost) }}</b
        ><br /><br /><button @click="purchaseOffice(office.id)">
          Purchase
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { toCurrency } from "../scripts/tools.js";
export default {
  name: "Office",
  methods: {
    formatCurrency(num) {
      return toCurrency(num);
    },
  },
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 19% 19% 19% 19% 19%;
  grid-column-gap: 1.25%;
  grid-row-gap: 16px;
  padding-bottom: 5vw;
}
.grid-item {
  background-color: rgb(152, 152, 255);
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px;
  overflow: hidden;
  text-align: center;
}
.active {
  background-color: rgb(152, 255, 161);
}
</style>
