<template>
  <ver-nav-bar id="right-nav-bar">
    <div id="notification-grid">
      <transition-group name="fade">
        <notification
          :class="{ wiggle: notification.wiggle }"
          v-for="notification in visibleNotifications"
          :key="notification.id"
          :notification="notification"
        />
      </transition-group>

      <nav-item
        v-if="moreNotifications > 0"
        class="animate"
        type="button"
        style="
          line-height: 12px;
          font-size: 12px;
          display: grid;
          align-content: center;
        "
      >
        <div>+ {{ moreNotifications }} more</div>
      </nav-item>
    </div>
  </ver-nav-bar>
</template>

<script>
import verNavBar from "@/components/navigation/ver-nav-bar.vue";
import navItem from "@/components/navigation/nav-item.vue";
import notification from "@/components/notification.vue";

export default {
  data() {
    return {
      limit: 5,
    };
  },
  components: {
    "ver-nav-bar": verNavBar,
    "nav-item": navItem,
    notification,
  },
  async created() {
    const wiggle = true;
    const wiggleBlock = () => {
      if (this.visibleNotifications.length > 0) {
        var item = this.visibleNotifications[
          Math.floor(Math.random() * this.visibleNotifications.length)
        ];
        item.wiggle = true;
        setTimeout(() => {
          item.wiggle = false;
        }, 2000);
      }
    };
    while (wiggle) {
      await new Promise((resolve) =>
        setTimeout(() => {
          wiggleBlock();
          resolve();
        }, 5000)
      );
    }
  },
  computed: {
    visibleNotifications() {
      return this.$store.getters.getNotifications.slice(0, this.limit);
    },
    moreNotifications() {
      return this.$store.getters.getNotifications.length - this.limit;
    },
  },
};
</script>

<style scoped>
#right-nav-bar {
  top: 0px;
  right: 0px;
}

#notification-grid {
  display: grid;
  grid-auto-rows: 64px;
  justify-items: center;
  align-items: center;
}

.wiggle {
  animation-name: wiggle;
  animation-duration: 2s;
  animation-iteration-count: 1;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>
