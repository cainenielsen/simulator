<template>
  <span
    class="play nav-item nav-item-button"
    v-if="$store.getters.get_worldState.running === true"
    @click="toggleRun"
  >
    <i class="fas fa-play-circle"></i>
  </span>
  <span v-else class="nav-item nav-item-button pause" @click="toggleRun">
    <i class="fas fa-pause-circle"></i>
  </span>
  <span class="nav-item nav-item-button"
    ><i class="fas fa-chevron-circle-right"></i
  ></span>
  <span class="nav-item nav-item-button"><i class="fas fa-sync-alt"></i></span>
  <span class="nav-item nav-item-free">
      <i class="fas fa-clock"></i>
      {{ toTimeFormat($store.getters.get_worldState.currentTime) }}
    </span>
  <span class="nav-item nav-item-free">
    <i class="fas fa-calendar"></i>
    {{getWeekDay($store.getters.get_worldState.currentTime)}}, 
    {{
      $store.getters.get_worldState.currentTime.toLocaleString("default", {
        month: "long",
      })
    }}
    {{ $store.getters.get_worldState.currentTime.getDate()
    }}{{ toMonthFormat($store.getters.get_worldState.currentTime.getDate()) }}
    {{ $store.getters.get_worldState.currentTime.getFullYear() }}
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
    }
  },
};
</script>

<style scoped>
.button {
  display: inline-block;
  line-height: 48px;
  height: 48px;
  min-width: 48px;
  font-size: 32px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
}

.button:hover {
  background-color: rgb(212, 208, 208);
}

.play {
  background-color: #d4efdf;
  color: #229954;
}

.pause {
  background-color: #f6ddcc;
  color: #ba4a00;
}
</style>