<script>
  import { ButtonGroup, ButtonItem } from "hirehive-ui";
  import ReportCard from "$lib/Reports/ReportCard.svelte";
  import Chart from "svelte-frappe-charts";
  import { overView, demographics } from "../../stores/reports";
  let totalConversion = `${parseFloat(
    ($overView.data.totalViews / $overView.data.totalApplications) * 100
  ).toFixed(2)}%`;

  let pieData = {};
  let pieChartRenderData = {
    labels: [],
    datasets: [
      {
        values: [],
      },
    ],
  };
  let pieChartColors = [];
  // build dataset
  $demographics.map((d) => {
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });

    pieData[d.sourceHostName] = {
      count: d.count,
      color: randomColor,
    };
    pieChartRenderData.labels = [
      ...pieChartRenderData.labels,
      d.sourceHostName,
    ];
    pieChartRenderData.datasets[0].values = [
      ...pieChartRenderData.datasets[0].values,
      d.count,
    ];

    pieChartColors = [...pieChartColors, randomColor];
  });

  let pieChartElement;

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

  const addView = (value) => {
    const datasetToAdd = lineChartDatasets.find((d) => d.name === value);

    if (lineChartData.datasets.some((d) => d.name === value)) {
      lineChartData.datasets = lineChartData.datasets.filter(
        (d) => d.name !== value
      );
    } else {
      lineChartData.datasets = [...lineChartData.datasets, datasetToAdd];
    }

    console.log(lineChartData);

    lineChartData = lineChartData;
  };
</script>

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
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm bg-yellow-100 font-medium rounded-full shadow-sm text-white  text-gray-900"
          on:click={() => addView("views")}
        >
          Views
        </button>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white  text-gray-900"
          on:click={() => addView("applications")}
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
        <Chart
          data={lineChartData}
          type="line"
          colors={["#FDE68A", "#D97706"]}
          lineOptions={{
            regionFill: 1,
          }}
        />
      </div>
    </div>
  </div>

  <!-- Pie Chart -->
  <div
    class="bg-white p-20 rounded-md shadow-sm flex my-8 border border-gray-200"
  >
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-white">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Source
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Applications
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              {#each Object.entries(pieData) as [sourceName, details]}
                <tr class="bg-white">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center space-x-2"
                  >
                    <div
                      class="h-2 w-2 rounded-full pr-2"
                      style="background-color: {details.color};"
                    />
                    <span>
                      {sourceName}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {details.count}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="flex flex-1 justify-center items-center">
      <div class="w-3/4">
        <Chart
          data={pieChartRenderData}
          type="pie"
          height={400}
          colors={pieChartColors}
          maxSlices={500}
          bind:this={pieChartElement}
        />
      </div>
    </div>
  </div>
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
