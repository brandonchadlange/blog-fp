import { Routes } from "./routes";
import { Databases } from "./infrastructure";
import { admin } from "./admin";

export function register() {
  return {
    id: "blog-builder",
    name: "Blog Builder",
    infrastructure: [...Databases],
    routes: Routes,
    admin,
  };
}
