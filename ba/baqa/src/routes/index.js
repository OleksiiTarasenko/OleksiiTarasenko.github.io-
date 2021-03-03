import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login";
import Register from "../components/Register";
import Registered from "../components/Registered";
import Dashboard from "../components/Dashboard";
import Error from "../components/Error";
import Home from "../components/Home";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/registered",
      name: "Registered",
      component: Registered,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/error",
      name: "Error",
      component: Error,
    },
  ],
});

export default router;
