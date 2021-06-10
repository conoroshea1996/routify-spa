<script lang="ts">
  import { createCustomArrayStore, customSet } from "../stores/Todo";
  import { useSWR, createSWR } from "sswr";
  import { readable } from "svelte/store";

  import { jobs } from "../stores/jobs";
  import TextInput from "hirehive-ui/src/Inputs/TextInput.svelte";
  import FilterDropDown from "../lib/Filters/FilterDropDown.svelte";
  import JobItem from "../lib/Jobs/JobItem.svelte";

  import { ChipSet, Button, Pagination } from "hirehive-ui";

  const { data, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    {
      loadInitialCache: true,
    }
  );
  let numberStores = createCustomArrayStore<number>();

  let value = customSet<number>(0);
  const valueStates = value.states;
  const hg = () => {
    $value = Math.random();
  };

  let fsd: number = 20;
  const time = () => {
    return readable(20, function start(set) {
      const interval = setInterval(() => {
        let x = fsd--;
        set(x);
      }, 1000);

      return function stop() {
        clearInterval(interval);
      };
    });
  };

  createSWR({
    dedupingInterval: 20,
  });

  let validateTime: any;
  const updateTitle = (data: Array<any>, id: number, newTitle: string) => {
    const itemToUpdate = data.find((c) => c.id === id);
    itemToUpdate.title = newTitle;
    mutate((c: any) => (c = data), { revalidate: false });
    validateTime = time();
  };

  let currentPage = 1;

  let categoriesMenu = false;
  let locationsMenu = false;
  let ownersMenu = false;
  let stageMenu = false;

  let activeFilters: string[] = [];
  let categoryFitlers: string[] = [];
  let locationsFilter: string[] = [];
  let ownersFilter: string[] = [];
  let stagesFilter: string[] = [];

  const buildChipSet = (
    categoryFitlers: string[],
    locationsFilter: string[],
    ownersFilter: string[],
    stagesFilter: string[]
  ) => {
    activeFilters = [
      ...categoryFitlers,
      ...locationsFilter,
      ...ownersFilter,
      ...stagesFilter,
    ];
  };

  $: buildChipSet(categoryFitlers, locationsFilter, ownersFilter, stagesFilter);

  const removeNonActiveFilter = (activeFilters: string[]) => {
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

<div class="border-b border-gray-200">
  <div
    class="max-w-screen-2xl px-4 py-2 sm:flex sm:items-center sm:justify-between mx-auto"
  >
    <div class="flex space-x-2 sm:w-64">
      <div class="flex-1">
        <TextInput placeholder="search jobs..." full>
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
      <div class="h-full sm:hidden flex items-center justify-between space-x-3">
        <Button kind="primary" href="/jobs/create/index" size="small">
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
          <span> New Job </span>
        </Button>
      </div>
    </div>

    <div class="mt-3 hidden sm:ml-4 sm:flex items-center space-x-3">
      <button
        class="text-gray-700 hover:text-blue-500"
        on:click={() => clearAll()}
      >
        Clear all
      </button>

      <FilterDropDown
        filterName="Categories"
        facets={["Tech", "Sales", "HR", "A very long facet"]}
        open={categoriesMenu}
        bind:activeFilters={categoryFitlers}
      />

      <FilterDropDown
        filterName="Locations"
        facets={[
          "Ireland",
          "United Kingdom",
          "Germany",
          "United States",
          "Australia",
        ]}
        open={locationsMenu}
        bind:activeFilters={locationsFilter}
      />

      <FilterDropDown
        filterName="Owners"
        facets={["Dave", "Jack", "Max"]}
        open={ownersMenu}
        bind:activeFilters={ownersFilter}
      />

      <FilterDropDown
        filterName="Stages"
        facets={["Draft", "Interal", "Published"]}
        open={stageMenu}
        bind:activeFilters={stagesFilter}
      />

      <div class="relative h-full flex items-center justify-between space-x-3">
        <div class="h-4 w-0.5 bg-gray-200" />
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
          <span> New Job </span>
        </Button>
      </div>
    </div>
  </div>
</div>

<div>
  <div class="max-w-screen-2xl mx-auto">
    <div class="py-2 grid grid-cols-6 px-2">
      <div class="col-span-5">
        <ChipSet bind:chipArray={activeFilters} />
      </div>
      <div
        class="text-gray-500 px-2 col-span-1 flex items-start justify-end px-4"
      >
        <p class="py-2">3 out of 23 results</p>
      </div>
    </div>
    <div class="px-4">
      <ul>
        {#each $jobs as job}
          <JobItem {job} open={job.status === "Published"} />
        {/each}
      </ul>
    </div>

    <Pagination bind:current={currentPage} numItems={50} perPage={3} />
  </div>
</div>
