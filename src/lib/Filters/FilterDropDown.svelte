<script lang="ts">
  import { Menu, Button } from "hirehive-ui";
  export let filterName = "";
  export let open: boolean;
  export let facets: string[] = [];
  export let activeFilters: string[] = [];
  let filtersToApply: string[] = [];

  $: syncFilters(activeFilters);

  const syncFilters = (activeFilters: string[]) => {
    filtersToApply = activeFilters;
  };

  const toggle = (facet: string) => {
    if (!filtersToApply.includes(facet)) {
      filtersToApply = [...filtersToApply, facet];
    } else {
      filtersToApply = filtersToApply.filter((f) => f !== facet);
    }
  };

  const clearAll = () => {
    filtersToApply = [];
    activeFilters = [];
  };

  const applyFilters = () => {
    activeFilters = filtersToApply;
    open = false;
  };

  // setCurrentActiveFiltes ??
  const onClickAway = (open: boolean) => {
    if (!open) {
      applyFilters();
    }
  };

  $: onClickAway(open);
</script>

<Menu position="right" bind:open>
  <span slot="menu_trigger" class="cursor-pointer z-50">
    <Button kind="white" size="large">
      <span class="mx-1">{filterName}</span>

      {#if activeFilters.length}
        <span
          class="bg-blue-100 text-blue-500 px-2 py-1 rounded-md text-xs flex items-center mx-1"
        >
          {activeFilters.length}
        </span>
      {/if}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-5 mx-1 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </Button>
  </span>
  <div slot="menu_context" class="bg-white border-gray-100 rounded-md">
    <div class="max-h-60 overflow-y-auto flex flex-col">
      {#each facets as facet}
        <button
          class="text-gray-700 block font-medium focus:outline-transparent py-2 space-x-6 rounded-md m-2 flex items-center justify-between px-2
          {filtersToApply.includes(facet)
            ? 'bg-blue-50'
            : 'hover:bg-gray-100 hover:text-gray-900'} "
          on:click={() => toggle(facet)}
        >
          <span class="font-normal block pl-2 text-left"> {facet} </span>
          {#if filtersToApply.includes(facet)}
            <span class="text-blue-500  flex items-center pl-1.5">
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          {/if}
        </button>
      {/each}
    </div>

    <div class="border-t border-gray-100 flex justify-between px-4 py-2 ">
      <button class="text-blue-500 font-medium" on:click={() => applyFilters()}>
        Apply
      </button>

      <button class="text-gray-500 font-medium" on:click={() => clearAll()}>
        Clear
      </button>
    </div>
  </div>
</Menu>
