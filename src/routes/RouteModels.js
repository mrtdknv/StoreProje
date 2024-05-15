import HomeLayout from "../layout/HomeLayout";
import About from "../page/about/About";
import Login from "../page/auth/Login";
import Register from "../page/auth/Register";
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

  {
    path: "/login",
    layout: HomeLayout,
    component: Login,
  },
  {
    path: "/register",
    layout: HomeLayout,
    component: Register,
  },
];

export default routes;
