<script setup>
import { ref } from "vue";

const count = ref(0);
const name = ref("")
const lastName = ref("")
const age = ref(0)

const user = ref({
  name: name,
  lastName: lastName,
  age: age
})

</script>

<template>
  <h1>Bienvenido a Vue</h1>
  <button v-on:click="count++">Numero {{ count }}</button>

  <h1>Tu nombre</h1>
  <input type="text" v-model="name" placeholder="Ingresa tu nombre">
  <h1>Tu apellido</h1>
  <input type="text" v-model="lastName" placeholder="Ingresa tu apellido">
  <h1>Tu edad</h1>
  <input type="text" v-model="age" placeholder="Ingresa tu edad">
  <p>Bienvenido {{ name }} {{ lastName }}, tu edad es {{ age }} años</p>

  <h2>Objeto User</h2>
  <!-- <p>{{ user }}</p> -->
  <pre>{{ JSON.stringify(user, null, 2) }}</pre>

</template>
