export default {
  path: "/people",
  name: "People",
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/people/index.vue"),
  meta: {
    subNavItems: [
      { name: "Staff", to: "/people/staff" },
      { name: "Candidates", to: "/people/candidates" },
      { name: "Customers", to: "/people/customers" },
      { name: "Investors", to: "/people/investors" },
    ],
  },
  children: [
    {
      path: "staff",
      name: "Staff",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/people/Staff.vue"),
    },
    {
      path: "staff/member/:id",
      name: "Staff Member",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/people/StaffMember.vue"
        ),
      meta: {
        subNavItems: [{ name: "Back", to: "/people/staff" }],
      },
    },
    {
      path: "candidates",
      name: "Candidates",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/people/Candidates.vue"),
    },
    {
      path: "customers",
      name: "Customers",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/people/Customers.vue"),
    },
    {
      path: "investors",
      name: "Investors",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/people/Investors.vue"),
    },
  ],
};
