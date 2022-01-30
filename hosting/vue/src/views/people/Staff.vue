<template>
  <div>
    <p class="text-align-center">
      People who have been hired by your company will appear here.
    </p>
    <staffmember-line
      v-for="member in $store.getters.get_peopleState.staff"
      :key="member"
      :member="member"
    ></staffmember-line>
  </div>
</template>

<script>
import { toCurrency } from "@/scripts/tools.js";
import staffMemberLine from "@/components/staffMemberLine.vue";
export default {
  name: "StaffMembers",
  components: {
    "staffmember-line": staffMemberLine,
  },
  props: {
    msg: String,
  },
  methods: {
    formatCurrency(input) {
      return toCurrency(input);
    },
  },
};
</script>
