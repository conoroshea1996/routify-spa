<script lang="ts">
  import { Menu, Badge } from "hirehive-ui";
  import { jobBadgeType } from "../../utils/badgeType";

  import { slide } from "svelte/transition";
  import JobStatusPicker from "./JobStatusPicker.svelte";
  let publishMenu: boolean;
  let actionMenu: boolean;

  export let open: boolean;
  export let job: any;

  const updateJobStatus = (e: any) => {
    // update job status
    const newStatus = e.detail.status;
    job.status = newStatus;
  };
</script>

<li class="py-2">
  <div
    class="block bg-white border border-gray-200 rounded-md hover:border-blue-300"
  >
    <div class="px-4 py-4 flex items-center sm:px-6 border-b border-gray-100">
      <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
        <div class="flex items-start h-12">
          <button
            class="focus:outline-none p-0.5 text-gray-400 hover:bg-gray-50 hover:text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-300 rounded-md"
            on:click={() => (open = !open)}
          >
            <svg
              class="h-6 w-6 transform"
              class:open
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <a href="/jobs/{job.id}" class="truncate flex-1">
          <div class="flex flex-col">
            <h1 class="font-medium text-gray-900 truncate font-bold ml-4">
              {job.title}
            </h1>
            <div class="mt-2 flex ml-3">
              <div class="flex items-center text-sm text-gray-500">
                <!-- Heroicon name: solid/location-marker -->
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="capitalize">
                  {job.location}, {job.country} | {job.category}
                </p>
              </div>
            </div>
          </div>
        </a>
        <div class="mt-4 flex flex-shrink-0 sm:mt-0 sm:ml-5">
          <div class="ml-2 flex-shrink-0 flex items-center pr-4">
            <JobStatusPicker
              bind:open={publishMenu}
              currentJobStatus={job.status}
              on:updateJobStatus={(e) => updateJobStatus(e)}
            >
              <Badge kind={jobBadgeType(job.status)} size="large">
                {job.status}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
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
              </Badge>
            </JobStatusPicker>
          </div>
          <div class="flex overflow-hidden items-center -space-x-1">
            <img
              class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Dries Vincent"
            />

            <img
              class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Lindsay Walton"
            />

            <img
              class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Courtney Henry"
            />

            <img
              class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Tom Cook"
            />
          </div>

          <div class="flex items-center ml-4">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
          </div>

          <div class="flex items-center ml-4 text-gray-400">
            <Menu position="right" bind:open={actionMenu}>
              <button
                slot="menu_trigger"
                class="cursor-pointer z-50 rounded-md p-2 hover:text-gray-900 hover:bg-gray-100"
              >
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
              <div slot="menu_context">
                <div class="bg-white border border-gray-200 rounded-md p-2">
                  <button
                    on:click={() => console.log("edit")}
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left rounded-md"
                    role="menuitem"
                  >
                    Edit
                  </button>
                  <button
                    on:click={() => console.log("Duplicate")}
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left rounded-md"
                    role="menuitem"
                  >
                    Duplicate
                  </button>
                  <button
                    on:click={() => console.log("Delete")}
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left rounded-md"
                    role="menuitem"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    <dl
      class="grid grid-cols-2 gap-5 sm:grid-cols-7 transition-all {open
        ? 'h-full py-4'
        : 'h-0'}"
    >
      <div
        class=" bg-white text-center overflow-hidden  border-r border-gray-100 flex flex-col justify-between"
        class:text-gray-400={job.totalCandidates === 0}
        class:text-gray-700={job.totalCandidates !== 0}
      >
        {#if job.totalCandidates === 0}
          <dd class="mt-1 text-3xl  flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </dd>
        {:else}
          <dd class="mt-1 text-3xl">{job.totalCandidates}</dd>
        {/if}
        <dt class="text-sm font-medium  truncate">Total</dt>
      </div>

      <div
        class=" bg-white text-center overflow-hidden  border-r border-gray-100  flex flex-col justify-between"
        class:text-gray-400={job.newCandidates.count === 0}
        class:text-gray-700={job.newCandidates.count !== 0}
      >
        {#if job.newCandidates.count === 0}
          <dd class="mt-1 text-3xl  flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </dd>
        {:else}
          <dd class="mt-1 text-3xl  ">{job.newCandidates.count}</dd>
        {/if}
        <dt class="text-sm font-medium  truncate">New</dt>
      </div>

      <div
        class=" bg-white text-center overflow-hidden  border-r border-gray-100  flex flex-col justify-between"
        class:text-gray-400={job.screeningCandidates.count === 0}
        class:text-gray-700={job.screeningCandidates.count !== 0}
      >
        {#if job.screeningCandidates.count === 0}
          <dd class="mt-1 text-3xl  flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </dd>
        {:else}
          <dd class="mt-1 text-3xl  ">{job.screeningCandidates.count}</dd>
        {/if}
        <dt class="text-sm font-medium  truncate">Screening</dt>
      </div>

      <div
        class=" bg-white text-center overflow-hidden  border-r border-gray-100  flex flex-col justify-between"
        class:text-gray-400={job.interviewingCandidates.count === 0}
        class:text-gray-700={job.interviewingCandidates.count !== 0}
      >
        {#if job.interviewingCandidates.count === 0}
          <dd class="mt-1 text-3xl  flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </dd>
        {:else}
          <dd class="mt-1 text-3xl  ">{job.interviewingCandidates.count}</dd>
        {/if}
        <dt class="text-sm font-medium  truncate">Interviewing</dt>
      </div>

      <div
        class=" bg-white text-center overflow-hidden  border-r border-gray-100  flex flex-col justify-between"
        class:text-gray-400={job.offeredCandidates.count === 0}
        class:text-gray-700={job.offeredCandidates.count !== 0}
      >
        {#if job.offeredCandidates.count === 0}
          <dd class="mt-1 text-3xl  flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </dd>
        {:else}
          <dd class="mt-1 text-3xl  ">{job.offeredCandidates.count}</dd>
        {/if}
        <dt class="text-sm font-medium  truncate">Offered</dt>
      </div>

      <div
        class=" bg-white text-center overflow-hidden  border-r border-gray-100  flex flex-col justify-between"
        class:text-gray-400={job.hiredCandidates.count === 0}
        class:text-gray-700={job.hiredCandidates.count !== 0}
      >
        {#if job.hiredCandidates.count === 0}
          <dd class="mt-1 text-3xl  flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </dd>
        {:else}
          <dd class="mt-1 text-3xl  ">{job.hiredCandidates.count}</dd>
        {/if}
        <dt class="text-sm font-medium  truncate">Hired</dt>
      </div>

      <div
        class=" bg-white text-center overflow-hidden  border-r border-gray-100 text-gray-700 flex flex-col justify-between"
        class:text-gray-400={job.rejectedCandidates.count === 0}
        class:text-gray-700={job.rejectedCandidates.count !== 0}
      >
        {#if job.rejectedCandidates.count === 0}
          <dd class="mt-1 text-3xl  flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </dd>
        {:else}
          <dd class="mt-1 text-3xl  ">{job.rejectedCandidates.count}</dd>
        {/if}
        <dt class="text-sm font-medium  truncate">Rejected</dt>
      </div>
    </dl>
  </div>
</li>

<style>
  .open {
    transform: rotate(90deg);
  }
</style>
