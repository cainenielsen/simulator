<template>
  <div>
    <h1>Positions</h1>
    <div class="grid">
      <div
        v-for="research in $store.getters.get_positionResearch"
        :key="research.id"
        class="grid-item"
        :class="{ 'grid-item-active': research.researched == true }"
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
        :class="{ 'grid-item-active': research.researched == true }"
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
        :class="{ 'grid-item-active': research.researched == true }"
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
        :class="{ 'grid-item-active': research.researched == true }"
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
