<script setup>
import { reactive, ref } from "vue";

const count = ref(0);
const name = "willy";
const lastName = "chura";
const age = 22;

// reactive para enviar sin user.value (tambien se puede usar ref pero se debe acceder con user.value)
const user = reactive({
  name: name,
  lastName: lastName,
  age: age,
});

function enviarDatos() {
  alert("Datos enviados");
  console.log(JSON.stringify(user, null, 2));
}
</script>

<template>
  <h1>Bienvenido a Vue</h1>
  <button v-on:click="count++">Numero {{ count }}</button>

  <h1>Tu nombre</h1>
  <input type="text" v-model="user.name" placeholder="Ingresa tu nombre" />
  <h1>Tu apellido</h1>
  <input
    type="text"
    v-model="user.lastName"
    placeholder="Ingresa tu apellido"
  />
  <h1>Tu edad</h1>
  <input type="text" v-model="user.age" placeholder="Ingresa tu edad" />
  <p>
    Bienvenido {{ user.name }} {{ user.lastName }}, tu edad es
    {{ user.age }} años
  </p>

  <h2>Objeto User</h2>
  <!-- <p>{{ user }}</p> -->
  <pre>{{ JSON.stringify(user, null, 2) }}</pre>

  <button v-on:click="enviarDatos">Enviar Datos</button>
</template>
