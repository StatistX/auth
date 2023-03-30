<template>
  <v-container>
    <HeaderLayout />
    <v-row>
      <v-col cols="6">
        <p>Contacts</p>
        <v-card class="mt-5 mb-8">
          <YandexMap
            :coordinates="coordinates"
            :detailed-controls="detailedControls"
            :controls="controls"
            :zoom="15"
          >
            <YandexMarker :coordinates="coordinates" :marker-id="123">
              <template #component>
                <CustomBalloon />
              </template>
            </YandexMarker>
          </YandexMap>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HeaderLayout from "@/components/HeaderLayout.vue";
import { YandexMap, YandexMarker } from "vue-yandex-maps";
import CustomBalloon from "../components/CustomBulloon.vue";
import { ref } from "vue";

export default {
  setup() {
    const coordinates = ref([55.765711, 37.611581]);
    const controls = ["fullscreenControl"];
    const detailedControls = {
      zoomControl: { position: { right: 10, top: 50 } },
    };
    const settings = {
      apiKey: "", // Индивидуальный ключ API
      lang: "ru_RU", // Используемый язык
      coordorder: "latlong", // Порядок задания географических координат
      debug: false, // Режим отладки
      version: "2.1", // Версия Я.Карт
    };
    return { coordinates, settings, controls, detailedControls };
  },
  components: { HeaderLayout, YandexMap, YandexMarker, CustomBalloon },
};
</script>

<style lang="scss">
.yandex-container {
  height: 400px;
}

.yandex-balloon {
  height: 100px;
  width: 160px;
}
</style>
