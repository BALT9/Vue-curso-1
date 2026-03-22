<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h1>Bienvenido a Vue</h1>
  <button v-on:click="count++">Numero {{ count }}</button>
</template>
