<script lang="ts">
  import { Menu } from "hirehive-ui";
  import { createEventDispatcher } from "svelte";
  export let open: boolean;
  export let currentCandidateStatus: string;

  const dispatch = createEventDispatcher();
  let selectedStage: string = currentCandidateStatus;
  const updateStatus = () => {
    dispatch("updateCandidateStatus", {
      status: selectedStage,
    });

    open = false;
  };

  const options = ["New", "Screening", "Interviewing", "Offer", "Hired"];
</script>

<Menu position="right" bind:open>
  <span slot="menu_trigger" class="cursor-pointer z-50">
    <slot />
  </span>
  <div slot="menu_context" class="bg-white border border-gray-200 rounded-md">
    <div class="max-h-72 overflow-y-auto flex flex-col py-1">
      {#each options as option}
        <button
          on:click={() => (selectedStage = option)}
          class="text-gray-700 block focus:outline-transparent focus:bg-gray-100 focus:text-gray-900 py-2 space-x-6 rounded-md m-2 flex items-center justify-between px-2
              {option === selectedStage
            ? 'bg-blue-50'
            : 'hover:bg-gray-100 hover:text-gray-900'} "
        >
          <span class="font-normal block pl-2 text-left"> {option} </span>

          {#if option === selectedStage}
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

      <div class="border-t border-gray-100 px-4 py-2">
        <button
          class="text-blue-500 font-bold focus:outline-none pl-2"
          on:click={() => updateStatus()}
        >
          Move Stage
        </button>
      </div>
    </div>
  </div>
</Menu>
