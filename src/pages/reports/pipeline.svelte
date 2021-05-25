<script>
  import ReportCard from "$lib/Reports/ReportCard.svelte";
  import { CheckBox } from "hirehive-ui";
  import { pipeLine } from "../../stores/reports";
  let showUserData;

  let pipeLineFunnels = $pipeLine.statuses.filter((s) => s.note == null);
</script>

<div class="my-8">
  <h1 class="text-xl font-bold text-gray-900">Pipeline Overview</h1>

  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-6">
    <ReportCard title="Applied" value={$pipeLine.applied || 0} />
    <ReportCard title="Added" value={$pipeLine.added || 0} />
    <ReportCard title="Linked to a job" value={$pipeLine.linkedToJob || 0} />
    <ReportCard title="Referred" value={$pipeLine.referred || 0} />
    <ReportCard title="CV’s Shared" value={$pipeLine.forwarded || 0} />
    <ReportCard title="Interviews" value={$pipeLine.interviews || 0} />
  </dl>

  <div class="flex justify-between justify-center pt-8">
    <h1 class="text-xl font-bold text-gray-900">Pipeline Performance</h1>
  </div>
  <div class="flex flex-col">
    <div class="flex justify-end my-1">
      <CheckBox
        bind:checked={showUserData}
        label="Show user data"
        size="medium"
      />
    </div>
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
                  Stage
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Moved Forward
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Rejected/Moved Back
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Unchanged
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              {#each $pipeLine.statuses as status}
                <!-- Odd row -->
                <tr class="bg-white" class:bg-gray-100={status.note}>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    class:indent={status.note}
                  >
                    {status.name}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {status.total || 0}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {status.movedForward || 0}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {status.movedBackwards || 0}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {status.noChange || 0}
                  </td>
                </tr>

                {#if showUserData}
                  {#each Object.entries(status.userProgressDetails) as [userName, detail]}
                    <tr class="bg-white">
                      <td
                        class="border-l border-yellow-400 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                      >
                        {userName}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {detail.movedForward +
                          detail.movedBackwards +
                          detail.noChange}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {detail.movedForward || 0}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {detail.movedBackwards || 0}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {detail.noChange || 0}
                      </td>
                    </tr>
                  {/each}
                {/if}
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

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
                  Stage
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Funnel
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Conversion
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              {#each pipeLineFunnels as pipelineFunnel}
                <tr class="bg-white">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {pipelineFunnel.name}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pipelineFunnel.funnel}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pipelineFunnel.total}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pipelineFunnel.funnel}
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

<style>
  .indent {
    padding-left: 40px;
  }
</style>
