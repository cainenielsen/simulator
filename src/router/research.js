export default {
  path: "/research",
  name: "Research",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/research/index.vue"),

  meta: {
    subNavItems: [
      { name: "Dashboard", icon: "fas fa-vials", to: "/research/dashboard" },
      { name: "Positions", icon: "far fa-id-badge", to: "/research/positions" },
      { name: "Materials", icon: "fas fa-gem", to: "/research/materials" },
      { name: "Components", icon: "fas fa-microchip", to: "/research/components" },
      { name: "Software", icon: "fas fa-compact-disc", to: "/research/software" },
    ],
    layout: "dashboard",
    color: "amethyst",
  },
  children: [
    {
      path: "dashboard",
      name: "Research Dashboard",
      meta: {
        icon: "fas fa-vials",
        layout: "dashboard",
        color: "amethyst",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/research/Research.vue"),
    },
    {
      path: "positions",
      name: "Research Positions",
      meta: {
        icon: "fas fa-compass",
        layout: "dashboard",
        color: "amethyst",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/research/Positions.vue"
        ),
    },
    {
      path: "components",
      name: "Research Components",
      meta: {
        icon: "fas fa-compass",
        layout: "dashboard",
        color: "amethyst",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/research/Components.vue"
        ),
    },
    {
      path: "materials",
      name: "Research Materials",
      meta: {
        icon: "fas fa-star",
        layout: "dashboard",
        color: "amethyst",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/research/Materials.vue"
        ),
    },
    {
      path: "software",
      name: "Research Software",
      meta: {
        icon: "fas fa-star",
        layout: "dashboard",
        color: "amethyst",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/research/Software.vue"),
    },
    {
      path: "",
      redirect: "/research/dashboard",
    },
  ],
};
