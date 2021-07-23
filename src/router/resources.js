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
      { name: "Inventory", to: "/resources/inventory" },
      { name: "Storage", to: "/resources/storage" },
      { name: "Catalouge", to: "/resources/catalouge" },
      { name: "Logistics", to: "/resources/logistics" },
    ],
  },
  children: [
    {
      path: "catalouge",
      name: "Catalouge",
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/resources/Storage.vue"),
    },
  ],
};
