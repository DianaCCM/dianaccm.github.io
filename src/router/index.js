import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import AboutMeView from "../views/AboutMeView.vue";
import NotFound from "../views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutMeView,
    },
    { path: "/:path(.*)", component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
