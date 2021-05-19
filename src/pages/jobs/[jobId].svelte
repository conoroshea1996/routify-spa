<script>
  import { Button, Menu, ChipSet } from "hirehive-ui";
  import FilterDropDown from "$lib/Filters/FilterDropDown.svelte";
  import TextInput from "hirehive-ui/src/Inputs/TextInput.svelte";
  let jobActionMenu = false;
  export let jobId;

  let categoriesMenu = false;
  let locationsMenu = false;
  let ownersMenu = false;
  let stageMenu = false;

  let activeFilters = [];
  let categoryFitlers = [];
  let locationsFilter = [];
  let ownersFilter = [];
  let stagesFilter = [];

  const buildChipSet = (
    categoryFitlers,
    locationsFilter,
    ownersFilter,
    stagesFilter
  ) => {
    activeFilters = [
      ...categoryFitlers,
      ...locationsFilter,
      ...ownersFilter,
      ...stagesFilter,
    ];
  };

  $: buildChipSet(categoryFitlers, locationsFilter, ownersFilter, stagesFilter);

  $: console.log(activeFilters);

  const removeNonActiveFilter = (activeFilters) => {
    categoryFitlers = categoryFitlers.filter((c) => activeFilters.includes(c));
    locationsFilter = locationsFilter.filter((c) => activeFilters.includes(c));
    ownersFilter = ownersFilter.filter((c) => activeFilters.includes(c));
    stagesFilter = stagesFilter.filter((c) => activeFilters.includes(c));
  };

  const clearAll = () => {
    categoryFitlers = [];
    locationsFilter = [];
    ownersFilter = [];
    stagesFilter = [];
  };

  $: removeNonActiveFilter(activeFilters);
</script>

<div class="border-b bg-white  border-gray-200 w-full">
  <div
    class="mx-auto max-w-screen-2xl py-4  lg:flex lg:items-center lg:justify-between"
  >
    <div class="font-medium tracking-tight text-gray-500  flex text-xl">
      <div class="flex items-start mt-2">
        <a href="/index" class="pr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>
      </div>
      <div>
        <h1 class="text-gray-900">Backend Developer</h1>

        <div class="sm:flex space-x-6">
          <p class="mt-2 flex items-center text-sm text-gray-500">
            <svg
              class=" h-5 w-5 mr-2"
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
            Dublin, Ireland
          </p>

          <p class="mt-2 flex items-center text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
              <path
                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
              />
            </svg>
            Product
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-3">
      <Menu bind:open={jobActionMenu} position="right">
        <span slot="menu_trigger">
          <Button kind="white">Save as Draft</Button>
        </span>

        <div
          slot="menu_context"
          class="w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0">Edit</a
            >
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1">Duplicate</a
            >

            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1">Delete</a
            >
          </div>
        </div>
      </Menu>
      <Button kind="primary">Publish Job</Button>
    </div>
  </div>
</div>

<main class="max-w-screen-2xl mx-auto">
  <h1 class="text-5xl text-gray-700 text-center">Show Details for {jobId}</h1>

  <div class="hidden md:flex pb-4 justify-between">
    <div>
      <ChipSet bind:chipArray={activeFilters} />
    </div>

    <div class="flex text-gray-700 space-x-4">
      <div class="w-72">
        <TextInput placeholder="Search candidates" full>
          <div
            slot="leading"
            class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </TextInput>
      </div>
      <FilterDropDown
        filterName="Status"
        facets={["Hired", "Interviewing", "Screening"]}
        open={categoriesMenu}
        bind:activeFilters={categoryFitlers}
      />

      <FilterDropDown
        filterName="Tags"
        facets={["New", "Good", "Possible"]}
        open={locationsMenu}
        bind:activeFilters={locationsFilter}
      />

      <FilterDropDown
        filterName="Rating"
        facets={["5", "4", "3", "2", "1"]}
        open={ownersMenu}
        bind:activeFilters={ownersFilter}
      />

      <FilterDropDown
        filterName="Location"
        facets={["Ireland", "United Kingdom", "South Africa"]}
        open={stageMenu}
        bind:activeFilters={stagesFilter}
      />
    </div>
  </div>
</main>
