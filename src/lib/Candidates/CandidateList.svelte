<script lang="ts">
  import { CheckBox } from "hirehive-ui";
  import CandidateItem from "./CandidateItem.svelte";
  export let columnsToShow: string[];
  export let candidates: any[];
  export let selectedCandidateIds: string[];
  let checkAll: boolean;

  const selectAll = (checkAll: boolean) => {
    if (checkAll) {
      selectedCandidateIds = candidates.map((c: { id: string }) => c.id);
    } else {
      selectedCandidateIds = [];
    }
  };

  $: selectAll(checkAll);
</script>

<!-- <table class="min-w-full bg-white divide-y divide-gray-200">
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
  {#each candidates as candidate}
    <CandidateItem {candidate} bind:selectedCandidateIds {columnsToShow} />
  {/each}
</table> -->

<div class="bg-white shadow overflow-hidden sm:rounded-md">
  <ul class="divide-y divide-gray-200">
    <li>
      <div class="flex items-center  w-full py-2">
        <div class="flex-1 flex">
          <div class="items-center flex px-2">
            <CheckBox size="medium" bind:checked={checkAll} />
          </div>
          <div
            class="w-3/12 px-3 flex items-center space-x-4 text-gray-500 px-1 text-left text-sm font-medium text-gray-500  tracking-wider"
            class:hidden={!columnsToShow.includes("Name")}
          >
            <span> Name </span>
          </div>

          <div
            class="w-3/12 px-4 py-3 text-left text-sm font-medium text-gray-500  tracking-wider col-span-2"
            class:hidden={!columnsToShow.includes("Current title")}
          >
            <span> Current title </span>
          </div>

          <div
            class="w-2/12 px-4 py-3 text-left text-sm font-medium text-gray-500  tracking-wider col-span-1"
            class:hidden={!columnsToShow.includes("Status")}
          >
            <span> Status </span>
          </div>
          <div
            class="flex-1 px-4 py-3 text-left text-sm font-medium text-gray-500  tracking-wider col-span-1"
            class:hidden={!columnsToShow.includes("Sourced")}
          >
            <span> Sourced </span>
          </div>

          <div
            class="flex-1 px-4 py-3 text-left text-sm font-medium text-gray-500  tracking-wider col-span-1"
            class:hidden={!columnsToShow.includes("Tags")}
          >
            <span> Tags </span>
          </div>

          <div
            class="flex-1 px-4 py-3 text-left text-sm font-medium text-gray-500  tracking-wider col-span-1"
            class:hidden={!columnsToShow.includes("Rating")}
          >
            <span> Rating </span>
          </div>

          <div
            class="flex-1 px-1 py-3 text-left text-sm font-medium text-gray-500  tracking-wider col-span-1"
            class:hidden={!columnsToShow.includes("Applications")}
          >
            <span> Applications </span>
          </div>
        </div>
      </div>
    </li>

    {#each candidates as candidate}
      <CandidateItem {candidate} bind:selectedCandidateIds {columnsToShow} />
    {/each}
  </ul>
</div>
