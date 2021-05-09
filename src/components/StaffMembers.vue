<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>people</h2>
    <staffmember-line
      v-for="member in $store.getters.get_peopleState.staff"
      :key="member"
      :member="member"
    ></staffmember-line>
    <h2>Recruiting</h2>
    <h3>positions</h3>
    <button @click="positionModalOpen = !positionModalOpen">
      Open Position
    </button>
    <new-position v-if="positionModalOpen"></new-position>
    <position-line
      v-for="position in $store.getters.get_peopleState.positions"
      :key="position"
      :position="position"
    ></position-line>
    <h3>candidates</h3>
    <button @click="recruit">Recruit Candidates</button>
    <candidate-line
      v-for="candidate in $store.getters.get_peopleState.candidates"
      :key="candidate"
      :candidate="candidate"
    ></candidate-line>
  </div>
</template>

<script>
import { toCurrency } from "../scripts/tools.js";
import staffMemberLine from "./staffMemberLine.vue";
import positionLine from "./positionLine.vue";
import newPosition from "./newPosition.vue";
import candidateLine from "./candidateLine.vue";
export default {
  name: "StaffMembers",
  components: {
    "staffmember-line": staffMemberLine,
    "position-line": positionLine,
    "new-position": newPosition,
    "candidate-line": candidateLine,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      positionModalOpen: false,
    };
  },
  methods: {
    formatCurrency(input) {
      return toCurrency(input);
    },
    recruit() {
      this.$store.dispatch("createCandidate");
    },
  },
};
</script>
