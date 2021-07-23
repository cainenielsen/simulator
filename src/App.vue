<template>
  <div>
    <nav class="nav-bar horizontal-nav-bar" id="top-nav-bar">
      <span class="top-left">
        <router-link class="nav-item nav-item-free" to="/people/staff"
          ><i class="fas fa-user-friends"></i> People</router-link
        >
        <router-link class="nav-item nav-item-free" to="/work/positions"
          ><i class="fas fa-briefcase"></i> Work</router-link
        >
        <router-link class="nav-item nav-item-free" to="/finances/dashboard"
          ><i class="fas fa-money-bill"></i> Finances</router-link
        >
        <router-link class="nav-item nav-item-free" to="/office/real-estate"
          ><i class="fas fa-building"></i> Office</router-link
        >
        <router-link class="nav-item nav-item-free" to="/resources/catalouge"
          ><i class="fas fa-database"></i> Resources</router-link
        >
        <router-link class="nav-item nav-item-free" to="/product/research"
          ><i class="fab fa-buffer"></i> Product</router-link
        >
      </span>
      <span class="top-right">
        <router-link class="nav-item nav-item-free" to="/"
          ><i class="fas fa-bars"></i> Home</router-link
        >
      </span>
    </nav>
    <nav class="nav-bar horizontal-nav-bar" id="bottom-nav-bar">
      <span class="bottom-left"><time-toggle></time-toggle></span>
      <span class="bottom-right">
        <router-link to="/product/research">
          <span class="nav-item color-amethyst nav-item-free"
            ><b><i class="fas fa-vial"></i>{{ $store.getters.get_research }}</b>
          </span>
        </router-link>
        <router-link to="/finances/dashboard">
          <span
            v-if="$store.getters.get_trend"
            class="nav-item color-emerald nav-item-free"
            ><b
              ><i class="fas fa-chevron-up"></i
              >{{ formatCurrency($store.getters.get_capital) }}</b
            ></span
          >
          <span v-else class="nav-item color-pomegranate nav-item-free"
            ><b
              ><i class="fas fa-chevron-down"></i
              >{{ formatCurrency($store.getters.get_capital) }}</b
            >
          </span>
        </router-link>
      </span>
    </nav>
    <nav class="nav-bar vertical-nav-bar" id="left-nav-bar"></nav>
    <nav class="nav-bar vertical-nav-bar" id="right-nav-bar"></nav>
    <main id="canvas" class="background-color-silver-50">
      <highlight>{{ $route.name }}</highlight>
      <div id="page">
        <div id="sub-navigation-bar">
          <Button
            :to="item.to"
            :name="item.name"
            v-for="item in $route.meta.subNavItems"
            :key="item"
          ></Button>
        </div>
        <div id="content">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import timeToggle from "@/components/timeToggle.vue";
import highlight from "@/components/highlight.vue";
import button from "@/components/sub-nav-button.vue";
import { toCurrency, randomNumberBetween } from "./scripts/tools.js";

export default {
  components: {
    "time-toggle": timeToggle,
    highlight: highlight,
    Button: button,
  },
  data() {
    return {
      increment: null,
    };
  },
  mounted() {
    this.$store.dispatch("createPosition", {
      compensation: 3000,
      type: this.$store.getters.get_typeByName("Founder").id,
      level: this.$store.getters.get_levelByName("Beginner").id,
      location: this.$store.getters.get_officeByName("Basement").id,
      restricted: true,
    });
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
        this.work();
      }
    },
    formatCurrency(input) {
      return toCurrency(input);
    },
    stopIncrement() {
      clearInterval(this.increment);
    },
    work() {
      this.$store.getters.get_activePositions.forEach((position) => {
        if (position.selectedTask) {
          console.log(position);
          this.$store.dispatch("workTask", position);
        }
      });
    },
    scout() {
      this.$store.getters.get_listedPositions.forEach((listing) => {
        if (
          this.$store.getters.get_resourceByTag("job-lister").purchased === true
        ) {
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
.nav-bar {
  position: fixed;
  background-color: white;
  box-sizing: border-box;
  line-height: 48px;
  font-size: 16px;
  font-weight: bold;
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
    minmax(min-content, max-content) minmax(min-content, max-content) minmax(
      min-content,
      max-content
    )
    minmax(min-content, max-content);
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
  grid-template-columns: minmax(min-content, max-content) minmax(
      min-content,
      max-content
    );
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
  height: calc(100vh - 128px);
  width: calc(100vw - 128px);
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.16), 0 0px 6px rgba(0, 0, 0, 0.23);
}

#page {
  display: grid;
  grid-template-columns: 20vw auto;
}

#sub-navigation-bar {
  height: 100%;
  padding: 64px;
}

#content {
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 0px;
  padding-right: 64px;
}

.nav-item {
  display: inline-block;
  min-width: 48px;
  height: 48px;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  line-height: 48px;
}

.nav-item:hover {
  background-color: var(--clouds);
}

.nav-item.router-link-exact-active {
  background-color: var(--clouds-700);
}

.nav-item:active {
  background-color: var(--clouds-600);
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
  padding-left: 16px;
  padding-right: 16px;
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
</style>
