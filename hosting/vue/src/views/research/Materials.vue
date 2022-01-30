<template>
  <div>
    <p class="text-align-center">
      You can research different materials allowing your employees to
      manufacture or purchase them.
    </p>
    <h1>Materials</h1>
    <div class="grid">
      <div
        v-for="research in $store.getters.get_materialResearch"
        :key="research.id"
        class="grid-item"
        :class="{ 'grid-item-active': research.researched == true }"
      >
        {{ research.name }}<br /><br /><b
          ><i class="fas fa-vial"></i> {{ research.cost }}</b
        ><br /><br /><button
          v-if="research.researched === false"
          @click="this.research(research.id)"
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
