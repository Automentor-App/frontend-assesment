<template>
  <div class="flex h-screen overflow-hidden">

    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <div class="sm:flex sm:justify-between sm:items-center mb-8">

            <div class="mb-4 sm:mb-0">
              <h1 class="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Dashboard</h1>
            </div>

            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              <Datepicker v-model="selectedDateRange" align="right" />
              <AutocompleteSelectComponent v-model="selectedSubscriber"
                :options="transformedSubscribers.length ? transformedSubscribers : []" />
            </div>
          </div>

          <div class="grid grid-cols-12 gap-6">
            <DashboardCard01 v-if="chartDataFromAPI" :chartData="chartDataFromAPI" :candidatesCount="candidatesCount"
              :title="'Candidates'" :metricTitle="'Distribution'" :metricValue="CanMetric" />
            <DashboardCard01 v-if="CBLChartDataFromAPI" :chartData="CBLChartDataFromAPI" :candidatesCount="CBLCount"
              :title="'Clicked Booking Link'" :metricTitle="'Candidates'" :metricValue="CBLMetric" />
            <DashboardCard01 v-if="IBChartDataFromAPI" :chartData="IBChartDataFromAPI" :candidatesCount="IBCount"
              :title="'Interview Booked'" :metricTitle="'CBL'" :metricValue="IBMetric" />
            <DashboardCard01 v-if="CILChartDataFromAPI" :chartData="CILChartDataFromAPI" :candidatesCount="CILCount"
              :title="'Clicked Interview Link'" :metricTitle="'IB'" :metricValue="CILMetric" />
          </div>

        </div>
      </main>
    </div>

  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import axios from 'axios';
import Sidebar from '../partials/Sidebar.vue'
import Header from '../partials/Header.vue'
import FilterButton from '../components/DropdownFilter.vue'
import Datepicker from '../components/Datepicker.vue'
import DashboardCard01 from '../partials/dashboard/DashboardCard01.vue'
import SelectComponent from '../components/SelectComponent.vue';
import { tailwindConfig, hexToRGB } from '../utils/Utils';
import { chartAreaGradient } from '../charts/ChartjsConfig';
import AutocompleteSelectComponent from '../components/AutocompleteSelectComponent.vue';


// Mock API Response
// in actual we use REST API
import { 
  fetchMockSubscribers,
  fecthMockSubscriberTrend
} from '../api/api';


export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    Header,
    FilterButton,
    Datepicker,
    DashboardCard01,
    SelectComponent,
    AutocompleteSelectComponent,
  },
  setup() {

    const sidebarOpen = ref(false);

    const subscribers = ref([]);
    const transformedSubscribers = ref([]);
    const selectedSubscriber = ref('');
    const selectedDateRange = ref([new Date().setDate(new Date().getDate() - 6), new Date()]); // Default date range

    let previousStartDate = selectedDateRange.value[0];
    let previousEndDate = selectedDateRange.value[1];

    const chartDataFromAPI = ref(null);
    const candidatesCount = ref(0); 
    const CBLChartDataFromAPI = ref(null);
    const CBLCount = ref(0);
    const IBChartDataFromAPI = ref(null);
    const IBCount = ref(0); 
    const CILChartDataFromAPI = ref(null);
    const CILCount = ref(0); 

    const CanMetric = ref(0);
    const CBLMetric = ref(0);
    const IBMetric = ref(0);
    const CILMetric = ref(0);

    const selectedOption = ref('');

    onMounted(async () => {
      try {
        const response = await fetchMockSubscribers();
        if (response.data.success && response.data.data) {
          // Transform the API data to match { label, key } format
          subscribers.value = response.data.data;
          transformedSubscribers.value = subscribers.value.map(subscriber => ({
            label: subscriber.subscriber_name || subscriber.subscriber_id,
            key: subscriber.subscriber_id,
          }));
          // Set default to the first item's key
          if (transformedSubscribers.value.length > 0) {
            selectedSubscriber.value = transformedSubscribers.value[0].key;
          }
        } else {
          console.error('Failed to fetch subscribers');
        }
      } catch (error) {
        console.error('Error fetching subscribers:', error);
      }

      // trends
      await syncDashboard();
    });

    // Watch for changes in selectedSubscriber and show an alert when it changes
    watch(selectedSubscriber, async (newVal) => {
      if (newVal) {
        await syncDashboard();
      }
    });

    watch(
      selectedDateRange,
      async (newValue) => {
        if (newValue && newValue.length === 2) {
          const [startDate, endDate] = newValue;

          // Check if the new dates differ from the previous dates
          if (startDate !== previousStartDate || endDate !== previousEndDate) {
            // Update previous dates
            previousStartDate = startDate;
            previousEndDate = endDate;

            await syncDashboard();
          }
        }
      },
      { deep: true }
    );

    async function syncDashboard() {

      let formattedStartDate = new Date(previousStartDate).toLocaleDateString('en-CA'); // 'en-CA' provides YYYY-MM-DD format
      let formattedEndDate = new Date(previousEndDate).toLocaleDateString('en-CA');

      let labels = [];
      let totalDis = [];
      let distribs = [];
      let cbls = [];
      let ibs = [];
      let cils = [];

      let totalCounts = 0;
      let distribCounts = 0;
      let cblCounts = 0;
      let ibCounts = 0;
      let cilCounts = 0;

      try {
        const response = await fecthMockSubscriberTrend(selectedSubscriber.value, formattedStartDate, formattedEndDate);
        
        if (response.data.success && response.data.data) {
          const items = response.data.data.items;

          labels = items.map(item => {
            let date = new Date(item.date_range);
            let formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}-${date.getFullYear()}`;
            return formattedDate;
          });

          distribs = items.map(item => {
            return item.total_distribution;
          });

          distribCounts = distribs.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);

          cbls = items.map(item => {
            return item.total_cbl;
          });

          cblCounts = cbls.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);

          ibs = items.map(item => {
            return item.total_booked;
          });

          ibCounts = ibs.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);

          cils = items.map(item => {
            return item.total_cil;
          });

          cilCounts = cils.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);

          totalDis = items.map(item => {
            return item.distrib
          });

          totalCounts = totalDis.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);

        }
      } catch (error) {
        console.error('Error fetching trends:', error);
      }

      chartDataFromAPI.value = {
        labels: labels,
        datasets: [
          // Indigo line
          {
            data: distribs,
            fill: true,
            backgroundColor: function (context) {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              return chartAreaGradient(ctx, chartArea, [
                { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)` },
                { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)` }
              ]);
            },
            borderColor: tailwindConfig().theme.colors.violet[500],
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
            pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0,
            clip: 20,
            tension: 0.2,
          },
        ]
      };

      CBLChartDataFromAPI.value = {
        labels: labels,
        datasets: [
          // Indigo line
          {
            data: cbls,
            fill: true,
            backgroundColor: function (context) {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              return chartAreaGradient(ctx, chartArea, [
                { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)` },
                { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)` }
              ]);
            },
            borderColor: tailwindConfig().theme.colors.violet[500],
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
            pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0,
            clip: 20,
            tension: 0.2,
          },
        ]
      };

      IBChartDataFromAPI.value = {
        labels: labels,
        datasets: [
          // Indigo line
          {
            data: ibs,
            fill: true,
            backgroundColor: function (context) {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              return chartAreaGradient(ctx, chartArea, [
                { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)` },
                { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)` }
              ]);
            },
            borderColor: tailwindConfig().theme.colors.violet[500],
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
            pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0,
            clip: 20,
            tension: 0.2,
          },
        ]
      };

      CILChartDataFromAPI.value = {
        labels: labels,
        datasets: [
          // Indigo line
          {
            data: cils,
            fill: true,
            backgroundColor: function (context) {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              return chartAreaGradient(ctx, chartArea, [
                { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)` },
                { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)` }
              ]);
            },
            borderColor: tailwindConfig().theme.colors.violet[500],
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
            pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
            pointBorderWidth: 0,
            pointHoverBorderWidth: 0,
            clip: 20,
            tension: 0.2,
          },
        ]
      };

      candidatesCount.value = distribCounts; // Set candidates count if available in API
      CBLCount.value = cblCounts;
      IBCount.value = ibCounts;
      CILCount.value = cilCounts;

      if (totalCounts > 0) {
        CanMetric.value = ((distribCounts / totalCounts) * 100).toFixed(2);
      } else {
        CanMetric.value = 0
      }

      if (distribCounts > 0) {
        CBLMetric.value = ((cblCounts / distribCounts) * 100).toFixed(2);
      } else {
        CBLMetric.value = 0
      }

      if (cblCounts > 0) {
        IBMetric.value = ((ibCounts / cblCounts ) * 100).toFixed(2);
      } else {
        IBMetric.value = 0
      }

      if (cilCounts > 0) {
        CILMetric.value = ((cilCounts / ibCounts ) * 100).toFixed(2);
      } else {
        CILMetric.value = 0
      }

    }

    return {
      sidebarOpen,
      transformedSubscribers,
      selectedSubscriber,
      selectedDateRange,
      chartDataFromAPI,
      candidatesCount,
      CBLChartDataFromAPI,
      CBLCount,
      IBChartDataFromAPI,
      IBCount,
      CILChartDataFromAPI,
      CILCount,
      selectedOption, 
      CanMetric,
      CBLMetric,
      IBMetric,
      CILMetric
    }
  }
}
</script>