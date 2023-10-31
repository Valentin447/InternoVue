import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/Index.vue";
import Blog from "@/pages/Blog.vue";
import BlogDetails from "@/pages/BlogDetails.vue";
import OurProgect from "@/pages/OurProgect.vue";
import ProjectDetails from "@/pages/ProjectDetails.vue";
import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog-details",
    name: "BlogDetails",
    component: BlogDetails,
  },
  {
    path: "/project",
    name: "OurProgect",
    component: OurProgect,
  },
  {
    path: "/project-details",
    name: "ProjectDetails",
    component: ProjectDetails,
  },
  {
    path: "/:CatchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
