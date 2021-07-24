<template>
  <Card>
    <h1 :title="position.id">
      {{ $store.getters.get_typeById(position.type).name }}
      -
      {{ $store.getters.get_levelById(position.level).name }}
    </h1>
    <ul>
      <li>Status: {{ position.status }}</li>
      <li v-if="position.holder !== null" :title="position.holder">
        Holder:
        {{ $store.getters.get_staffMember(position.holder).getFullName() }}
      </li>
    </ul>
    <h2>Compensation</h2>
    <span>{{ $store.getters.getCurrencyFormat(position.compensation) }}</span>
    <span
      v-if="
        $store.getters.get_resourceByTag('job-lister').purchased == true &&
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
    <br />
    <router-link :to="`/work/positions/position/${position.id}`">
      <Button
        backgroundColor="var(--emerald)"
        textColor="var(--white)"
        name="Edit"
      ></Button>
    </router-link>
  </Card>
</template>

<script>
import button from "@/components/button.vue";
import card from "@/components/card.vue";

export default {
  components: { Button: button, Card: card },
  props: ["position"],
  data() {
    return {
      addingTeamMember: false,
      selectedTeamMember: "",
    };
  },
  methods: {
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
