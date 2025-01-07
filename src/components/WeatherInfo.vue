<template>
  <section v-if="info">
    <div @click="onUnitChange" class="toggleBtn">
      {{ unit }}
    </div>
    <div>
      <div><b>City</b>: {{ info.name }}</div>
      <div>
        <b>Temprature ({{ unit }})</b>: {{ weather.main.temp }}
      </div>
      <div>
        <b>Weather Descriptions</b>:
        <ul>
          <li v-for="d of weather.weather">
            {{ d.main }}
          </li>
        </ul>
      </div>
      <div><b>Visibility</b>: {{ weather.visibility }}</div>
      <div><b>Humidity</b>: {{ weather.main.humidity }}</div>
      <div><b>Wind Speed</b>: {{ weather.wind.speed }}</div>
    </div>
  </section>
  <!-- <pre>{{ weather }}</pre> -->
</template>
<script setup lang="ts">
import api from "../services/weather.api";
import { ref, watch } from "vue";
const props = defineProps({
  info: Object,
});
const unitMap = {
  F: "imperial",
  C: "metric",
};
const unit = ref("F");
const weather = ref();
watch(
  () => props.info,
  async (n) => {
    // call API
    await init();
  },
  { deep: true, immediate: true }
);
const init = async () => {
  const { lat, lon } = props.info;
  const data = await api.getWeatherInfoFromLatLong(
    lat,
    lon,
    unitMap[unit.value]
  );
  if (data) {
    weather.value = data;
  }
};
const onUnitChange = () => {
  unit.value = unit.value === "F" ? "C" : "F";
  init();
};
</script>
