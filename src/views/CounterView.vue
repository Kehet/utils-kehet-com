<script setup>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import SectionMain from "@/components/SectionMain.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBox from "@/components/CardBox.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import { ref } from "vue";

const counter = ref(0);
const log = ref([]);
let lastEvent = null;

const reset = () => {
  counter.value = 0;
  log.value = [];
  lastEvent = null;
};

const appendToLog = () => {
  const secondsSinceLast = lastEvent
    ? ` (${Math.round((new Date().getTime() - lastEvent) / 100) / 10} sec)`
    : "";
  log.value.push(
    `${new Date().toLocaleString()}${secondsSinceLast}: ${counter.value}`,
  );
  counter.value = 0;
  lastEvent = new Date().getTime();
};
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton title="Counter" main />

      <SectionMain>
        <CardBox class="md:mx-auto">
          <h1 class="text-4xl text-center my-7">
            {{ counter }}
          </h1>
        </CardBox>
      </SectionMain>

      <SectionMain>
        <CardBox class="md:mx-auto">
          <BaseButtons type="justify-center">
            <BaseButton label="-10" @click="counter = counter - 10" />
            <BaseButton label="-1" @click="counter = counter - 1" />
            <BaseButton label="+1" @click="counter = counter + 1" />
            <BaseButton label="+10" @click="counter = counter + 10" />
          </BaseButtons>
          <BaseButtons type="justify-center mt-2">
            <BaseButton label="Reset" @click="reset()" />
            <BaseButton label="Lap" @click="appendToLog()" />
          </BaseButtons>
        </CardBox>
      </SectionMain>

      <SectionMain v-show="log.length > 0">
        <CardBox class="md:mx-auto">
          <pre v-for="(row, i) in log" :key="i">{{ row }}</pre>
        </CardBox>
      </SectionMain>
    </SectionMain>
  </LayoutAuthenticated>
</template>
