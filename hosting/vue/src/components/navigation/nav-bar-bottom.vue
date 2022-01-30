<template>
  <hor-nav-bar id="bottom-nav-bar">
    <span class="bottom-left"><time-toggle></time-toggle></span>
    <span class="bottom-right">
      <router-link to="/research">
        <nav-item class="color-amethyst"
          ><b><i class="fas fa-vial"></i>{{ $store.getters.get_research }}</b>
        </nav-item>
      </router-link>
      <router-link to="/finances">
        <nav-item v-if="$store.getters.get_trend" class="color-emerald"
          ><b
            ><i class="fas fa-chevron-up"></i
            >{{ formatCurrency($store.getters.get_capital) }}</b
          ></nav-item
        >
        <nav-item v-else class="color-pomegranate"
          ><b
            ><i class="fas fa-chevron-down"></i
            >{{ formatCurrency($store.getters.get_capital) }}</b
          >
        </nav-item>
      </router-link>
    </span>
  </hor-nav-bar>
</template>

<script>
import horNavBar from "@/components/navigation/hor-nav-bar.vue";
import navItem from "@/components/navigation/nav-item.vue";
import timeToggle from "@/components/timeToggle.vue";
import { toCurrency } from "@/scripts/tools.js";

export default {
  components: {
    "hor-nav-bar": horNavBar,
    "time-toggle": timeToggle,
    "nav-item": navItem,
  },
  methods: {
    formatCurrency(input) {
      return toCurrency(input);
    },
  },
};
</script>

<style scoped>
#bottom-nav-bar {
  bottom: 0px;
  right: 0px;
  justify-content: space-between;
  grid-template-columns: minmax(min-content, max-content) minmax(
      min-content,
      max-content
    );
}

.bottom-left {
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns:
    minmax(min-content, max-content) minmax(min-content, max-content) minmax(
      min-content,
      max-content
    )
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
</style>
