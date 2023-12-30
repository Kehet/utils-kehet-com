import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ResistorsView from "@/views/ResistorsView.vue";
import MathView from "@/views/MathView.vue";
import CounterView from "@/views/CounterView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    meta: {
      title: "Resistors",
    },
    path: "/resistors",
    name: "resistors",
    component: ResistorsView,
  },
  {
    meta: {
      title: "Counters",
    },
    path: "/counters",
    name: "counters",
    component: CounterView,
  },
  {
    meta: {
      title: "Math",
    },
    path: "/math",
    name: "math",
    component: MathView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
