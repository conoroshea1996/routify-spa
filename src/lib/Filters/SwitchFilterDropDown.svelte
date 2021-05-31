<script lang="ts">
  import { Menu, Switch } from "hirehive-ui";
  export let open: boolean;
  export let columns: string[] = [];
  export let activeColumns: string[] = [];

  const toggle = (facet: string) => {
    if (!activeColumns.includes(facet)) {
      activeColumns = [...activeColumns, facet];
    } else {
      activeColumns = activeColumns.filter((f) => f !== facet);
    }
  };
</script>

<Menu position="right" bind:open>
  <button slot="menu_trigger" class="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </svg>
  </button>
  <div slot="menu_context" class="bg-white border-gray-100 rounded-md">
    <div class="max-h-96 overflow-y-auto flex flex-col">
      {#each columns as column}
        <button
          class="text-gray-700 block font-medium focus:outline-transparent focus:bg-gray-100 focus:text-gray-900 py-2 space-x-6 rounded-md m-1 flex items-center justify-between px-2
            {activeColumns.includes(column)
            ? ''
            : 'hover:bg-gray-100 hover:text-gray-900'} "
          on:click={() => toggle(column)}
        >
          <span class="font-medium block pl-2 text-left"> {column} </span>

          <Switch value={activeColumns.includes(column)} />
        </button>
      {/each}
    </div>
  </div>
</Menu>
