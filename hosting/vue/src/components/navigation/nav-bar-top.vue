<template>
  <hor-nav-bar id="top-nav-bar">
    <span class="top-left">
      <router-link to="/people"
        ><nav-item
          ><i class="fas fa-user-friends"></i>&nbsp;People</nav-item
        ></router-link
      >
      <router-link to="/work"
        ><nav-item><i class="fas fa-briefcase"></i>&nbsp;Work</nav-item></router-link
      >
      <router-link to="/facilities"
        ><nav-item
          ><i class="fas fa-building"></i>&nbsp;Facilities</nav-item
        ></router-link
      >
      <router-link to="/resources"
        ><nav-item
          ><i class="fas fa-database"></i>&nbsp;Resources</nav-item
        ></router-link
      >
      <router-link to="/marketing"
        ><nav-item
          ><i class="fas fa-chart-bar"></i>&nbsp;Marketing</nav-item
        ></router-link
      >
      <router-link to="/products"
        ><nav-item><i class="fas fa-shapes"></i>&nbsp;Products</nav-item></router-link
      >
      <router-link to="/services"
        ><nav-item><i class="fab fa-buffer"></i>&nbsp;Services</nav-item></router-link
      >
    </span>
    <span class="top-right">
      <router-link to="/"
        ><nav-item> <i class="fas fa-bars"></i>&nbsp;Home</nav-item></router-link
      >
    </span>
  </hor-nav-bar>
</template>

<script>
import horNavBar from "@/components/navigation/hor-nav-bar.vue";
import navItem from "@/components/navigation/nav-item.vue";
export default {
  components: { "nav-item": navItem, "hor-nav-bar": horNavBar },
};
</script>

<style scoped>
#top-nav-bar {
  top: 0px;
  left: 0px;
  justify-content: space-between;
  grid-template-columns: minmax(min-content, max-content) minmax(
      min-content,
      max-content
    );
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
    minmax(min-content, max-content) minmax(min-content, max-content);
}

.top-right {
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: minmax(min-content, max-content);
}
</style>
