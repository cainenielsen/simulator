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
      { name: "Dashboard", to: "/finances/dashboard" },
      { name: "Transactions", to: "/finances/transactions" },
      { name: "Investments", to: "/finances/investments" },
    ],
  },
  children: [
    {
      path: "dashboard",
      name: "Dashboard",
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/finances/Transactions.vue"
        ),


    },
  ],
};
