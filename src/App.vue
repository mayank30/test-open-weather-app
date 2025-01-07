<template>
  <SearchCity @info="info = $event" />
  <br />
  <WeatherInfo :info="info" />
  <br />
</template>

<script setup lang="ts">
import { ref } from "vue";
import SearchCity from "./components/SearchCity.vue";
import WeatherInfo from "./components/WeatherInfo.vue";

const info = ref();
</script>
