<script setup>
import { ref, onMounted } from "vue";
import * as chartConfig from "@/components/Charts/chart.config.js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import SectionTitle from "@/components/SectionTitle.vue";

const chartData = ref(null);

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
  fillChartData();
});
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton title="Overview" main>
      </SectionTitleLineWithButton>
      <CardBox>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          asperiores consequuntur deleniti eius eligendi, error eveniet facere
          ipsam libero molestiae nostrum provident quasi quod ratione
          repellendus tempore veniam vero voluptate.
        </p>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
