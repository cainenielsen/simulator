<template>
  <div v-if="candidateData">
    <h1 :title="candidateData.id">{{ candidateData.getFullName() }}</h1>
    <ul>
      <li>Age: {{ candidateData.age }}</li>
      <li>Gender: {{ candidateData.gender }}</li>
    </ul>
    <h2>Skills</h2>
    <ul>
      <li>Technical: {{ candidateData.skills.technical }}</li>
      <li>Strategic: {{ candidateData.skills.strategic }}</li>
      <li>Leadership: {{ candidateData.skills.leadership }}</li>
      <li>Communication: {{ candidateData.skills.communication }}</li>
      <li>Financial: {{ candidateData.skills.financial }}</li>
      <li>Analytical: {{ candidateData.skills.analytical }}</li>
      <li>Creative: {{ candidateData.skills.creative }}</li>
      <li>Promotional: {{ candidateData.skills.promotional }}</li>
    </ul>
    <h2>Listing</h2>
    <span :title="candidateData.listing">{{
      $store.getters.get_typeById(
        $store.getters.get_positionById(candidateData.listing).type
      ).name
    }}</span>
    <h2>Compensation</h2>
    <div>
      Expecting:
      <span>{{ formatCurrency(candidateData.compensation) }}</span>
    </div>
    <Button
      @click="hireCandidate(candidateData)"
      icon="fas fa-plus"
      name="Hire"
      :disabled="false"
      backgroundColor="var(--emerald)"
      textColor="var(--white)"
    ></Button>
  </div>
</template>

<script>
import button from "@/components/button.vue";
import { toCurrency } from "@/scripts/tools.js";

export default {
  components: { Button: button },
  data() {
    return {
      candidateData: null,
    };
  },
  methods: {
    pullData() {
      this.candidateData = this.$store.getters.get_Candidate(
        parseInt(this.$route.params.id)
      );
    },
    formatCurrency(input) {
      return toCurrency(input);
    },
    hireCandidate(candidate) {
      this.$store
        .dispatch("acceptCandidate", candidate)
        .then((staffMemberId) => {
          this.$router.replace({
            name: "Staff Member",
            params: { id: staffMemberId },
          });
        });
    },
  },
  beforeMount() {
    this.pullData();
  },
};
</script>

<style></style>
