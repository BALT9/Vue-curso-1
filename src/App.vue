<script setup>
// Router Vue Navegacion
import { RouterLink } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import Blog from "./views/Blog.vue";

import Producto from "./views/Producto.vue";
import Inicio from "./views/Inicio.vue";
</script>

<template>
  <!-- <HelloWorld /> -->
  <!-- <Inicio /> -->
  <!-- <Producto /> -->
  <!-- <Blog /> -->
  <!-- <h1>Principal</h1> -->

  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/blog">Blog</RouterLink>
    <RouterLink to="/productos">Productos</RouterLink>
    
  </nav>

  <RouterView />
</template>
