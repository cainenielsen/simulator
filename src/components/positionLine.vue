<template>
  <div class="card">
    <h1 :title="position.id">{{ position.type }}</h1>
    <ul>
      <li>Start Date: {{ position.startDate }}</li>
      <li>Status: {{ position.status }}</li>
      <li v-if="position.holder !== null" :title="position.holder">
        Holder:
        {{ $store.getters.get_staffMember(position.holder).getFullName() }}
      </li>
    </ul>
    <h2>Compensation</h2>
    <span 
      >{{ formatCurrency(position.compensation) }}</span
    >
    <card-menu>
      <span
        v-if="position.holder !== null"
        class="line-button background-color-pomegranate"
        @click="removeTeamMember(position.id, position.holder)"
        ><i class="fas fa-times"></i> Remove Team Member</span
      >
      <span
        v-if="addingTeamMember == false && position.holder === null"
        class="line-button background-color-emerald"
        @click="addTeamMember(position.id, position.type)"
        ><i class="fas fa-plus"></i> Add Team Member</span
      >
      <select v-if="addingTeamMember" v-model="selectedTeamMember">
        <option disabled value="">...</option>
        <option
          :value="staff.id"
          v-for="staff in $store.getters.get_staffMembersWithoutPostions"
          :key="staff"
        >
          {{ staff.firstName }}
        </option>
      </select>
      <span
        v-if="addingTeamMember"
        class="line-button background-color-orange"
        @click="selectTeamMember(position.id, position.type)"
        ><i class="fas fa-plus"></i> Select Team Member</span
      >
      <span
        v-if="
          $store.getters.get_resources(101).purchased == true &&
          position.holder === null
        "
      >
        <span
        v-if="position.listed === false"
          @click="toggleListing(position.id)"
          class="line-button background-color-emerald"
          style="float: right"
          ><i class="fas fa-plus"></i> List this Job</span
        >
        <span
          v-else
          @click="toggleListing(position.id)"
          class="line-button background-color-emerald"
          style="float: right"
          ><i class="fas fa-minus"></i> Remove Listing</span
        >
      </span>
    </card-menu>
  </div>
</template>

<script>
import { toCurrency } from "../scripts/tools.js";
import cardMenu from "./cardMenu.vue";
export default {
  components: { "card-menu": cardMenu },
  props: ["position"],
  data() {
    return {
      addingTeamMember: false,
      selectedTeamMember: "",
    };
  },
  methods: {
    formatCurrency(input) {
      return toCurrency(input);
    },
    addTeamMember() {
      this.addingTeamMember = !this.addingTeamMember;
    },
    selectTeamMember(positionId, positionType) {
      if (this.selectedTeamMember !== "") {
        this.$store.dispatch("addPositionHolder", {
          positionId: positionId,
          memberId: this.selectedTeamMember,
        });
        this.$store.dispatch("addMemberRole", {
          positionId: positionId,
          positionType: positionType,
          memberId: this.selectedTeamMember,
        });
        this.addingTeamMember = !this.addingTeamMember;
      }
    },
    removeTeamMember(positionId, memberId) {
      this.$store.dispatch("removePositionHolder", positionId);
      this.$store.dispatch("removeMemberRole", memberId);
    },
    toggleListing(position) {
      this.$store.dispatch("togglePositionListing", position);
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