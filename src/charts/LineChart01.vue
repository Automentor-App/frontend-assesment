<template>
  <canvas ref="canvas" :width="width" :height="height"></canvas>
</template>

<script>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useDark } from '@vueuse/core';
import { chartColors } from './ChartjsConfig';
import {
  Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip,
} from 'chart.js';
import 'chartjs-adapter-moment';
import { formatValue } from '../utils/Utils';

Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip);

export default {
  name: 'LineChart01',
  props: ['data', 'width', 'height'],
  setup(props) {
    const canvas = ref(null);
    let chart = null;
    const darkMode = useDark();
    const { tooltipBodyColor, tooltipBgColor, tooltipBorderColor } = chartColors;

    // Function to initialize or update the chart
    const createOrUpdateChart = () => {
      if (chart) {
        chart.destroy(); // Destroy existing chart instance before re-creating
      }
      
      const ctx = canvas.value;
      chart = new Chart(ctx, {
        type: 'line',
        data: props.data,
        options: {
          layout: { padding: 20 },
          scales: {
            y: { display: true, beginAtZero: true },
            x: {
              type: 'time',
              time: { parser: 'MM-DD-YYYY', unit: 'day' },
              display: true,
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                title: () => false,
                label: (context) => context.parsed.y, // formatValue(context.parsed.y), 
              },
              bodyColor: darkMode.value ? tooltipBodyColor.dark : tooltipBodyColor.light,
              backgroundColor: darkMode.value ? tooltipBgColor.dark : tooltipBgColor.light,
              borderColor: darkMode.value ? tooltipBorderColor.dark : tooltipBorderColor.light,
            },
            legend: { display: false },
          },
          interaction: { intersect: false, mode: 'nearest' },
          maintainAspectRatio: false,
          resizeDelay: 200,
        },
      });
    };

    // Initialize chart on mount
    onMounted(createOrUpdateChart);

    // Watch for data changes to update chart
    watch(
      () => props.data,
      () => {
        createOrUpdateChart(); // Re-create chart when data changes
      },
      { deep: true }
    );

    // Watch for dark mode changes and update tooltip colors
    watch(
      () => darkMode.value,
      () => {
        if (darkMode.value) {
          chart.options.plugins.tooltip.bodyColor = tooltipBodyColor.dark;
          chart.options.plugins.tooltip.backgroundColor = tooltipBgColor.dark;
          chart.options.plugins.tooltip.borderColor = tooltipBorderColor.dark;
        } else {
          chart.options.plugins.tooltip.bodyColor = tooltipBodyColor.light;
          chart.options.plugins.tooltip.backgroundColor = tooltipBgColor.light;
          chart.options.plugins.tooltip.borderColor = tooltipBorderColor.light;
        }
        chart.update('none'); // Update chart with new tooltip colors
      }
    );

    // Clean up chart on unmount
    onUnmounted(() => {
      if (chart) {
        chart.destroy();
      }
    });

    return {
      canvas,
    };
  },
};
</script>

<style scoped>
canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
