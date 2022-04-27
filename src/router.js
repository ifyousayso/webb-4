import { createRouter, createWebHashHistory } from "vue-router";

import AwayView from "./views/AwayView.vue";
import HomeView from "./views/HomeView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AwayView,
      path: `/away/:arg`
    },
    {
      component: HomeView,
      path: `/`
    }
  ]
});
