<template>
  <ver-nav-bar id="right-nav-bar" @click="add">
    <div id="notification-grid">
      <div
        class="slide"
        v-for="notification in visibleNotifications"
        :key="notification.title"
        style="height: 48px"
      >
        <nav-item
          :class="{ wiggle: notification.wiggle }"
          type="button"
          :highlight="notification.color"
          ><i :class="notification.icon"></i
        ></nav-item>
      </div>
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

export default {
  data() {
    return {
      limit: 5,
      notifications: [
        {
          title: "Hub Update",
          link: "",
          color: "--wisteria",
          icon: "fas fa-vials",
        },
        // {
        //   title: "Work Update",
        //   link: "",
        //   color: "--orange",
        //   icon: "far fa-id-badge",
        // },
        // {
        //   title: "Resources Update",
        //   link: "",
        //   color: "--pomegranate",
        //   icon: "fas fa-grip-horizontal",
        // },
        // {
        //   title: "Products Update",
        //   link: "",
        //   color: "--peter-river",
        //   icon: "fas fa-compass",
        // },
        // {
        //   title: "Dashboard Update",
        //   link: "",
        //   color: "--emerald",
        //   icon: "fas fa-columns",
        // },
        // {
        //   title: "Staff Update",
        //   link: "",
        //   color: "--turquoise",
        //   icon: "fas fa-user-tie",
        // },
        // {
        //   title: "Capacity Update",
        //   link: "",
        //   color: "--midnight-blue",
        //   icon: "far fa-map",
        // },
      ],
    };
  },
  components: {
    "ver-nav-bar": verNavBar,
    "nav-item": navItem,
  },
  methods: {
    add() {
      this.notifications.push({
        title: "Capacity Update",
        link: "",
        color: "--midnight-blue",
        icon: "far fa-map",
      });
    },
  },
  async created() {
    const wiggle = true;
    const wiggleBlock = () => {
      var item = this.visibleNotifications[
        Math.floor(Math.random() * this.visibleNotifications.length)
      ];
      item.wiggle = true;
      setTimeout(() => {
        item.wiggle = false;
      }, 2000);
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
      return this.notifications.slice(0, this.limit);
    },
    moreNotifications() {
      return this.notifications.length - this.limit;
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

.slide {
  animation-name: slide;
  animation-duration: 0.5s;
  position: relative;
}

.wiggle {
  animation-name: wiggle;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
</style>
