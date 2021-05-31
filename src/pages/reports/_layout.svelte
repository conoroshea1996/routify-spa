<script>
  import { isActive } from "@roxi/routify";

  import { Button, Menu } from "hirehive-ui";
  import ReportTransistion from "../../lib/Reports/ReportTransistion.svelte";
  let jobsFilterMenu = false;
  let dateFilterMenu = false;

  let urls = [
    {
      name: "Overview",
      url: "/reports/index",
    },
    {
      name: "Pipeline",
      url: "/reports/pipeline",
    },
    {
      name: "Time to hire",
      url: "/reports/timetohire",
    },
    {
      name: "Demographics",
      url: "/reports/demographics",
    },
    {
      name: "Live summary",
      url: "#",
    },
  ];
</script>

<div class="border-b border-gray-200">
  <div
    class="max-w-screen-2xl px-4 py-2 sm:flex sm:items-center sm:justify-between mx-auto"
  >
    <h3 class="text-lg leading-6 font-bold text-gray-500">Reports</h3>
    <div class="mt-3 sm:mt-0 sm:ml-4">
      <Button kind="primary" href="/jobs/create/index">
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span> Export Data </span>
      </Button>
    </div>
  </div>
</div>

<div class="max-w-screen-2xl mx-auto my-4 px-4">
  <div class="flex justify-between">
    <div>
      <nav class="flex space-x-8 focus:outline-none">
        {#each urls as url}
          <a
            href={url.url}
            class="inline-flex justify-center items-center text-gray-500 font-medium border border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md"
            disabled="false"
            class:bg-blue-100={$isActive(url.url)}
            class:text-blue-500={$isActive(url.url)}
          >
            {url.name}
          </a>
        {/each}
      </nav>
    </div>
    <div class="flex space-x-3">
      <Menu position="left" bind:open={jobsFilterMenu}>
        <button slot="menu_trigger" class="cursor-pointer z-30">
          <Button kind="white">
            <span class="flex justify-between items-center space-x-2">
              <span>All jobs</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-5  text-gray-400"
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
            </span>
          </Button>
        </button>
        <div slot="menu_context">
          <div class="bg-white shadow-md rounded-md">
            <button
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem">Everything is a slot</button
            >
            <button
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem">Slots</button
            >
          </div>
        </div>
      </Menu>

      <Menu position="left" bind:open={dateFilterMenu}>
        <button slot="menu_trigger" class="cursor-pointer z-30">
          <Button kind="white">
            <span class="flex justify-between items-center space-x-2">
              <span>Last 30 days</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-5  text-gray-400"
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
            </span>
          </Button>
        </button>
        <div slot="menu_context">
          <div class="bg-white shadow-md rounded-md">
            <button
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem">Everything is a slot</button
            >
            <button
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem">Slots</button
            >
          </div>
        </div>
      </Menu>
    </div>
  </div>
</div>

<main class="max-w-screen-2xl px-4 mx-auto my-4">
  <slot decorator={ReportTransistion} />
</main>
