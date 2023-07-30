<script setup>
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import { ref } from "vue";

const form = ref({
  y: 10,
  x: 100,
});
</script>

<template>
  <SectionTitle custom>
    <h1 class="text-3xl text-gray-500 dark:text-slate-400 mb-4">
      Y is what % of X
    </h1>
    <pre class="text-xl">
({{ form.y }} / {{ form.x }}) * 100 = {{ (form.y / form.x) * 100 }}%</pre
    >
  </SectionTitle>

  <SectionMain>
    <CardBox class="md:mx-auto">
      <FormField label="Y">
        <FormControl v-model="form.y" type="number" />
      </FormField>
      <FormField label="X">
        <FormControl v-model="form.x" type="number" />
      </FormField>
    </CardBox>
  </SectionMain>
</template>
