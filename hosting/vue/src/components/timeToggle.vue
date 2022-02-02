<template>
<div>
  <nav-item
    type="button"
    class="time background-color-orange color-orange-50"
    v-if="$store.getters.get_worldState.running === true"
    @click="toggleRun"
  >
    <i class="fas fa-pause-circle"></i>
  </nav-item>
  <nav-item
    type="button"
    v-else
    class="time background-color-emerald color-emerald-50 pause"
    @click="toggleRun"
  >
    <i class="fas fa-play-circle"></i>
  </nav-item>
  <nav-item type="button"><i class="fas fa-chevron-circle-right"></i></nav-item>
  <nav-item type="button"><i class="fas fa-sync-alt"></i></nav-item>
  <nav-item>
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
  </nav-item>
  <nav-item type="button">
    <span
      v-if="
        $store.getters.get_worldState.currentTime.getHours() >= 7 &&
        $store.getters.get_worldState.currentTime.getHours() <= 19
      "
    >
      <i class="fas fa-sun"></i>
    </span>
    <span v-else>
      <i class="fas fa-moon"></i>
    </span>
  </nav-item>
  <nav-item>
    <i class="fas fa-clock"></i>
    {{ toTimeFormat($store.getters.get_worldState.currentTime) }}
  </nav-item>
  </div>
</template>

<script>
import { formatTime, formatMonth, findWeekDay } from "@/scripts/dates.js";
import navItem from "@/components/navigation/nav-item.vue";

export default {
  components: { "nav-item": navItem },
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
