export default {
  path: "/office",
  name: "Office",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/office/index.vue"),

  meta: {
    subNavItems: [
      { name: "Capacity", to: "/office/capacity" },
      { name: "Utilities", to: "/office/utilities" },
      { name: "Real Estate", to: "/office/real-estate" },
    ],
  },
  children: [
    {
      path: "utilities",
      name: "Utilities",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/office/Utilities.vue"),
    },
    {
      path: "capacity",
      name: "Capacity",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/office/Capacity.vue"),
    },
    {
      path: "real-estate",
      name: "Real Estate",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/office/RealEstate.vue"),
    },
  ],
};
