export default {
  path: "/products",
  name: "Products",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/products/index.vue"),

  meta: {
    subNavItems: [
      { name: "Products", icon: "fas fa-compass", to: "/products/products" },
      { name: "Features", icon: "fas fa-star", to: "/products/features" },
    ],
    layout: "dashboard",
    color: "peter-river",
  },
  children: [
    {
      path: "products",
      name: "Products",
      meta: {
        icon: "fas fa-compass",
        layout: "dashboard",
        color: "peter-river",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/products/Products.vue"),
    },
    {
      path: "products/new",
      name: "New Product",
      meta: {
        subNavItems: [{ name: "Back", icon: "fas fa-compass", to: "./" }],
        icon: "fas fa-compass",
        layout: "dashboard",
        color: "peter-river",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/views/products/NewProduct.vue"
        ),
    },
    {
      path: "features",
      name: "Features",
      meta: {
        icon: "fas fa-star",
        layout: "dashboard",
        color: "peter-river",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/products/Features.vue"),
    },
    {
      path: "",
      redirect: "/products/products",
    },
  ],
};
