"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const overview_1 = require("./overview");
const post_1 = require("./post");
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
                page: post_1.BuildPostPage,
            },
        ],
    },
};
exports.default = pages;
//# sourceMappingURL=index.js.map