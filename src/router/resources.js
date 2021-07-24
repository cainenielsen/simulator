export default {
  path: "/resources",
  name: "Resources",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/resources/index.vue"),

  meta: {
    subNavItems: [
      { name: "Inventory", icon: "fas fa-boxes", to: "/resources/inventory" },
      { name: "Storage", icon: "fas fa-warehouse", to: "/resources/storage" },
      {
        name: "Catalouge",
        icon: "fas fa-grip-horizontal",
        to: "/resources/catalouge",
      },
      {
        name: "Logistics",
        icon: "fas fa-truck-loading",
        to: "/resources/logistics",
      },
    ],
    layout: "dashboard",
  },
  children: [
    {
      path: "catalouge",
      name: "Catalouge",
      meta: {
        icon: "fas fa-grip-horizontal",
        layout: "dashboard",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/resources/Catalouge.vue"
        ),
    },
    {
      path: "logistics",
      name: "Logistics",
      meta: {
        icon: "fas fa-truck-loading",
        layout: "dashboard",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/resources/Logistics.vue"
        ),
    },
    {
      path: "inventory",
      name: "Inventory",
      meta: {
        icon: "fas fa-boxes",
        layout: "dashboard",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/resources/Inventory.vue"
        ),
    },
    {
      path: "storage",
      name: "Storage",
      meta: {
        icon: "fas fa-warehouse",
        layout: "dashboard",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/resources/Storage.vue"),
    },
    {
      path: "",
      redirect: "/resources/catalouge",
    },
  ],
};
