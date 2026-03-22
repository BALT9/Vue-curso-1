<script setup>
import { onMounted, ref } from "vue";

const productos = ref([]);

const producto = ref({});

console.log(JSON.stringify(producto.value, null, 2));

function crearProducto() {
  productos.value.push(producto.value);
  console.log(JSON.stringify(productos.value, null, 2));
}

// Iniciliza al recargar la pag (como useEffect de react)
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

  //   console.log(JSON.stringify(productos.value, null, 2));
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
    <div class="max-w-6xl mx-auto">
      <!-- HEADER -->
      <div class="mb-8">
        <h1 class="text-4xl font-extrabold text-gray-800 tracking-tight">
          🛍️ Gestión de Productos
        </h1>
        <p class="text-gray-500 mt-1">Administra tus productos fácilmente</p>
      </div>

      <span>{{ producto }}</span>

      <!-- FORM CARD -->
      <div
        class="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-200 mb-10"
      >
        <h2 class="text-lg font-semibold text-gray-700 mb-4">Crear Producto</h2>

        <form class="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          <input
            placeholder="ID"
            class="p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition"
            v-model="producto.id"
          />

          <input
            placeholder="Nombre"
            class="p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition"
            v-model="producto.nombre"
          />

          <input
            placeholder="Precio"
            class="p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition"
            v-model="producto.precio"
          />

          <input
            placeholder="URL Imagen"
            class="p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition md:col-span-2"
            v-model="producto.imagen"
          />

          <div class="md:col-span-2 flex gap-3 pt-2">
            <button
              class="bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105 transition transform text-white px-6 py-2 rounded-xl shadow-md"
              type="button"

              @click="crearProducto"
            >
              Crear
            </button>

            <button
              type="button"
              class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-xl transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>

      <!-- TABLE CARD -->
      <div
        class="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
      >
        <div class="p-5 border-b">
          <h2 class="text-lg font-semibold text-gray-700">
            Lista de Productos
          </h2>
        </div>

        <table class="w-full text-sm text-gray-700">
          <thead class="bg-gray-100 text-xs uppercase text-gray-500">
            <tr>
              <th class="px-6 py-3">ID</th>
              <th class="px-6 py-3">Producto</th>
              <th class="px-6 py-3">Precio</th>
              <th class="px-6 py-3 text-center">Imagen</th>
              <th class="px-6 py-3 text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="prod in productos"
              :key="prod.id"
              class="border-t hover:bg-gray-50 transition"
            >
              <td class="px-6 py-4 font-medium">{{ prod.id }}</td>

              <td class="px-6 py-4 font-semibold text-gray-800">
                {{ prod.nombre }}
              </td>

              <td class="px-6 py-4 text-green-600 font-bold">
                Bs {{ prod.precio }}
              </td>

              <td class="px-6 py-4 flex justify-center">
                <img
                  :src="prod.imagen"
                  class="w-16 h-16 object-cover rounded-xl shadow-sm hover:scale-110 transition"
                />
              </td>

              <td class="px-6 py-4 text-center space-x-2">
                <button
                  class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg text-xs shadow"
                >
                  Editar
                </button>

                <button
                  class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs shadow"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- DEBUG -->
      <pre
        class="mt-8 bg-gray-900 text-green-400 p-4 rounded-xl text-xs overflow-auto shadow-inner"
        >{{ JSON.stringify(productos, null, 2) }}
      </pre>
    </div>
  </div>
</template>
