export default {
  path: "/product",
  name: "Product",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/product/index.vue"),

  meta: {
    subNavItems: [
      { name: "Products", icon: "fas fa-compass", to: "/product/products" },
      { name: "Research", icon: "fas fa-vials", to: "/product/research" },
      { name: "Features", icon: "fas fa-star", to: "/product/features" },
    ],
  },
  children: [
    {
      path: "research",
      name: "Research",
      meta: {
        icon: "fas fa-vials",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/product/Research.vue"),
    },
    {
      path: "products",
      name: "Products",
      meta: {
        icon: "fas fa-compass",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/product/Products.vue"),
    },
    {
      path: "features",
      name: "Features",
      meta: {
        icon: "fas fa-star",
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/product/Features.vue"),
    },
    {
      path: "",
      redirect: "/product/research",
    },
  ],
};
