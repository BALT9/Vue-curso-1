<script setup>
import { onMounted, ref } from "vue";

const productos = ref([]);

onMounted(() => {
  productos.value.push(
    {
      id: 1,
      nombre: "Teclado",
      precio: "250",
      imagen: "https://sure.com.bo/wp-content/uploads/2020/08/PR-02325.webp",
    },
    {
      id: 2,
      nombre: "Monitor",
      precio: "1500",
      imagen:
        "https://master-g.com.bo/wp-content/uploads/2024/09/MGME2730GF-01-600x460.jpg",
    },
    {
      id: 3,
      nombre: "Parlantes",
      precio: "100",
      imagen:
        "https://uyustus.com.bo/wp-content/uploads/2024/02/2017-1-300x300.webp",
    },
  );

  console.log(JSON.stringify(productos.value, null, 2));
});
</script>

<template>
  <div>
    <h1>Producto</h1>

    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>PRECIO</th>
          <th>IMAGEN</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prod in productos">
          <td>{{ prod.id }}</td>
          <td>{{ prod.nombre }}</td>
          <td>{{ prod.precio }}</td>
          <td>
            <img :src="prod.imagen" alt="" width="100px" height="100px">
          </td>
          <td>
            <button>Editar</button>
            <button>Eliminar</button>
          </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>

    <pre>{{ JSON.stringify(productos, null, 2) }}</pre>
  </div>
</template>
