<script>
  import { Menu, Button } from "hirehive-ui";
  import CheckBox from "hirehive-ui/src/Inputs/CheckBox.svelte";
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

  $: handleCheckAway(open);
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
  <div slot="menu_context" class="bg-white shadow-md rounded-md p-3">
    {#each facets as facet}
      <CheckBox
        size="medium"
        bind:group={filters}
        checked={activeFilters.includes(facet)}
        value={facet}
        label={facet}
      />
    {/each}
  </div>
</Menu>
