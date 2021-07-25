export default {
  path: "/facilities",
  name: "Facilities",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/facilities/index.vue"),

  meta: {
    subNavItems: [
      { name: "Capacity", icon: "far fa-map", to: "/facilities/capacity" },
      {
        name: "Real Estate",
        icon: "fas fa-store-alt",
        to: "/facilities/real-estate",
      },
      { name: "Utilities", icon: "fas fa-plug", to: "/facilities/utilities" },
    ],
    layout: "dashboard",
    color: "midnight-blue",
  },
  children: [
    {
      path: "utilities",
      name: "Utilities",
      meta: {
        icon: "fas fa-plug",
        layout: "dashboard",
        color: "midnight-blue",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/facilities/Utilities.vue"
        ),
    },
    {
      path: "capacity",
      name: "Capacity",
      meta: {
        icon: "far fa-map",
        layout: "dashboard",
        color: "midnight-blue",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/facilities/Capacity.vue"
        ),
    },
    {
      path: "real-estate",
      name: "Real Estate",
      meta: {
        icon: "fas fa-store-alt",
        layout: "dashboard",
        color: "midnight-blue",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/facilities/RealEstate.vue"
        ),
    },
    {
      path: "",
      redirect: "/facilities/capacity",
    },
  ],
};
