<template>
  <card class="staff-line">
    <span :title="member.id">{{ member.getFullName() }}</span>
    <span v-if="member.role" :title="member.role">{{
      $store.getters.get_typeById(
        $store.getters.get_positionById(member.role).type
      ).name
    }}</span
    ><span v-else> No role applied</span>
    <span v-if="member.role">{{
      $store.getters.getCurrencyFormat(
        $store.getters.get_positionById(member.role).compensation
      )
    }}</span>
    <span v-else></span>
    <router-link :to="{ name: 'Staff Member', params: { id: member.id } }">
      <Button
        icon="fas fa-plus"
        name="Edit"
        :disabled="false"
        backgroundColor="var(--emerald)"
        textColor="var(--white)"
      ></Button>
    </router-link>
  </card>
</template>

<script>
import button from "@/components/button.vue";
import card from "@/components/card.vue";

export default {
  props: ["member"],
  components: { Button: button, Card: card },
};
</script>

<style scoped>
.staff-line {
  display: grid;
  grid-template-columns: auto auto auto auto;
  line-height: 48px;
  text-align: center;
}
</style>
