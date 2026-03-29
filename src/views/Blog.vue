<script setup>
import { onMounted, ref } from "vue";
import blogService from "../services/blog.service";

const publicaciones = ref([]);

onMounted(async () => {
  const res = await blogService.obtenerPublicacion();
  publicaciones.value = res;
  console.log(publicaciones.value);
});
</script>

<template>
  <h1>Pagina Blog</h1>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste adipisci ipsa
    quidem, aliquam perspiciatis at consequuntur temporibus corrupti impedit
    laudantium dolorum, quaerat inventore velit iure est, optio dicta beatae
    cumque.
  </p>

  <div class="py-5">
    <div class="flex flex-wrap justify-center">
      <div v-for="(p, pos) in publicaciones" :key="pos" class="">
        <div class="w-100 h-100 shadow-md m-2 rounded-md p-3" key="{{ p.id }}">
          <img :src="p.social_image" alt="">
          <h1 class="text-center font-semibold mt-5">{{ p.title }}</h1>
          <span class="bg-red-600 py-1 px-2 rounded-full text-white font-semibold my-5 text-xs">{{ p.id }}</span>
          <p class="">{{ p.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <pre>{{ JSON.stringify(publicaciones, null, 2) }}</pre> -->
</template>
