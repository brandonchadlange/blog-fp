import { BuildOverviewPage } from "./overview";
import { BuildPostPage } from "./post";
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
        page: BuildPostPage,
      },
    ],
  },
};

export default pages;
