<template>
  <div class="home">
    <StaffMembers msg="people Members" />
  </div>
</template>

<script>
// @ is an alias to /src
import StaffMembers from "@/components/StaffMembers.vue";

export default {
  name: "Home",
  components: {
    StaffMembers,
  },
};
</script>
