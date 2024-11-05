<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
    <div class="px-5 pt-5">
      <header class="flex justify-between items-start mb-2">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ title }}</h2>
      </header>
      <div class="flex items-start">
        <!-- Display the candidates count dynamically -->
        <div class="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">{{ candidatesCount.toLocaleString() }}</div>
        <div class="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">{{ metricValue.toLocaleString()}}% of {{ metricTitle }}</div>
        <!-- <div class="text-sm font-medium text-red-700 px-1.5 bg-red-500/20 rounded-full">-14%</div> -->
      </div>
    </div>
    <!-- Chart section -->
    <div class="grow max-sm:max-h-[128px] xl:max-h-[128px]">
      <LineChart :data="chartData" width="389" height="128" />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import LineChart from '../../charts/LineChart01.vue';

export default {
  name: 'DashboardCard01',
  components: {
    LineChart,
  },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    candidatesCount: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: 'N/A',
    },
    metricTitle: {
      type: String,
      default: '',
    },
    metricValue: {
      type: String,
      default: '0',
    },
  },
  // setup(props) {
  //   // Use chartData directly from props
  //   const chartDataRef = ref(props.chartData);

  //   console.log(chartDataRef)

  //   // Watch for changes in the chartData prop and update chartDataRef
  //   watch(
  //     () => props.chartData,
  //     (newChartData) => {
  //       chartDataRef.value = newChartData;
  //       console.log(chartDataRef)
  //     },
  //     { immediate: true, deep: true }
  //   );

  //   return {
  //     chartData: chartDataRef,
  //   };
  // },
};
</script>
