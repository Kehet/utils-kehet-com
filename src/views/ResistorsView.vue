<script setup>
import { mdiChartTimelineVariant } from "@mdi/js";
import SectionMain from "@/components/SectionMain.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import { storeToRefs } from "pinia";
import { useResistorStore } from "@/stores/resistor";
import { computed } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import CardBox from "@/components/CardBox.vue";
import BaseButtons from "@/components/BaseButtons.vue";

const { bandCount, selected, rows } = storeToRefs(useResistorStore());

const showColumn = computed(() => {
  switch (bandCount.value) {
    case 3:
      return [1, 2, 4];
    case 4:
      return [1, 2, 4, 5];
    case 5:
      return [1, 2, 3, 4, 5];
    case 6:
      return [1, 2, 3, 4, 5, 6];
  }
  return [];
});

const formatNumber = (resistance) => {
  if (resistance == null || resistance < 1) {
    return resistance + "&nbsp;&ohm;";
  }

  const postfixes = ["", "k", "M", "G", "T"];

  const i = Math.floor(Math.log(resistance) / Math.log(1000));

  return (
    +parseFloat(String(resistance / Math.pow(1000, i))).toFixed(3) +
    "&nbsp;" +
    postfixes[i] +
    "&ohm;"
  );
};

const resistance = computed(() => {
  let number = 0;
  const threeNumbers = bandCount.value >= 5;

  if (threeNumbers) {
    number += selected.value[1] * 100;
    number += selected.value[2] * 10;
    number += selected.value[3];
  } else {
    number += selected.value[1] * 10;
    number += selected.value[2];
  }

  if (selected.value[4] >= 1) {
    number *= Math.pow(10, rows.value[selected.value[4]].multiplier);
  }

  return number;
});

const min = computed(() => {
  if (bandCount.value < 4) {
    return null;
  }
  return parseFloat(
    String(
      resistance.value -
        (resistance.value / 100) * rows.value[selected.value[5]].tolerance,
    ),
  ).toFixed(3);
});

const max = computed(() => {
  if (bandCount.value < 4) {
    return null;
  }
  return parseFloat(
    resistance.value +
      (resistance.value / 100) * rows.value[selected.value[5]].tolerance,
  ).toFixed(3);
});
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton title="Resistor band colors" main />

      <SectionMain>
        <CardBox class="md:mx-auto">
          <BaseButtons type="justify-center">
            <BaseButton
              v-for="count in [3, 4, 5, 6]"
              :key="count"
              :label="count + ' bands'"
              :color="bandCount === count ? 'danger' : 'contrast'"
              @click="bandCount = count"
            />
          </BaseButtons>
        </CardBox>
      </SectionMain>

      <SectionMain>
        <CardBox class="md:mx-auto">
          <h1 class="text-4xl text-center my-7">
            <span v-html="formatNumber(resistance)"></span>
            <span
              v-show="min"
              v-html="'&nbsp;' + rows[selected[5]].col5"
            ></span>
          </h1>
          <h1 v-show="min" class="text-3xl text-center my-7">
            <span v-html="formatNumber(min)"></span> &ndash;
            <span v-html="formatNumber(max)"></span>
          </h1>
        </CardBox>
      </SectionMain>

      <SectionMain>
        <CardBox has-table>
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Band 1</th>
                <th>Band 2</th>
                <th>Band 3</th>
                <th v-show="bandCount >= 4">Band 4</th>
                <th v-show="bandCount >= 5">Band 5</th>
                <th v-show="bandCount >= 6">Band 6</th>
              </tr>
              <tr>
                <th>Color</th>
                <th>1st</th>
                <th>2nd</th>
                <th v-show="showColumn.includes(3)">3rd</th>
                <th>Multiplier</th>
                <th v-show="showColumn.includes(5)">Tolerance</th>
                <th v-show="showColumn.includes(6)">TCR</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, key) in rows" :key="key" :class="row.class">
                <td class="py-2 px-4">{{ row.label }}</td>

                <td
                  v-for="i in [1, 2, 3, 4, 5, 6]"
                  v-show="showColumn.includes(i)"
                  :key="key + '-' + i"
                  class="py-2 px-4 text-center"
                  :class="{ striped: row['col' + i] == null }"
                >
                  <button
                    v-show="row['col' + i] != null"
                    type="button"
                    class="py-2 px-4 w-full"
                    :class="{
                      'bg-gray-700 text-white rounded': selected[i] === key,
                    }"
                    @click="selected[i] = key"
                    v-html="row['col' + i]"
                  ></button>
                </td>
              </tr>
            </tbody>
          </table>
        </CardBox>
      </SectionMain>
    </SectionMain>
  </LayoutAuthenticated>
</template>
