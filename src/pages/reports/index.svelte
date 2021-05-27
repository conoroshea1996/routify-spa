<script>
  import ReportCard from "$lib/Reports/ReportCard.svelte";
  import { overView, demographics } from "../../stores/reports";
  import PieChart from "../../lib/Reports/PieChart.svelte";
  import TimeLineChart from "../../lib/Reports/TimeLineChart.svelte";
  let totalConversion = `${parseFloat(
    ($overView.data.totalViews / $overView.data.totalApplications) * 100
  ).toFixed(2)}%`;

  let pieChartRenderData = {
    labels: [],
    datasets: [
      {
        values: [],
      },
    ],
  };
  // build dataset
  $demographics.map((d) => {
    pieChartRenderData.labels = [
      ...pieChartRenderData.labels,
      d.sourceHostName,
    ];
    pieChartRenderData.datasets[0].values = [
      ...pieChartRenderData.datasets[0].values,
      d.count,
    ];
  });

  const lineChartDatasets = [
    {
      name: "applications",
      values: $overView.data.applications.values,
    },
    {
      name: "views",
      values: $overView.data.views.values,
    },
  ];

  let lineChartData = {
    labels: $overView.data.applications.dates,
    datasets: lineChartDatasets,
  };

  let activeFilters = [];

  const toggleView = (value) => {
    if (activeFilters.findIndex((f) => f === value) >= 0) {
      activeFilters = activeFilters.filter((av) => av !== value);
    } else {
      activeFilters = [...activeFilters, value];
    }
  };

  const updateTimeLineData = (activeFilters) => {
    console.log(lineChartData, "Before");
    if (activeFilters.length) {
      lineChartData.datasets = lineChartDatasets.filter((d) =>
        activeFilters.includes(d.name)
      );
    } else {
      lineChartData.datasets = lineChartDatasets;
    }

    lineChartData = lineChartData;

    console.log(lineChartData, "after");
  };

  $: updateTimeLineData(activeFilters);
</script>

{activeFilters}
<div class="px-1 my-8">
  <h1 class="text-xl font-bold text-gray-900">All Jobs</h1>

  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-6">
    <ReportCard title="Total views" value={$overView.data.totalViews} />
    <ReportCard
      title="Total applications"
      value={$overView.data.totalApplications}
    />
    <ReportCard title="Total conversion rate" value={totalConversion} />
    <ReportCard title="Interviewing" value={$overView.data.interviewing} />
    <ReportCard title="Offered" value={$overView.data.offered} />
    <ReportCard title="Hired" value={$overView.data.hired} />
  </dl>

  <!-- TimeLine Chart -->
  <div
    class="bg-white py-6 rounded-md shadow-sm flex flex-col my-8 border border-gray-200"
  >
    <div class="flex justify-between px-8">
      <div>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm  font-medium rounded-full shadow-sm text-white  text-gray-900"
          on:click={() => toggleView("views")}
          class:bg-yellow-100={activeFilters.includes("views")}
        >
          Views
        </button>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white  text-gray-900"
          on:click={() => toggleView("applications")}
          class:bg-yellow-100={activeFilters.includes("applications")}
        >
          Applications
        </button>
      </div>

      <div>
        <span class="relative z-0 inline-flex shadow-sm rounded-md">
          <button
            type="button"
            class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            Day
          </button>
          <button
            type="button"
            class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            Week
          </button>
          <button
            type="button"
            class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            Month
          </button>
        </span>
      </div>
    </div>

    <div class="flex flex-1 justify-center items-center">
      <div class="w-full">
        <TimeLineChart data={lineChartData} />
      </div>
    </div>
  </div>

  <!-- Pie Chart -->
  <PieChart data={pieChartRenderData} />
</div>

<style global>
  .chart-legend {
    display: none !important;
  }
  .line-horizontal {
    stroke: white !important;
  }
  .line-vertical {
    stroke: white !important;
  }
  text {
    stroke: rgb(156, 163, 175) !important;
    font-weight: 100;
    font-size: 0.8rem;
  }
</style>
