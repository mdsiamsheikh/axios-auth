import Vue from "vue";
import VueRouter from "vue-router";

import WelcomeVew from "../components/welcome/WelcomeVew.vue";
import SignupVew from "../components/auth/SignupVew.vue";
import SigninVew from "../components/auth/SigninVew.vue";
import DashboardVew from "../components/dashboard/DashboardVew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "WelcomeVew",
    component: WelcomeVew,
  },
  {
    path: "/Signin",
    name: "SigninVew",
    component: SigninVew,
  },
  {
    path: "/Signup",
    name: "SignupVew",
    component: SignupVew,
  },
  {
    path: "/dashboard",
    name: "DashboardVew",
    component: DashboardVew,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
