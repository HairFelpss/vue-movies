import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";

Vue.use(VueRouter);

const routes = [{ path: "/", component: Home }];

// fix
const router = new VueRouter({ mode: "history", routes });
export default router;
