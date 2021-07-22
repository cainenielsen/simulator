<template>
  <div>
    <h1>Owned Locations</h1>
    <div class="grid">
      <div
        v-for="office in $store.getters.get_ownedOffices"
        :key="office.id"
        class="grid-item grid-item-active"
      >
        {{ office.name }}<br /><br />Capacity: {{ office.capacity
        }}<br /><br /><b>{{ formatCurrency(office.cost) }}</b
        ><br /><br /><button @click="sellOffice(office.id)">Sell</button>
      </div>
    </div>
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
import { toCurrency } from "@/scripts/tools.js";
export default {
  name: "Office",
  methods: {
    formatCurrency(num) {
      return toCurrency(num);
    },
  },
};
</script>
