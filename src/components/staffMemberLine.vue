<template>
  <div class="card">
    <h1 :title="member.id">{{ member.getFullName() }}</h1>
    <ul>
      <li>Age: {{ member.age }}</li>
      <li>Gender: {{ member.gender }}</li>
    </ul>
    <h2>Skills</h2>
    <ul>
      <li>Technical: {{ member.skills.technical }}</li>
      <li>Strategic: {{ member.skills.strategic }}</li>
      <li>Leadership: {{ member.skills.leadership }}</li>
      <li>Communication: {{ member.skills.communication }}</li>
      <li>Financial: {{ member.skills.financial }}</li>
      <li>Analytical: {{ member.skills.analytical }}</li>
      <li>Creative: {{ member.skills.creative }}</li>
      <li>Promotional: {{ member.skills.promotional }}</li>
    </ul>
    <h2>Role</h2>
    <span v-if="member.role.id" :title="member.role.id">{{
      member.role.type
    }}</span
    ><span v-else> No role applied</span>
    <h2>Compensation</h2>
    Earning:
    <span v-if="member.compensation.compensationType == 'hourly'"
      >{{ formatCurrency(member.compensation.hourlyCompensation) }}/hr</span
    >
    <span v-else
      >{{ formatCurrency(member.compensation.salaryCompensation) }}/yr</span
    >
    <card-menu>
      <span
        v-if="member.restricted === false"
        class="line-button red"
        @click="fireStaff(member.id)"
        ><i class="fas fa-fire"></i> Fire Staff Member</span
      >
      <span v-else>This person cannot be deleted</span>
    </card-menu>
  </div>
</template>

<script>
import { toCurrency } from "../scripts/tools.js";
import cardMenu from "./cardMenu.vue";
export default {
  props: ["member"],
  components: { "card-menu": cardMenu },
  methods: {
    formatCurrency(input) {
      return toCurrency(input);
    },
    fireStaff(memberId) {
      this.$store.dispatch("fireStaffMember", memberId);
    },
  },
};
</script>