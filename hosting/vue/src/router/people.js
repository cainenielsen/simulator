export default {
  path: "/people",
  name: "People",
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/people/index.vue"),
  meta: {
    subNavItems: [
      { name: "Staff", icon: "fas fa-user-tie", to: "/people/staff" },
      {
        name: "Candidates",
        icon: "fas fa-user-check",
        to: "/people/candidates",
      },
      { name: "Customers", icon: "fas fa-user-tag", to: "/people/customers" },
      {
        name: "Investors",
        icon: "fas fa-hand-holding-usd",
        to: "/people/investors",
      },
    ],
    layout: "dashboard",
    color: "turquoise",
  },
  children: [
    {
      path: "staff",
      name: "Staff",
      meta: {
        icon: "fas fa-user-tie",
        layout: "dashboard",
        color: "turquoise",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/people/Staff.vue"),
    },
    {
      path: "staff/member/:id",
      name: "Staff Member",
      color: "turquoise",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/people/StaffMember.vue"
        ),
      meta: {
        subNavItems: [{ name: "Back", to: "/people/staff" }],
        icon: "fas fa-user-tag",
        layout: "dashboard",
        color: "turquoise",
      },
    },
    {
      path: "candidates",
      name: "Candidates",
      meta: {
        icon: "fas fa-user-check",
        layout: "dashboard",
        color: "turquoise",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/people/Candidates.vue"),
    },
    {
      path: "customers",
      name: "Customers",
      meta: {
        icon: "fas fa-user-tag",
        layout: "dashboard",
        color: "turquoise",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/people/Customers.vue"),
    },
    {
      path: "investors",
      name: "Investors",
      meta: {
        icon: "fas fa-hand-holding-usd",
        layout: "dashboard",
        color: "turquoise",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/people/Investors.vue"),
    },
    {
      path: "",
      redirect: "/people/staff",
    },
  ],
};
