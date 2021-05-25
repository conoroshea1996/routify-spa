<script>
  import ReportCard from "$lib/Reports/ReportCard.svelte";
  import { timeLine } from "../../stores/reports";
</script>

<div class="px-1 my-8">
  <h1 class="text-xl font-bold text-gray-900">Time to Hire</h1>
  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4">
    <ReportCard title="Published jobs" value={$timeLine.publishedJobs} />
    <ReportCard title="Filled jobs" value={$timeLine.jobsFilled} />
    <ReportCard title="Total Hires" value={$timeLine.totalHires} />
    <ReportCard
      title="Average no. of days to hire"
      value={$timeLine.averageDaysToHire}
    />
  </dl>

  <div class="my-8 px-1 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                Title
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Owner
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date filled
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Time to hire
              </th>
              <th
                scope="col"
                class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                No. of hires
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            {#each $timeLine.jobs as job}
              <tr class="bg-white">
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {job.title}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {job.jobOwner}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {job.dateFilled}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {job.daysToFill} days
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {job.totalHires}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
