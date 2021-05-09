<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Finances</h3>
    <div>
      Capital:
      <b
        ><span>{{ formatCurrency(finances.capital) }}</span></b
      >
    </div>
    <div>
      Bills:
      <ul>
        <li v-for="bill in finances.bills" :key="bill">
          {{ bill.name }} | {{ formatCurrency(bill.cost) }}
        </li>
      </ul>
    </div>
    <h3>people</h3>
    <ul>
      <li v-for="member in people" :key="member">
        {{ member.firstName }} {{ member.lastName }} | {{ member.role }}
      </li>
    </ul>
  </div>
</template>

<script>
import { toCurrency } from "../scripts/tools.js";
export default {
  name: "Dashboard",
  props: {
    msg: String,
  },
  methods: {
    formatCurrency(input) {
      return toCurrency(input);
    },
  },
  data() {
    return {
      finances: {
        capital: 50000,
        bills: [
          {
            name: "Rent",
            cost: 3000,
          },
        ],
      },
      people: [
        {
          firstName: "Caine",
          lastName: "Nielsen",
          role: "CEO",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
