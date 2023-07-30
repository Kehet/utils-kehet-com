<script setup>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import MathMap from "@/views/Math/MathMap.vue";
import WhatIsPOfX from "@/views/Math/WhatIsPOfX.vue";
import YIsWhatOfX from "@/views/Math/YIsWhatOfX.vue";
import YIsPOfWhat from "@/views/Math/YIsPOfWhat.vue";
import WhatPOfXIsY from "@/views/Math/WhatPOfXIsY.vue";
import POfWhatIsY from "@/views/Math/POfWhatIsY.vue";
import POfXIsWhat from "@/views/Math/POfXIsWhat.vue";
import YOutOfWhatIsP from "@/views/Math/YOutOfWhatIsP.vue";
import WhatOutOfXIfP from "@/views/Math/WhatOutOfXIfP.vue";
import YOutOfXIsWhat from "@/views/Math/YOutOfXIsWhat.vue";
import XPlusPIsWhat from "@/views/Math/XPlusPIsWhat.vue";
import XPlusWhatIsY from "@/views/Math/XPlusWhatIsY.vue";
import WhatPlusPIsY from "@/views/Math/WhatPlusPIsY.vue";
import XMinusPIsWhat from "@/views/Math/XMinusPIsWhat.vue";
import XMinusWhatIsY from "@/views/Math/XMinusWhatIsY.vue";
import WhatMinusPIsY from "@/views/Math/WhatMinusPIsY.vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBox from "@/components/CardBox.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import { ref } from "vue";

const selected = ref("0-0");

const tabs = [
  {
    title: null,
    links: ["Map"],
  },
  {
    title: "Percentages",
    links: [
      "What is P% of X",
      "Y is what of X",
      "Y is P% of what",
      "What P% of X is Y",
      "P of what is Y",
      "P of X is what",
      "Y out of what is P%",
      "What out of X if P%",
      "Y out of X is what",
      "X plus P% is what",
      "X plus what is Y",
      "What plus P% is Y",
      "X minus P% is what",
      "X minus what is Y",
      "What minus P% is Y",
    ],
  },
];
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton title="Math" main />
    </SectionMain>

    <SectionMain>
      <CardBox class="md:mx-auto">
        <div v-for="(group, i) in tabs">
          <h1 v-if="group.title" class="text-center text-2xl mt-6 mb-3">
            {{ group.title }}
          </h1>
          <BaseButtons type="justify-center">
            <BaseButton
              v-for="(label, j) in group.links"
              :key="`${j}-${i}`"
              :label="label"
              :color="selected === `${j}-${i}` ? 'danger' : 'contrast'"
              @click="selected = `${j}-${i}`"
            />
          </BaseButtons>
        </div>
      </CardBox>
    </SectionMain>

    <MathMap v-if="selected === '0-0'" />

    <!-- Y = P% * X -->
    <what-is-p-of-x v-if="selected === '0-1'" />
    <y-is-what-of-x v-if="selected === '1-1'" />
    <y-is-p-of-what v-if="selected === '2-1'" />

    <!-- P% * X = Y -->
    <what-p-of-x-is-y v-if="selected === '3-1'" />
    <p-of-what-is-y v-if="selected === '4-1'" />
    <p-of-x-is-what v-if="selected === '5-1'" />

    <!-- Y / X = P% -->
    <y-out-of-what-is-p v-if="selected === '6-1'" />
    <what-out-of-x-if-p v-if="selected === '7-1'" />
    <y-out-of-x-is-what v-if="selected === '8-1'" />

    <!-- X + (X * P%) = Y -->
    <x-plus-p-is-what v-if="selected === '9-1'" />
    <x-plus-what-is-y v-if="selected === '10-1'" />
    <what-plus-p-is-y v-if="selected === '11-1'" />

    <!-- X - (X * P%) = Y -->
    <x-minus-p-is-what v-if="selected === '12-1'" />
    <x-minus-what-is-y v-if="selected === '13-1'" />
    <what-minus-p-is-y v-if="selected === '14-1'" />
  </LayoutAuthenticated>
</template>
