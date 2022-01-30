<template>
  <div>
    <p class="text-align-center">
      Here you can research to unlock new positions for your employees to work.
    </p>
    <h1>Positions</h1>
    <div class="grid">
      <div
        v-for="position in $store.getters.get_researchablePosition"
        :key="position.id"
        class="grid-item"
        :class="{ 'grid-item-active': position.researched === true }"
      >
        {{ position.name }}<br /><br /><b
          ><i class="fas fa-vial"></i> {{ position.researchCost }}</b
        ><br /><br /><button
          v-if="position.researched === false"
          @click="this.researchPosition(position.id)"
        >
          Research
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    research(id) {
      this.$store.dispatch("researchItem", { id: id }).then((resp) => {
        if (resp === "Error") {
          alert("Error: Not enough research");
        }
      });
    },
    researchPosition(id) {
      this.$store.dispatch("unlockPosition", id).then((resp) => {
        if (resp === "Error") {
          alert("Error: Not enough research");
        }
      });
    },
  },
};
</script>
