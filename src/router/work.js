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
      { name: "Output", to: "/work/output" },
      { name: "Positions", to: "/work/positions" },
      { name: "Tasks", to: "/work/tasks" },
    ],
  },
  children: [
    {
      path: "output",
      name: "Output",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/work/Output.vue"),
    },
    {
      path: "positions",
      name: "Positions",
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
        subNavItems: [{ name: "Back", to: "./" }],
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
      },
    },
    {
      path: "tasks",
      name: "Tasks",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/work/Tasks.vue"),
    },
  ],
};
