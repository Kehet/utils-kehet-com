<script setup>
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import { reactive } from "vue";

const form = reactive({
  value: 10,
  fromLow: 0,
  fromHigh: 100,
  toLow: 0,
  toHigh: 255,
});
</script>

<template>
  <SectionTitle custom>
    <h1 class="text-3xl text-gray-500 dark:text-slate-400 mb-4">Map</h1>
    <p class="mb-4">
      Re-maps a number from one range to another. That is, a value of fromLow
      would get mapped to toLow, a value of fromHigh to toHigh, values
      in-between to values in-between, etc.
    </p>
    <pre class="text-xl">
      ({{ form.value }} - {{ form.fromLow }}) * ({{ form.toHigh }} - {{
        form.toLow
      }}) / ({{ form.fromHigh }} - {{ form.fromLow }}) + {{ form.toLow }} = {{
        ((form.value - form.fromLow) * (form.toHigh - form.toLow)) /
          (form.fromHigh - form.fromLow) +
        form.toLow
      }}
    </pre>
  </SectionTitle>

  <SectionMain>
    <CardBox class="md:mx-auto">
      <FormField label="Value">
        <FormControl v-model="form.value" type="number" />
      </FormField>
      <FormField label="From">
        <FormControl v-model="form.fromLow" type="number" />
        <FormControl v-model="form.fromHigh" type="number" />
      </FormField>
      <FormField label="To">
        <FormControl v-model="form.toLow" type="number" />
        <FormControl v-model="form.toHigh" type="number" />
      </FormField>
    </CardBox>
  </SectionMain>
</template>
