<script>
  import { Chart } from "frappe-charts";
  import { afterUpdate, onMount } from "svelte";

  let node;
  let chart;

  export let data;

  const drawChart = (data) => {
    chart = new Chart(node, {
      data,
      height: 400,
      type: "pie",
    });
  };

  afterUpdate(() => drawChart(data));

  onMount(() => {
    drawChart(data);
  });
</script>

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
            {#if chart}
              {#each data.labels as label, i}
                <tr class="bg-white">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center space-x-2"
                  >
                    <div
                      class="h-2 w-2 rounded-full pr-2"
                      style="background-color: {chart.colors[i]};"
                    />
                    <span>
                      {label}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {data.datasets[0].values[i]}
                  </td>
                </tr>
              {/each}
            {/if}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="flex flex-1 justify-center items-center">
    <div class="w-3/4">
      <div bind:this={node} id="pie_chart" />
    </div>
  </div>
</div>
