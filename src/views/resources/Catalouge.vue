<template>
  <h1>Apps</h1>
  <div class="grid">
    <div
      class="grid-item"
      v-for="resource in $store.getters.list_resourcesByType('apps')"
      :key="resource.id"
      :class="{
        'grid-item-active': resource.purchased === true,
      }"
    >
      {{ resource.name }}<br /><br /><b>
        {{ $store.getters.getCurrencyFormat(resource.cost) }}/m</b
      ><br /><br /><button
        @click="purchaseItem(resource.id)"
        v-if="resource.purchased === false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(resource.id)">X Cancel</button>
    </div>
  </div>
  <h1>Appliances</h1>
  <div class="grid">
    <div
      class="grid-item"
      v-for="resource in $store.getters.list_resourcesByType('appliances')"
      :key="resource.id"
      :class="{
        'grid-item-active': resource.purchased === true,
      }"
    >
      {{ resource.name }}<br /><br /><b>
        {{ $store.getters.getCurrencyFormat(resource.cost) }}/m</b
      ><br /><br /><button
        @click="purchaseItem(resource.id)"
        v-if="resource.purchased === false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(resource.id)">X Cancel</button>
    </div>
  </div>
  <h1>Vehicles</h1>
  <div class="grid">
    <div
      class="grid-item"
      v-for="resource in $store.getters.list_resourcesByType('vehicles')"
      :key="resource.id"
      :class="{
        'grid-item-active': resource.purchased === true,
      }"
    >
      {{ resource.name }}<br /><br /><b>
        {{ $store.getters.getCurrencyFormat(resource.cost) }}/m</b
      ><br /><br /><button
        @click="purchaseItem(resource.id)"
        v-if="resource.purchased === false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(resource.id)">X Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    purchaseItem(item) {
      this.$store.dispatch("purchaseItem", item);
    },
    cancelItem(item) {
      this.$store.dispatch("cancelItem", item);
    },
  },
};
</script>

<style></style>
