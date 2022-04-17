import { BuildOverviewPage } from "./overview";
import { BuildPostsPage } from "./posts";

const pages = {
  overview: {
    path: "",
    title: "Overview",
    page: BuildOverviewPage,
  },
  posts: {
    path: "/posts",
    title: "Posts",
    page: BuildPostsPage,
    children: [
      {
        path: "/:slug",
        page: BuildPostsPage,
      },
    ],
  },
};

export default pages;
