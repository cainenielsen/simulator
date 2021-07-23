<template>
  <div>
    <p class="text-align-center">
      This is your research catalouge where you can use research points to unlock features.
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
    <h1>Components</h1>
    <div class="grid">
      <div
        v-for="research in $store.getters.get_componentResearch"
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
    <h1>Software</h1>
    <div class="grid">
      <div
        v-for="research in $store.getters.get_softwareResearch"
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
  name: "Office",
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
