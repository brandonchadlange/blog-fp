"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
exports.Routes = {
    listPosts: {
        path: "",
        handler: "ListPosts",
        dependancies: ["postsDb"],
    },
    //   getSingle: {
    //     path: "/:id",
    //     handler: "posts.get",
    //     dependancies: ["postsDb"],
    //   },
    //   create: {
    //     path: "",
    //     method: "post",
    //     handler: "posts.create",
    //     dependancies: ["postsDb"],
    //   },
};
//# sourceMappingURL=index.js.map