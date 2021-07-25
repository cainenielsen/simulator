export default {
  path: "/finances",
  name: "Finances",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/finances/index.vue"),

  meta: {
    subNavItems: [
      { name: "Dashboard", icon: "fas fa-columns", to: "/finances/dashboard" },
      {
        name: "Transactions",
        icon: "far fa-list-alt",
        to: "/finances/transactions",
      },
      {
        name: "Investments",
        icon: "fas fa-chart-area",
        to: "/finances/investments",
      },
    ],
    layout: "dashboard",
    color: "emerald",
  },
  children: [
    {
      path: "dashboard",
      name: "Finances Dashboard",
      meta: {
        icon: "fas fa-columns",
        layout: "dashboard",
        color: "emerald",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/finances/Dashboard.vue"
        ),
    },
    {
      path: "investments",
      name: "Investments",
      meta: {
        icon: "fas fa-chart-area",
        layout: "dashboard",
        color: "emerald",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/finances/Investments.vue"
        ),
    },
    {
      path: "transactions",
      name: "Transactions",
      meta: {
        icon: "far fa-list-alt",
        layout: "dashboard",
        color: "emerald",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/finances/Transactions.vue"
        ),
    },
    {
      path: "",
      redirect: "/finances/dashboard",
    },
  ],
};
