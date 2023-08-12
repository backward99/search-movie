import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "~/routes/MainPage.vue";
import DetailPage from "./DetailPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/:id",
      component: DetailPage,
    },
  ],
});
