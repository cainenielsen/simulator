<template>
  <h1>Apps</h1>
  <div class="grid">
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(100).purchased == true }"
    >
      SuperMeeting<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(100)"
        v-if="$store.getters.get_resources(100).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(100)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(101).purchased == true }"
    >
      JobLister<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(101)"
        v-if="$store.getters.get_resources(101).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(101)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(102).purchased == true }"
    >
      StorageMist<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(102)"
        v-if="$store.getters.get_resources(102).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(102)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(103).purchased == true }"
    >
      Email<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(103)"
        v-if="$store.getters.get_resources(103).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(103)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(104).purchased == true }"
    >
      MegaChat<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(104)"
        v-if="$store.getters.get_resources(104).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(104)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(105).purchased == true }"
    >
      DesignHub<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(105)"
        v-if="$store.getters.get_resources(105).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(105)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(106).purchased == true }"
    >
      CodeBox<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(106)"
        v-if="$store.getters.get_resources(106).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(106)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(107).purchased == true }"
    >
      HelpDex<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(107)"
        v-if="$store.getters.get_resources(107).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(107)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(108).purchased == true }"
    >
      MiniHost<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(108)"
        v-if="$store.getters.get_resources(108).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(108)">X Cancel</button>
    </div>
  </div>
  <h1>Appliances</h1>
  <div class="grid">
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(109).purchased == true }"
    >
      Printer<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(109)"
        v-if="$store.getters.get_resources(109).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(109)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(110).purchased == true }"
    >
      Printer3D<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(110)"
        v-if="$store.getters.get_resources(110).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(110)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(111).purchased == true }"
    >
      FilmCamera<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(111)"
        v-if="$store.getters.get_resources(111).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(111)">X Cancel</button>
    </div>
  </div>
  <h1>Vehicles</h1>
  <div class="grid">
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(112).purchased == true }"
    >
      SmallVan<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(112)"
        v-if="$store.getters.get_resources(112).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(112)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(113).purchased == true }"
    >
      UtilityTruck<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(113)"
        v-if="$store.getters.get_resources(113).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(113)">X Cancel</button>
    </div>
    <div
      class="grid-item"
      :class="{ active: $store.getters.get_resources(114).purchased == true }"
    >
      SemiTruck<br /><br /><b>$200/m</b><br /><br /><button
        @click="purchaseItem(114)"
        v-if="$store.getters.get_resources(114).purchased == false"
      >
        Purchase</button
      ><button v-else @click="cancelItem(114)">X Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    purchaseItem(item) {
      this.$store.dispatch("purchaseItem", item);
    },
    cancelItem(item) {
      this.$store.dispatch("cancelItem", item);
    },
  },
};
</script>

<style>
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