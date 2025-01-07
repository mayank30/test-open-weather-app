<template>
  <input type="text" v-model="search" />
  <br />
  <button @click="onSearch">Search</button>
  <br />
  <span v-if="error">{{ error }}</span>
  <div v-if="loading" class="loading">Loading .....</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import api from "../services/weather.api";

const search = ref("");
const error = ref("");
const loading = ref(false);

const emits = defineEmits(["info"]);
const onSearch = async () => {
  error.value = "";
  loading.value = true;
  try {
    const data = await api.getWeatherForCity(search.value);
    if (data) {
      // Optimize the object and emit
      emits("info", data);
    } else {
      error.value = "Invalid Search";
    }
  } catch (e: any) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};
</script>
