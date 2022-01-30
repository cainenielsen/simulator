export default {
  path: "/work",
  name: "Work",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/work/index.vue"),

  meta: {
    subNavItems: [
      { name: "Output", icon: "far fa-lightbulb", to: "/work/output" },
      { name: "Positions", icon: "far fa-id-badge", to: "/work/positions" },
      { name: "Tasks", icon: "fas fa-check-double", to: "/work/tasks" },
    ],
    layout: "dashboard",
    color: "orange",
  },
  children: [
    {
      path: "output",
      name: "Output",
      meta: {
        icon: "far fa-lightbulb",
        color: "orange",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/work/Output.vue"),
    },
    {
      path: "positions",
      name: "Positions",
      meta: {
        icon: "far fa-id-badge",
        layout: "dashboard",
        color: "orange",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/work/Positions.vue"),
    },
    {
      path: "positions/new",
      name: "New Position",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/work/NewPosition.vue"),
      meta: {
        subNavItems: [{ name: "Back", icon: "far fa-id-badge", to: "./" }],
        icon: "far fa-id-badge",
        layout: "dashboard",
        color: "orange",
      },
    },
    {
      path: "positions/position/:id",
      name: "Position",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/work/position.vue"),
      meta: {
        subNavItems: [{ name: "Back", to: "/work/positions" }],
        icon: "far fa-id-badge",
        color: "orange",
      },
    },
    {
      path: "tasks",
      name: "Tasks",
      meta: {
        icon: "fas fa-check-double",
        layout: "dashboard",
        color: "orange",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/work/Tasks.vue"),
    },
    {
      path: "",
      redirect: "/work/positions",
    },
  ],
};
