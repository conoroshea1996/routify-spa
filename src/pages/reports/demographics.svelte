<script>
  import ReportCard from "$lib/Reports/ReportCard.svelte";

  import { demographics } from "../../stores/reports";

  const highest = $demographics.sort((d) => d.hiredCount)[0];
</script>

<div class="px-1 my-8">
  <h1 class="text-xl font-bold text-gray-900">Demographics</h1>
  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
    <ReportCard title="Most hires by sources" value={highest.sourceHostName} />
    <ReportCard title="No. of hires by source" value={highest.hiredCount} />
  </dl>

  <div class="flex flex-col pt-8">
    <h1 class="text-gray-900 font-bold text-xl pb-6">Pipeline Funnel</h1>
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
                  Applicatons
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Interviewing
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Offered
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Hired
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              {#each $demographics as demographic}
                <tr class="bg-white">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {demographic.sourceHostName}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {demographic.count}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {demographic.interviewCount}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {demographic.offeredCount}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {demographic.hiredCount}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
