import { createRouter, createWebHistory } from "vue-router";
import Blog from "../views/Blog.vue";
import Producto from "../views/Producto.vue";
import Inicio from "../views/Inicio.vue";

const routes = [
    { path: '/', component: Inicio },
    { path: '/blog', component: Blog },
    { path: '/productos', component: Producto },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})