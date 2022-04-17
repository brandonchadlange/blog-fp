import { BuildOverviewPage } from "./overview";
import { BuildPostsPage } from "./posts";

const pages = {
  overview: {
    path: "",
    page: BuildOverviewPage,
  },
  posts: {
    path: "/posts",
    page: BuildPostsPage,
  },
};

export default pages;
