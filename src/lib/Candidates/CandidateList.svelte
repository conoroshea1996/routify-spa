<script lang="ts">
  import { CheckBox } from "hirehive-ui";
  import CandidateItem from "./CandidateItem.svelte";
  export let columnsToShow: string[];
  export let jobsCandidates: any[];
  export let selectedCandidateIds: string[];
  let checkAll: boolean;

  const selectAll = (checkAll: boolean) => {
    if (checkAll) {
      selectedCandidateIds = jobsCandidates.map((c: { id: string }) => c.id);
    } else {
      selectedCandidateIds = [];
    }
  };

  $: selectAll(checkAll);
</script>

<table class="min-w-full divide-y divide-gray-200">
  <thead class="bg-white w-full">
    <tr>
      <th scope="col" class="px-2">
        <CheckBox size="medium" bind:checked={checkAll} />
      </th>
      <th
        scope="col"
        class="w-1/4 py-3 text-left text-xs font-medium text-gray-500  tracking-wider flex items-center space-x-2"
        class:hidden={!columnsToShow.includes("Name")}
      >
        <span>Name </span>
      </th>
      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
        class:hidden={!columnsToShow.includes("Current title")}
      >
        Current title
      </th>
      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
        class:hidden={!columnsToShow.includes("Status")}
      >
        Status
      </th>
      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
        class:hidden={!columnsToShow.includes("Sourced")}
      >
        Sourced
      </th>

      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
        class:hidden={!columnsToShow.includes("Tags")}
      >
        Tags
      </th>

      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
        class:hidden={!columnsToShow.includes("Rating")}
      >
        Rating
      </th>

      <th
        scope="col"
        class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
        class:hidden={!columnsToShow.includes("Applications")}
      >
        Applications
      </th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
    {#each jobsCandidates as candidate}
      <CandidateItem {candidate} bind:selectedCandidateIds {columnsToShow} />
    {/each}
  </tbody>
</table>
