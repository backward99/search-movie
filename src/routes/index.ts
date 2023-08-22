import { createRouter, createWebHashHistory } from "vue-router";
import { MovieDetail } from "~/components";
import { MainPage } from "~/pages";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: MainPage },
    {
      path: "/:title",
      name: "MovieList",
      component: MainPage,
      children: [
        {
          path: ":id",
          name: "MovieDetail",
          component: MovieDetail,
        },
      ],
    },
  ],
});
