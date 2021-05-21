<script>
  import {
    Button,
    Menu,
    ChipSet,
    TextInput,
    Pagination,
    Badge,
    CheckBox,
    Sidepanel,
    TabsContainer,
    TabBar,
    Tab,
    TabPanel,
  } from "hirehive-ui";
  import FilterDropDown from "$lib/Filters/FilterDropDown.svelte";
  import { jobs } from "../../stores/jobs";
  import { candidates } from "../../stores/candidates";
  import { candidateBadgeType } from "../../utils/badgeType";
  import Rating from "../../lib/Rating/rating.svelte";
  import { url } from "@roxi/routify";
  export let jobId;
  jobId = parseInt(jobId);

  let job = $jobs.find((j) => j.jobId === jobId);

  let jobsCandidates = $candidates.filter((c) => c.jobId === jobId);

  console.log(jobsCandidates);

  let jobActionMenu = false;
  let jobStatusMenu = false;
  let statusMenu = false;
  let tagsMenu = false;
  let ratingsMenu = false;
  let locationsMenu = false;

  let activeFilters = [];
  let statusFilter = [];
  let tagsFilter = [];
  let ratingFilter = [];
  let locationFilter = [];

  const buildChipSet = (
    statusFilter,
    tagsFilter,
    ratingFilter,
    locationFilter
  ) => {
    activeFilters = [
      ...statusFilter,
      ...tagsFilter,
      ...ratingFilter,
      ...locationFilter,
    ];
  };

  $: buildChipSet(statusFilter, tagsFilter, ratingFilter, locationFilter);

  const removeNonActiveFilter = (activeFilters) => {
    statusFilter = statusFilter.filter((c) => activeFilters.includes(c));
    tagsFilter = tagsFilter.filter((c) => activeFilters.includes(c));
    ratingFilter = ratingFilter.filter((c) => activeFilters.includes(c));
    locationFilter = locationFilter.filter((c) => activeFilters.includes(c));
  };

  $: removeNonActiveFilter(activeFilters);

  let checkAll;
  let selectedCandidates;

  const selectAll = (checkAll) => {
    if (checkAll) {
      selectedCandidates = jobsCandidates.map((c) => c.id);
    } else {
      selectedCandidates = [];
    }
  };

  $: selectAll(checkAll);

  let jobSidepanel = false;
</script>

<div class="border-b bg-white  border-gray-200 w-full">
  <div class="mx-auto  px-4 py-4  lg:flex lg:items-center lg:justify-between">
    <div class="font-medium tracking-tight text-gray-500  flex text-xl">
      <div class="flex items-start mt-2">
        <a href="/index" class="pr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-5"
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
        <h1 class="text-gray-900">{job.title}</h1>

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
            {job.location}, {job.country}
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
            {job.category}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-3 items-center">
      <div class="inline-block h-6 w-6 relative">
        <img
          class=" rounded-full ring-2 ring-gray-100"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Dries Vincent"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 text-yellow-400 absolute top-0 -right-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      </div>
      <div class="flex items-center overflow-hidden -space-x-1">
        <img
          class="inline-block h-6 w-6 rounded-full ring-2 ring-gray-100"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Dries Vincent"
        />

        <img
          class="inline-block h-6 w-6 rounded-full ring-2 ring-gray-100"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Lindsay Walton"
        />

        <img
          class="inline-block h-6 w-6 rounded-full ring-2 ring-gray-100"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Courtney Henry"
        />

        <img
          class="inline-block h-6 w-6 rounded-full ring-2 ring-gray-100"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Tom Cook"
        />

        <button
          class="flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-gray-100 bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            />
          </svg>
        </button>
      </div>

      <Menu bind:open={jobActionMenu} position="right">
        <span slot="menu_trigger">
          <Button kind="white">
            <span class="mx-1"> Actions </span>
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
              href={$url("/jobs/create/index", { jobId: job.id })}
              class="text-gray-700 block px-4 py-2 text-sm">Edit</a
            >
            <button
              on:click={() => {
                jobSidepanel = true;
                jobActionMenu = false;
              }}
              class="text-gray-700 block px-4 py-2 text-sm">Notes</button
            >
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              id="menu-item-1">Duplicate</a
            >

            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              id="menu-item-1">Delete</a
            >
          </div>
        </div>
      </Menu>

      <Menu bind:open={jobStatusMenu} position="right">
        <span slot="menu_trigger">
          <Button kind="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="mx-1 ml-2"> {job.status}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-5 mx-1 text-white"
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
              id="menu-item-0">Slots</a
            >
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1">Slots</a
            >

            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1">Slots</a
            >
          </div>
        </div>
      </Menu>
    </div>
  </div>
</div>

<main class=" px-4 mx-auto flex flex-col">
  <div class="hidden md:flex pb-4 justify-between py-8">
    <div>
      <ChipSet bind:chipArray={activeFilters} />
    </div>

    <div class="flex text-gray-700 space-x-4">
      <div class="w-96">
        <TextInput placeholder="Search candidates" full size="large">
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
        filterName="Location"
        facets={["Ireland", "United Kingdom", "South Africa"]}
        open={locationsMenu}
        bind:activeFilters={locationFilter}
      />
    </div>
  </div>

  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-white">
              <tr>
                <th
                  scope="col"
                  class="px-6 w-1/4 py-3 text-left text-xs font-medium text-gray-500  tracking-wider flex items-center space-x-2"
                >
                  <CheckBox size="medium" bind:checked={checkAll} />
                  <span>Name </span>
                </th>
                <th
                  scope="col"
                  class="px-6 w-1/4 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                >
                  Current title
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                >
                  Sourced
                </th>

                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                >
                  Tags
                </th>

                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                >
                  Rating
                </th>

                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
                >
                  Applications
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each jobsCandidates as candidate}
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div
                        class="text-sm font-medium text-gray-900 flex items-center space-x-2"
                      >
                        <CheckBox
                          size="medium"
                          value={candidate.id}
                          bind:group={selectedCandidates}
                        />
                        <span> {candidate.fullName}</span>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">
                      {candidate.currentTitle}
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap">
                    <Badge kind={candidateBadgeType(candidate.parentStatusId)}
                      >{candidate.statusName}</Badge
                    >
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex flex-col"
                  >
                    <span>{candidate.dateApplied}</span>
                    <span class="text-xs"> get date from now to apply </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Badge kind="gray">Good</Badge>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Rating rating={candidate.rating} />
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"
                  >
                    {candidate.otherApplications.length}
                  </td>
                </tr>
              {/each}

              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <h1 class="text-xs text-gray-400">Selected Ids {selectedCandidates}</h1>

  <div class="absolute bottom-0 w-full  px-4 mx-auto my-4">
    <Pagination numItems={jobsCandidates.length} current={1} perPage={5} />
  </div>
</main>

<Sidepanel bind:open={jobSidepanel}>
  <TabsContainer>
    <TabBar>
      <Tab TabId={1} let:isActive>
        <div
          class="p-2 border-b-3 z-50 mt-1 focus:outline-transparent"
          class:border-blue-500={isActive}
        >
          Notes
        </div>
      </Tab>
      <Tab TabId={2} let:isActive>
        <div
          class="p-2 border-b-3 z-50 mt-1 focus:outline-transparent"
          class:border-blue-500={isActive}
        >
          Email
        </div>
      </Tab>
    </TabBar>

    <TabPanel panelId={1}>
      <div
        class="my-2 mx-auto sm:px-6 lg:px-8 border border-dashed border-gray-400 h-32"
      >
        <h1 class="text-xl text-gray-500">Panel 1</h1>
      </div>
    </TabPanel>

    <TabPanel panelId={2}>
      <div
        class=" my-2 mx-auto sm:px-6 lg:px-8 border border-dashed border-gray-400 h-32"
      >
        <h1 class="text-xl text-gray-500">Panel 2</h1>
      </div>
    </TabPanel>
  </TabsContainer>
</Sidepanel>
