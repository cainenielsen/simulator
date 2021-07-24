<template>
  <layout>
    <highlight><i :class="$route.meta.icon"></i> {{ $route.name }}</highlight>
    <div id="page">
      <div id="sub-navigation-bar">
        <Button
          :to="item.to"
          :name="item.name"
          :icon="item.icon"
          v-for="item in $route.meta.subNavItems"
          :key="item"
        ></Button>
      </div>
      <div id="content">
        <router-view />
      </div>
    </div>
  </layout>
</template>
<script>
// import timeToggle from "@/components/timeToggle.vue";
import highlight from "@/components/highlight.vue";
import button from "@/components/sub-nav-button.vue";
import { toCurrency, randomNumberBetween } from "@/scripts/tools.js";
import layout from "@/layouts/index.vue";

export default {
  components: {
    // "time-toggle": timeToggle,
    highlight: highlight,
    Button: button,
    layout,
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
      location: this.$store.getters.get_facilityByName("Basement").id,
      restricted: true,
    });
    for (var i = 1; i < 20; i++) {
      this.$store.dispatch("createFacility");
    }
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

<style scoped>
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
</style>
