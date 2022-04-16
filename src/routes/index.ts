export const Routes = {
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
