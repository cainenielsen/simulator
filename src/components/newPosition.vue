<template>
  <div class="card">
    <h1>New Position</h1>
    Type:
    <select>
      <option v-for="type in $store.getters.positionTypes" :key="type">
        {{ type.name }}
      </option></select
    ><br />
    Level:
    <select>
      <option v-for="level in $store.getters.positionLevels" :key="level">
        {{ level.name }}
      </option></select
    ><br />
    Start Date: <input type="date" />
    <h2>Compensation</h2>
    <select>
      <option>Hourly</option>
      <option>Salary</option>
    </select>
    <input type="number" />
  </div>
</template>

<script>
import { toCurrency } from "../scripts/tools.js";
export default {
  props: ["position"],
  methods: {
    formatCurrency(input) {
      return toCurrency(input);
    },
  },
};
</script>