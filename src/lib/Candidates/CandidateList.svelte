<script lang="ts">
  import { CheckBox } from "hirehive-ui";
  import { createEventDispatcher } from "svelte";
  import CandidateItem from "./CandidateItem.svelte";
  export let columnsToShow: string[];
  export let candidates: any[];
  export let hasSearch: boolean;
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

  const dispatch = createEventDispatcher();
  const clearAllFilters = () => {
    dispatch("clearFilters");
  };
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

{#if candidates.length > 0}
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <ul class="divide-y divide-gray-200">
      <li>
        <div class="flex items-center  w-full py-2">
          <div class="flex-1 flex">
            <div class="items-center flex px-4">
              <CheckBox size="large" bind:checked={checkAll} />
            </div>
            <div
              class="w-3/12 px-2 flex items-center space-x-4 text-gray-500 px-1 text-left text-sm font-medium text-gray-500  tracking-wider"
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
              class="flex-1 px-4 py-3 text-left text-sm font-medium text-gray-500  tracking-wider col-span-1"
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
{:else if candidates.length === 0 && !hasSearch}
  <div
    class="flex justify-center items-center border border-gray-200 rounded-md py-24"
  >
    <div class="flex justify-center items-center flex-col">
      <img
        src="/assets/share.png"
        alt="There are no candidates for this role yet"
      />
      <div class="mt-4 space-y-1 px-4">
        <h1 class="text-gray-900 text-center font-bold">
          There are no candidates for this role yet
        </h1>

        <p class="text-gray-500 text-center">
          You might want to consider sharing this role in more places to <br />
          generate some interest.
        </p>
      </div>
      <div class="mt-4">
        <a class="text-blue-500 flex items-center justify-center" href="#">
          Learn more about sharing a job
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
{:else if candidates.length === 0 && hasSearch}
  <div
    class="flex justify-center items-center border border-gray-200 rounded-md py-24"
  >
    <div class="flex justify-center items-center flex-col">
      <img
        src="/assets/No_Candidates.png"
        alt="There are no candidates for this role yet"
      />
      <div class="mt-4 space-y-1 px-4">
        <h1 class="text-gray-900 text-center font-bold">
          No results for this search
        </h1>

        <p class="text-gray-500 text-center">
          You might have too many filters applied or have entered a search <br
          />
          term with no results.
        </p>
      </div>
      <div class="mt-4">
        <button
          class="text-blue-500 flex items-center justify-center"
          on:click={() => clearAllFilters()}
        >
          Clear filters & search
        </button>
      </div>
    </div>
  </div>
{/if}
