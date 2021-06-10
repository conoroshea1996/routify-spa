<script lang="ts">
  import { Button, ChipSet, TextInput, Pagination } from "hirehive-ui";
  import FilterDropDown from "$lib/Filters/FilterDropDown.svelte";
  import { candidates } from "../../stores/candidates";
  import SwitchFilterDropDown from "../../lib/Filters/SwitchFilterDropDown.svelte";
  import CandidateList from "../../lib/Candidates/CandidateList.svelte";
  import { writable } from "svelte/store";

  let deleteJobModal = false;

  let jobActionMenu = false;
  let columnMenu = false;
  let jobStatusMenu = false;
  let statusMenu = false;
  let tagsMenu = false;
  let ratingsMenu = false;
  let locationsMenu = false;
  let refferredMenu = false;

  let activeFilters: string[] = [];
  let statusFilter: string[] = [];
  let tagsFilter: string[] = [];
  let ratingFilter: string[] = [];
  let locationFilter: string[] = [];
  let referredFilter: string[] = [];

  const buildChipSet = (
    statusFilter: string[],
    tagsFilter: string[],
    ratingFilter: string[],
    locationFilter: string[],
    referredFilter: string[]
  ) => {
    activeFilters = [
      ...statusFilter,
      ...tagsFilter,
      ...ratingFilter,
      ...locationFilter,
      ...referredFilter,
    ];
  };

  $: buildChipSet(
    statusFilter,
    tagsFilter,
    ratingFilter,
    locationFilter,
    referredFilter
  );

  const removeNonActiveFilter = (activeFilters: string[]) => {
    statusFilter = statusFilter.filter((c) => activeFilters.includes(c));
    tagsFilter = tagsFilter.filter((c) => activeFilters.includes(c));
    ratingFilter = ratingFilter.filter((c) => activeFilters.includes(c));
    locationFilter = locationFilter.filter((c) => activeFilters.includes(c));
    referredFilter = referredFilter.filter((c) => activeFilters.includes(c));
  };

  $: removeNonActiveFilter(activeFilters);

  let checkAll;
  let selectedCandidateIds: string[] = [];
  let activeTabId = writable(1);

  const clearAll = () => {
    statusFilter = [];
    tagsFilter = [];
    ratingFilter = [];
    locationFilter = [];
    referredFilter = [];
  };

  const unSelectCandidates = () => {
    selectedCandidateIds = [];
    checkAll = false;
  };
  let jobSidepanel = false;

  const openNotes = () => {
    jobActionMenu = false;
    jobSidepanel = true;
    $activeTabId = 1;
  };

  const openActivity = () => {
    jobActionMenu = false;
    jobSidepanel = true;
    $activeTabId = 2;
  };

  const openDeleteJobModal = () => {
    jobActionMenu = false;
    deleteJobModal = true;
  };

  let allColumns = [
    "Name",
    "Current title",
    "Status",
    "Sourced",
    "Tags",
    "Applications",
    "Rating",
  ];

  let columnsToShow = allColumns;

  let hasSearch: boolean;
  let searchQuery: string = "";

  const hasActiveSearch = (
    activeFilters: string[],
    searchQuery: string
  ): boolean => {
    return activeFilters.length > 0 || searchQuery.length > 0;
  };

  $: hasSearch = hasActiveSearch(activeFilters, searchQuery);
</script>

<div>
  <div
    class="max-w-screen-2xl px-4 py-2 sm:flex sm:items-center sm:justify-between mx-auto"
  >
    {#if selectedCandidateIds.length === 0}
      <div class="w-64">
        <TextInput placeholder="search jobs..." full bind:value={searchQuery}>
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
      <div class="mt-3 sm:mt-0 sm:ml-4 flex items-center space-x-3">
        <button
          class="text-gray-700 hover:text-blue-500"
          on:click={() => clearAll()}
        >
          Clear all
        </button>

        <FilterDropDown
          filterName="Status"
          facets={["Hired", "Interviewing", "Screening"]}
          open={statusMenu}
          bind:activeFilters={statusFilter}
        />

        <FilterDropDown
          filterName="Tags"
          facets={["New", "Good", "Possible"]}
          open={tagsMenu}
          bind:activeFilters={tagsFilter}
        />

        <FilterDropDown
          filterName="Rating"
          facets={["5", "4", "3", "2", "1"]}
          open={ratingsMenu}
          bind:activeFilters={ratingFilter}
        />

        <FilterDropDown
          filterName="Referred"
          facets={["Referred Only"]}
          open={refferredMenu}
          bind:activeFilters={referredFilter}
        />

        <FilterDropDown
          filterName="Location"
          facets={["Ireland", "United Kingdom", "South Africa"]}
          open={locationsMenu}
          bind:activeFilters={locationFilter}
        />
      </div>
    {:else}
      <div
        class="bg-white font-medium flex justify-between w-full border border-gray-200  px-4 py-4 rounded-md"
      >
        <div class="flex text-gray-900 font-medium">
          <div class="flex items-center space-x-2">
            <span>
              {selectedCandidateIds.length} candidates selected
            </span>
            <svg
              class="mr-1.5 h-2 w-2 text-gray-400"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
          </div>
          <button
            class="font-medium text-gray-900 px-2"
            on:click={() => unSelectCandidates()}
          >
            Unselect
          </button>
        </div>

        <div class="flex-1">
          <div class="flex justify-end space-x-2">
            <Button kind="white">
              <span class="mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
              </span>

              <span class="mx-1"> Send Email </span>
            </Button>

            <Button kind="white">
              <span class="mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-500"
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
              </span>

              <span class="mx-1"> Change Status</span>
            </Button>

            <Button kind="white">
              <span class="mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
              </span>

              <span class="mx-1"> Share Candidate </span>
            </Button>

            <Button kind="white">
              <span class="mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>

              <span class="mx-1"> Delete </span>
            </Button>
          </div>
        </div>

        <div />
      </div>
    {/if}
  </div>
  <div class="max-w-screen-2xl mx-auto px-2">
    <div class="py-2 grid grid-cols-6 px-2">
      <div class="col-span-5">
        <ChipSet bind:chipArray={activeFilters} />
      </div>
      <div
        class="text-gray-500 px-2 col-span-1 flex items-start justify-end px-4"
      >
        {#if selectedCandidateIds.length <= 0}
          <div class="flex items-center space-x-2">
            {#if activeFilters.length > 0}
              <p class="py-2">2 out {$candidates.length} results</p>
            {:else}
              <p class="py-2">{$candidates.length} results</p>
            {/if}

            <SwitchFilterDropDown
              bind:open={columnMenu}
              bind:activeColumns={columnsToShow}
              columns={allColumns}
            />
          </div>
        {/if}
      </div>
    </div>
  </div>
  <main class="max-w-screen-2xl mx-auto flex flex-col">
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="py-2 align-middle inline-block min-w-full px-4">
          <CandidateList
            candidates={$candidates}
            bind:selectedCandidateIds
            {hasSearch}
            {columnsToShow}
            on:clearFilters={() => clearAll()}
          />
        </div>
      </div>
    </div>
  </main>
  {#if $candidates.length > 0}
    <Pagination numItems={$candidates.length} current={1} perPage={30} />
  {/if}
</div>
