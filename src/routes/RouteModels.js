import HomeLayout from "../layout/HomeLayout";
import About from "../page/about/About";
import Home from "../page/home/Home";

var routes = [
  {
    path: "/",
    layout: HomeLayout,
    component: Home,
  },
  {
    path: "/about",
    layout: HomeLayout,
    component: About,
  },
];

export default routes;
