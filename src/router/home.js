import Home from "@/views/home/index.vue";

export default {
  path: "/",
  name: "Home",
  component: Home,
  meta: {
    subNavItems: [
      { name: "Welcome", icon: "fas fa-door-open", to: "/welcome" },
      { name: "Continue", icon: "fas fa-rocket", to: "/people/staff" },
      { name: "Load Game", icon: "fas fa-upload", to: "/load-game" },
      { name: "New Game", icon: "fas fa-plus", to: "/new-game" },
      { name: "Settings", icon: "fas fa-cogs", to: "/settings" },
    ],
    layout: "landing",
    icon: "fas fa-door-open"
  },
  children: [
    {
      path: "welcome",
      name: "Welcome",
      meta: {
        layout: "landing",
        icon: "fas fa-door-open",
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/home/Welcome.vue"),
    },
    {
      path: "load-game",
      name: "Load Game",
      meta: {
        layout: "landing",
        icon: "fas fa-upload",
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/home/LoadGame.vue"),
    },
    {
      path: "new-game",
      name: "New Game",
      meta: {
        layout: "landing",
        icon: "fas fa-plus",
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/home/NewGame.vue"),
    },
    {
      path: "settings",
      name: "Settings",
      meta: {
        layout: "landing",
        icon: "fas fa-cogs",
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/home/Settings.vue"),
    },
    {
      path: "",
      redirect: "/welcome",
    },
  ],
};
