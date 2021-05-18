<template>
  <div>
    <h1>Positions</h1>
    <div class="grid">
      <div
        v-for="research in $store.getters.get_positionResearch"
        :key="research.id"
        class="grid-item"
        :class="{ active: research.researched == true }"
      >
        {{ research.name }}<br /><br /><b><i class="fas fa-vial"></i> {{ research.cost }}</b
        ><br /><br /><button @click="research(research.id)">Research</button>
      </div>
    </div>
    <h1>Materials</h1>
    <div class="grid">
      <div
        v-for="research in $store.getters.get_materialResearch"
        :key="research.id"
        class="grid-item"
        :class="{ active: research.researched == true }"
      >
        {{ research.name }}<br /><br /><b><i class="fas fa-vial"></i> {{ research.cost }}</b
        ><br /><br /><button @click="research(research.id)">Research</button>
      </div>
    </div>
    <h1>Components</h1>
    <div class="grid">
      <div
        v-for="research in $store.getters.get_componentResearch"
        :key="research.id"
        class="grid-item"
        :class="{ active: research.researched == true }"
      >
        {{ research.name }}<br /><br /><b><i class="fas fa-vial"></i> {{ research.cost }}</b
        ><br /><br /><button @click="research(research.id)">Research</button>
      </div>
    </div>
    <h1>Software</h1>
    <div class="grid">
      <div
        v-for="research in $store.getters.get_softwareResearch"
        :key="research.id"
        class="grid-item"
        :class="{ active: research.researched == true }"
      >
        {{ research.name }}<br /><br /><b><i class="fas fa-vial"></i> {{ research.cost }}</b
        ><br /><br /><button @click="research(research.id)">Research</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Office",
  methods: {
    research(id) {
      alert(id);
    },
  },
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 19% 19% 19% 19% 19%;
  grid-column-gap: 1.25%;
  grid-row-gap: 16px;
  padding-bottom: 5vw;
}
.grid-item {
  background-color: rgb(152, 152, 255);
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 16px;
  overflow: hidden;
  text-align: center;
}
.active {
  background-color: rgb(152, 255, 161);
}
</style>
