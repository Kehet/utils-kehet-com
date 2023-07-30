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

const selected = ref(1);

const tabs = [
  "map",
  "what is p of x",
  "y is what of x",
  "y is p of what",
  "what p of x is y",
  "p of what is y",
  "p of x is what",
  "y out of what is p",
  "what out of x if p",
  "y out of x is what",
  "x plus p is what",
  "x plus what is y",
  "what plus p is y",
  "x minus p is what",
  "x minus what is y",
  "what minus p is y",
];
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton title="Math" main />
    </SectionMain>

    <SectionMain>
      <CardBox class="md:mx-auto">
        <BaseButtons type="justify-center">
          <BaseButton
            v-for="(label, i) in tabs"
            :label="label"
            :color="selected === i ? 'danger' : 'contrast'"
            @click="selected = i"
          />
        </BaseButtons>
      </CardBox>
    </SectionMain>

    <MathMap v-if="selected === 0" />

    <!-- Y = P% * X -->
    <what-is-p-of-x v-if="selected === 1" />
    <y-is-what-of-x v-if="selected === 2" />
    <y-is-p-of-what v-if="selected === 3" />

    <!-- P% * X = Y -->
    <what-p-of-x-is-y v-if="selected === 4" />
    <p-of-what-is-y v-if="selected === 5" />
    <p-of-x-is-what v-if="selected === 6" />

    <!-- Y / X = P% -->
    <y-out-of-what-is-p v-if="selected === 7" />
    <what-out-of-x-if-p v-if="selected === 8" />
    <y-out-of-x-is-what v-if="selected === 9" />

    <!-- X + (X * P%) = Y -->
    <x-plus-p-is-what v-if="selected === 10" />
    <x-plus-what-is-y v-if="selected === 11" />
    <what-plus-p-is-y v-if="selected === 12" />

    <!-- X - (X * P%) = Y -->
    <x-minus-p-is-what v-if="selected === 13" />
    <x-minus-what-is-y v-if="selected === 14" />
    <what-minus-p-is-y v-if="selected === 15" />
  </LayoutAuthenticated>
</template>
