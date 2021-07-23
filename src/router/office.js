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
      { name: "Capacity", icon: "far fa-map", to: "/office/capacity" },
      { name: "Utilities", icon: "fas fa-plug", to: "/office/utilities" },
      {
        name: "Real Estate",
        icon: "fas fa-store-alt",
        to: "/office/real-estate",
      },
    ],
  },
  children: [
    {
      path: "utilities",
      name: "Utilities",
      meta: {
        icon: "fas fa-plug",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/office/Utilities.vue"),
    },
    {
      path: "capacity",
      name: "Capacity",
      meta: {
        icon: "far fa-map",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/office/Capacity.vue"),
    },
    {
      path: "real-estate",
      name: "Real Estate",
      meta: {
        icon: "fas fa-store-alt",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/office/RealEstate.vue"),
    },
    {
      path: "",
      redirect: "/office/real-estate",
    },
  ],
};
