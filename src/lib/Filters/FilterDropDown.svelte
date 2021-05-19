<script>
  import { Menu, Button } from "hirehive-ui";
  export let filterName = "";
  export let open;
  export let facets = [];
  export let activeFilters = [];

  let filters = [];

  const handleCheckAway = (open) => {
    if (!open) {
      activeFilters = filters;
    }
  };

  const syncFitlers = (activeFilters) => {
    filters = activeFilters;
  };

  $: handleCheckAway(open);
  $: syncFitlers(activeFilters);
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
        class="h-4 w-4 mx-1 text-gray-500"
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
  <div slot="menu_context" class="bg-white shadow-md rounded-md p-3">
    {#each facets as facet}
      <div class="relative flex items-start">
        <div class="flex items-center h-5">
          <input
            id={facet}
            name={facet}
            type="checkbox"
            bind:group={filters}
            value={facet}
            class="h-3 w-3 border-gray-300"
            aria-checked="true"
          />
        </div>
        <div class="ml-3 text-sm">
          <label
            for="checkbox id"
            class="font-medium text-gray-700 svelte-112l3bx">{facet}</label
          >
        </div>
      </div>
    {/each}
  </div>
</Menu>
