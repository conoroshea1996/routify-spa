<script lang="ts">
  import { Menu } from "hirehive-ui";
  import { createEventDispatcher } from "svelte";
  export let open: boolean;
  export let currentJobStatus: string;

  const dispatch = createEventDispatcher();

  const updateStatus = (status: string) => {
    dispatch("updateJobStatus", {
      status,
    });
  };

  const options = ["Published", "Drafted", "Internal", "Closed"];
</script>

<Menu position="right" bind:open>
  <span slot="menu_trigger" class="cursor-pointer z-50">
    <slot />
  </span>
  <div slot="menu_context" class="bg-white border border-gray-200 rounded-md">
    <div class="max-h-60 overflow-y-auto flex flex-col">
      {#each options as option}
        <button
          on:click={() => updateStatus(option)}
          class="text-gray-700 block focus:outline-transparent py-2 space-x-6 rounded-md m-2 flex items-center justify-between px-2
            {option === currentJobStatus ? 'bg-blue-50' : 'hover:bg-gray-100'} "
        >
          <span class="font-normal block pl-2 text-left"> {option} </span>

          {#if option === currentJobStatus}
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
  </div>
</Menu>
