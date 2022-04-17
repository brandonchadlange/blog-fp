"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const overview_1 = require("./overview");
const posts_1 = require("./posts");
const pages = {
    overview: {
        path: "",
        title: "Overview",
        page: overview_1.BuildOverviewPage,
    },
    posts: {
        path: "/posts",
        title: "Posts",
        page: posts_1.BuildPostsPage,
        children: [
            {
                path: "/:slug",
                page: posts_1.BuildPostsPage,
            },
        ],
    },
};
exports.default = pages;
//# sourceMappingURL=index.js.map