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
      { name: "Products", to: "/product/products" },
      { name: "Research", to: "/product/research" },
      { name: "Features", to: "/product/features" },
    ],
  },
  children: [
    {
      path: "research",
      name: "Research",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/product/Research.vue"),
    },
    {
      path: "products",
      name: "Products",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/product/Products.vue"),
    },
    {
      path: "features",
      name: "Features",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/product/Features.vue"),
    },
  ],
};
