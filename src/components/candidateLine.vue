<template>
  <div class="card">
    <h1 :title="candidate.id">{{ candidate.getFullName() }}</h1>
    <ul>
      <li>Age: {{ candidate.age }}</li>
      <li>Gender: {{ candidate.gender }}</li>
    </ul>
    <h2>Skills</h2>
    <ul>
      <li>Technical: {{ candidate.skills.technical }}</li>
      <li>Strategic: {{ candidate.skills.strategic }}</li>
      <li>Leadership: {{ candidate.skills.leadership }}</li>
      <li>Communication: {{ candidate.skills.communication }}</li>
      <li>Financial: {{ candidate.skills.financial }}</li>
      <li>Analytical: {{ candidate.skills.analytical }}</li>
      <li>Creative: {{ candidate.skills.creative }}</li>
      <li>Promotional: {{ candidate.skills.promotional }}</li>
    </ul>
    <h2>Listing</h2>
    <span :title="candidate.listing.id">{{ candidate.listing.type }}</span>
    <h2>Compensation</h2>
    Expecting:
    <span>{{ formatCurrency(candidate.compensation) }}</span>

    <card-menu>
      <span class="line-button background-color-orange" @click="hireCandidate(candidate)"
        ><i class="fas fa-plus"></i> Hire Candidate</span
      >
    </card-menu>
  </div>
</template>

<script>
import { toCurrency } from "../scripts/tools.js";
import cardMenu from "./cardMenu.vue";
export default {
  components: { "card-menu": cardMenu },
  props: ["candidate"],
  methods: {
    formatCurrency(input) {
      return toCurrency(input);
    },
    hireCandidate(candidate) {
      this.$store.dispatch("acceptCandidate", candidate);
    },
  },
};
</script>

<style scope>
.line-button {
  display: inline-block;
  text-align: center;
  line-height: 16px;
  height: 16px;
  font-size: 16px;
  color: white;
  min-width: 16px;
  padding: 6px;
  cursor: pointer;
  border-radius: 8px;
}
</style>