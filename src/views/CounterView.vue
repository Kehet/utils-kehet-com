<script setup>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import SectionMain from "@/components/SectionMain.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBox from "@/components/CardBox.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import { ref } from "vue";

const counter = ref(0);
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
            <BaseButton label="Reset" @click="counter = 0" />
          </BaseButtons>
        </CardBox>
      </SectionMain>
    </SectionMain>
  </LayoutAuthenticated>
</template>
