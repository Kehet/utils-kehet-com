<script setup>
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import { ref } from "vue";

const form = ref({
  x: 100,
  p: 10,
});
</script>

<template>
  <SectionTitle custom>
    <h1 class="text-3xl text-gray-500 dark:text-slate-400 mb-4">
      What out of X is P%
    </h1>
    <pre class="text-xl">
({{ form.p }}% / 100) * {{ form.x }} = {{ (form.p / 100) * form.x }}</pre
    >
  </SectionTitle>

  <SectionMain>
    <CardBox class="md:mx-auto">
      <FormField label="X">
        <FormControl v-model="form.x" type="number" />
      </FormField>
      <FormField label="P">
        <FormControl v-model="form.p" type="number" />
      </FormField>
    </CardBox>
  </SectionMain>
</template>
