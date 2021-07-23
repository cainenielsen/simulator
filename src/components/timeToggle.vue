<template>
  <span
    class="time background-color-orange color-orange-50 nav-item nav-item-button"
    v-if="$store.getters.get_worldState.running === true"
    @click="toggleRun"
  >
    <i class="fas fa-pause-circle"></i>
  </span>
  <span
    v-else
    class="time background-color-emerald color-emerald-50 nav-item nav-item-button pause"
    @click="toggleRun"
  >
    <i class="fas fa-play-circle"></i>
  </span>
  <span class="nav-item nav-item-button"
    ><i class="fas fa-chevron-circle-right"></i
  ></span>
  <span class="nav-item nav-item-button"><i class="fas fa-sync-alt"></i></span>
  <span class="nav-item nav-item-free">
    <i class="fas fa-calendar"></i>
    {{ getWeekDay($store.getters.get_worldState.currentTime) }},
    {{
      $store.getters.get_worldState.currentTime.toLocaleString("default", {
        month: "long",
      })
    }}
    {{ $store.getters.get_worldState.currentTime.getDate()
    }}{{ toMonthFormat($store.getters.get_worldState.currentTime.getDate()) }}
    {{ $store.getters.get_worldState.currentTime.getFullYear() }}
  </span>
  <span class="nav-item nav-item-free">
    <i class="fas fa-clock"></i>
    {{ toTimeFormat($store.getters.get_worldState.currentTime) }}
  </span>
</template>

<script>
import { formatTime, formatMonth, findWeekDay } from "../scripts/dates.js";
export default {
  data() {
    return {
      running: false,
    };
  },
  created() {
    const self = this;
    window.addEventListener("keyup", function (ev) {
      if (ev.code === "Space") {
        self.toggleRun();
      }
    });
  },
  methods: {
    toggleRun() {
      this.$store.dispatch("toggleRunning");
    },
    toTimeFormat(date) {
      return formatTime(date);
    },
    toMonthFormat(date) {
      return formatMonth(date);
    },
    getWeekDay(date) {
      return findWeekDay(date);
    },
  },
};
</script>
<style scoped>
.time:hover {
  background-color: var(--clouds-900) !important;
}
</style>