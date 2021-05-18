<template>
  <nav class="nav-bar horizontal-nav-bar" id="top-nav-bar">
    <span class="top-left">
      <router-link class="nav-item nav-item-free" to="/"
        ><i class="fas fa-home"></i> Home</router-link
      >
      <router-link class="nav-item nav-item-free" to="/people"
        ><i class="fas fa-user-friends"></i> People</router-link
      >
      <router-link class="nav-item nav-item-free" to="/finances"
        ><i class="fas fa-money-bill"></i> Finances</router-link
      >
      <router-link class="nav-item nav-item-free" to="/office"
        ><i class="fas fa-building"></i> Office</router-link
      >
      <router-link class="nav-item nav-item-free" to="/resources"
        ><i class="fas fa-database"></i> Resources</router-link
      >
      <router-link class="nav-item nav-item-free" to="/product"
        ><i class="fab fa-buffer"></i> Product</router-link
      >
    </span>
    <span class="top-right"
      ><span class="nav-item"><i class="fas fa-bars"></i></span
    ></span>
  </nav>
  <nav class="nav-bar horizontal-nav-bar" id="bottom-nav-bar">
    <span class="bottom-left"><time-toggle></time-toggle></span>
    <router-link class="bottom-right" to="/finances">
      <span
        v-if="$store.getters.get_trend"
        class="nav-item color-green nav-item-free"
        ><b
          ><i class="fas fa-chevron-up"></i
          >{{ formatCurrency($store.getters.get_capital) }}</b
        ></span
      >
      <span v-else class="nav-item color-red nav-item-free"
        ><b
          ><i class="fas fa-chevron-down"></i
          >{{ formatCurrency($store.getters.get_capital) }}</b
        >
      </span>
    </router-link>
  </nav>
  <nav class="nav-bar vertical-nav-bar" id="left-nav-bar"></nav>
  <nav class="nav-bar vertical-nav-bar" id="right-nav-bar"></nav>
  <main id="canvas">
    <highlight>{{ $route.name }}</highlight>
    <div id="content">
      <router-view />
    </div>
  </main>
</template>
<script>
import timeToggle from "./components/timeToggle.vue";
import highlight from "./components/highlight.vue";
import { toCurrency, randomNumberBetween } from "./scripts/tools.js";

export default {
  components: { "time-toggle": timeToggle, highlight: highlight },
  data() {
    return {
      increment: null,
    };
  },
  created() {
    this.increment = setInterval(this.incrementTime, 1000);
  },
  computed: {
    localTime() {
      return this.$store.getters.get_worldState.currentTime;
    },
  },
  methods: {
    incrementTime() {
      if (this.$store.getters.get_worldState.running == true) {
        this.$store.dispatch("setDate", 5);
        this.scout();
      }
    },
    formatCurrency(input) {
      return toCurrency(input);
    },
    stopIncrement() {
      clearInterval(this.increment);
    },
    scout() {
      this.$store.getters.get_listedPositions.forEach((listing) => {
        if (this.$store.getters.get_resources(101).purchased === true) {
          if (randomNumberBetween(1, 10) === 1) {
            this.$store.dispatch("createCandidate", {
              listingId: listing.id,
              listingType: listing.type,
            });
          }
        }
      });
    },
    collect() {
      this.$store.dispatch("collectCosts");
    },
  },
  watch: {
    localTime: function (val) {
      if (val.getHours() == 0 && val.getMinutes() == 0) {
        this.collect();
      }
    },
  },
};
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  height: 100vh;
  max-width: 100vw;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

.nav-bar {
  position: fixed;
  background-color: white;
  box-sizing: border-box;
  line-height: 48px;
  font-size: 20px;
  overflow: hidden;
}

.nav-bar * {
  box-sizing: border-box;
  text-align: center;
  border: 0px;
  border-radius: 8px;
  line-height: 48px;
}

.horizontal-nav-bar {
  height: 64px;
  width: 100vw;
  padding-left: 64px;
  padding-right: 64px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: grid;
  grid-column-gap: 8px;
}

.top-left {
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns:
    minmax(min-content, max-content) minmax(min-content, max-content) minmax(
      min-content,
      max-content
    )
    minmax(min-content, max-content) minmax(min-content, max-content) minmax(min-content, max-content);
}

.top-right {
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: minmax(min-content, max-content);
}

.bottom-left {
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns:
    minmax(min-content, max-content) minmax(min-content, max-content)
    minmax(min-content, max-content) minmax(min-content, max-content) minmax(min-content, max-content);
}

.bottom-right {
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: minmax(min-content, max-content);
}

.vertical-nav-bar {
  width: 64px;
  height: 100vw;
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 8px;
  padding-right: 8px;
}

.ver-bar-top {
}

.ver-bar-bottom {
}

#left-nav-bar {
  top: 0px;
  left: 0px;
}

#right-nav-bar {
  top: 0px;
  right: 0px;
}

#top-nav-bar {
  top: 0px;
  left: 0px;
  justify-content: space-between;
  grid-template-columns: minmax(min-content, max-content) minmax(
      min-content,
      max-content
    );
}

#bottom-nav-bar {
  bottom: 0px;
  right: 0px;
  justify-content: space-between;
  grid-template-columns: minmax(min-content, max-content) minmax(
      min-content,
      max-content
    );
}

#canvas {
  display: block;
  margin: 64px;
  background-color: #eeeeee;
  height: calc(100vh - 128px);
  width: calc(100vw - 128px);
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.16), 0 0px 6px rgba(0, 0, 0, 0.23);
}

#content {
  padding-top: 5vw;
  padding-bottom: 5vw;
  padding-left: 15vw;
  padding-right: 15vw;
}

.nav-item {
  display: inline-block;
  min-width: 48px;
  height: 48px;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

.nav-item:hover {
  background-color: #616161;
  color: white;
  cursor: pointer;
}

.vertical-nav-item {
  width: 48px;
  height: 48px;
  margin: 0px;
  padding: 0px;
}

.horizontal-nav-item {
}

.nav-item-free {
  padding-left: 8px;
  padding-right: 8px;
}

.nav-item-button {
  font-size: 26px;
}

.horizontal-nav-item {
  height: 48px;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  overflow: hidden;
}

.vertical-nav-item {
  width: 48px;
  height: 48px;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  overflow: hidden;
}

a {
  color: initial;
  text-decoration: initial;
}

.card {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.color-green {
  color: #27ae60;
}

.color-red {
  color: #c0392b;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #bdbdbd;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #757575;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #616161;
}
</style>
