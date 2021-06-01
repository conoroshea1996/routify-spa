<script lang="ts">
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
    toolTip,
    Modal,
  } from "hirehive-ui";
  import FilterDropDown from "$lib/Filters/FilterDropDown.svelte";
  import { jobs, jobNotes, jobActivities } from "../../stores/jobs";
  import { candidates } from "../../stores/candidates";
  import TextArea from "hirehive-ui/src/Inputs/TextArea.svelte";
  import SwitchFilterDropDown from "../../lib/Filters/SwitchFilterDropDown.svelte";
  import CandidateList from "../../lib/Candidates/CandidateList.svelte";
  import JobStatusPicker from "../../lib/Jobs/JobStatusPicker.svelte";
  import { writable } from "svelte/store";
  import Avatar from "../../lib/General/Avatar.svelte";

  import { hiringTeam } from "../../stores/jobs";
  export let jobId: string;
  const parsedJobId: number = parseInt(jobId);

  let deleteJobModal = false;
  let job: any = $jobs.find((j) => j.jobId === parsedJobId);

  let jobsCandidates = $candidates.filter((c) => c.jobId === parsedJobId);

  let jobActionMenu = false;
  let columnMenu = false;
  let jobStatusMenu = false;
  let statusMenu = false;
  let tagsMenu = false;
  let ratingsMenu = false;
  let locationsMenu = false;

  let activeFilters: string[] = [];
  let statusFilter: string[] = [];
  let tagsFilter: string[] = [];
  let ratingFilter: string[] = [];
  let locationFilter: string[] = [];
  let activeCandidatesOnly = false;

  const buildChipSet = (
    statusFilter: string[],
    tagsFilter: string[],
    ratingFilter: string[],
    locationFilter: string[]
  ) => {
    activeFilters = [
      ...statusFilter,
      ...tagsFilter,
      ...ratingFilter,
      ...locationFilter,
    ];
  };

  $: buildChipSet(statusFilter, tagsFilter, ratingFilter, locationFilter);

  const removeNonActiveFilter = (activeFilters: string[]) => {
    statusFilter = statusFilter.filter((c) => activeFilters.includes(c));
    tagsFilter = tagsFilter.filter((c) => activeFilters.includes(c));
    ratingFilter = ratingFilter.filter((c) => activeFilters.includes(c));
    locationFilter = locationFilter.filter((c) => activeFilters.includes(c));
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

  const deleteJob = () => {
    console.log(`delete job ${job.id}`);
  };

  const updateJobStatus = (e: any) => {
    const newStatus = e.detail.status;
    console.log(e, "Update Job Status");
    job.status = newStatus;
    jobStatusMenu = false;
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
</script>

<div class="border-b bg-white  border-gray-200 w-full">
  <div
    class="mx-auto max-w-screen-2xl px-4 py-4  lg:flex lg:items-center lg:justify-between"
  >
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
        {#each $hiringTeam as team}
          <Avatar
            firstName={team.firstName}
            lastName={team.lastName}
            profilePic={team.picUrl}
          />
        {/each}

        <button
          class="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-gray-100 bg-white"
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

      <div class="flex space-x-2">
        <Button kind="white">Edit</Button>
        <Button kind="white">Share</Button>
        <Button kind="white" on:click={() => openNotes()}>
          <span>Notes</span>

          <span
            class="bg-blue-100 text-blue-500 px-2 py-1  rounded-full text-xs flex items-center mx-1"
          >
            {$jobNotes.length}
          </span>
        </Button>
      </div>

      <Menu bind:open={jobActionMenu} position="right">
        <span slot="menu_trigger">
          <Button kind="white">
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
          </Button>
        </span>

        <div
          slot="menu_context"
          class="w-56 rounded-md  bg-white border border-gray-200 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1 w-full px-2 border-b border-gray-200" role="none">
            <button
              on:click={() => {
                jobSidepanel = true;
                jobActionMenu = false;
              }}
              class="group text-gray-200 w-full rounded-md px-4 py-2 text-sm flex items-center space-x-2 font-medium hover:bg-gray-50 hover:text-gray-700"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 group-hover:text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                  />
                </svg>
              </span>
              <span> Edit </span>
            </button>

            <button
              on:click={() => {
                jobSidepanel = true;
                jobActionMenu = false;
              }}
              class="group text-gray-200 w-full rounded-md px-4 py-2 text-sm flex items-center space-x-2 font-medium hover:bg-gray-50 hover:text-gray-700"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 group-hover:text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span> Notes </span>
            </button>

            <button
              on:click={() => openActivity()}
              class="group text-gray-700 w-full rounded-md px-4 py-2 text-sm flex items-center space-x-2 font-medium hover:bg-gray-50"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span> Activity </span>
            </button>

            <button
              class="group text-gray-200 w-full rounded-md px-4 py-2 text-sm flex items-center space-x-2 font-medium hover:bg-gray-50 hover:text-gray-700"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 group-hover:text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                  />
                </svg>
              </span>
              <span> Share </span>
            </button>

            <button
              class="group text-gray-700 w-full rounded-md px-4 py-2 text-sm flex items-center space-x-2 font-medium hover:bg-gray-50"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span> Notes </span>
            </button>

            <button
              class="group text-gray-700 w-full rounded-md px-4 py-2 text-sm flex items-center space-x-2 font-medium hover:bg-gray-50"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                  />
                  <path
                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                  />
                </svg>
              </span>
              <span> Reports </span>
            </button>
          </div>
          <div class="px-2 pb-1">
            <button
              on:click={() => openDeleteJobModal()}
              class="group text-gray-700 w-full rounded-md px-4 py-2 text-sm flex items-center space-x-2 font-medium hover:bg-gray-50"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
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
              <span> Delete </span>
            </button>
          </div>
        </div>
      </Menu>

      <JobStatusPicker
        bind:open={jobStatusMenu}
        currentJobStatus={job.status}
        on:updateJobStatus={(e) => updateJobStatus(e)}
      >
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
      </JobStatusPicker>
    </div>
  </div>
</div>

<div
  class="max-w-screen-2xl px-4 py-2 sm:flex sm:items-center sm:justify-between mx-auto"
>
  {#if selectedCandidateIds.length === 0}
    <div class="w-64">
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
    <div class="mt-3 sm:mt-0 sm:ml-4 flex items-center space-x-3">
      <button
        class="text-gray-700 hover:text-blue-500"
        on:click={() => clearAll()}
      >
        Clear all
      </button>

      <Button
        kind="white"
        size="large"
        on:click={() => (activeCandidatesOnly = !activeCandidatesOnly)}
      >
        <div class="flex items-center space-x-2">
          <input
            id=""
            name=""
            type="checkbox"
            value=""
            tabindex="-1"
            checked={activeCandidatesOnly}
            class="h-3.5 w-3.5 border-gray-300 text-blue-500 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:ring-1 s--5vtRSI_rRjS"
            aria-checked="true"
          />
          <span> Active only </span>
        </div>
      </Button>

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
            <p class="py-2">2 out {job.totalCandidates} results</p>
          {:else}
            <p class="py-2">{job.totalCandidates} results</p>
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
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <CandidateList
            candidates={jobsCandidates}
            bind:selectedCandidateIds
            {columnsToShow}
          />
        </div>
      </div>
    </div>
  </div>

  <h1 class="text-xs text-gray-400">Selected Ids {selectedCandidateIds}</h1>

  <Pagination numItems={jobsCandidates.length} current={1} perPage={5} />
</main>

<Sidepanel bind:open={jobSidepanel}>
  <div class="max-w-2xl w-screen h-screen">
    <TabsContainer bind:selectedTab={activeTabId}>
      <div class="h-full">
        <div class="border-b border-gray-200  w-full px-4">
          <TabBar class="-mb-px flex space-x-8">
            <Tab
              TabId={1}
              class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm {$activeTabId ===
              1
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500'}"
            >
              Notes
            </Tab>
            <Tab
              TabId={2}
              class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm {$activeTabId ===
              2
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500'}"
            >
              Activity
            </Tab>
            <Tab
              TabId={3}
              class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm {$activeTabId ===
              3
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500'}"
            >
              Share
            </Tab>
            <Tab
              TabId={4}
              class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm {$activeTabId ===
              4
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500'}"
            >
              Referral rewards
            </Tab>
          </TabBar>
        </div>

        <!-- Notes -->
        <TabPanel panelId={1} class="h-full">
          <ul class="space-y-3 h-3/4  overflow-y-auto py-2 px-4 bg-gray-50">
            {#each $jobNotes as jobNote}
              <li class="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                <article aria-labelledby="question-title-81614">
                  <div>
                    <div class="flex space-x-3">
                      <div class="min-w-0 flex-1">
                        <p class="font-medium text-gray-900">
                          {jobNote.userName}
                        </p>
                        <p class="text-sm text-gray-500">
                          {jobNote.dateCreated}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="my-4 text-sm text-gray-700 space-y-4">
                    {@html jobNote.note}
                  </div>
                  <div class="mt-6 flex justify-between space-x-8">
                    {#if jobNote.attachments.length > 0}
                      <div class="flex space-x-2">
                        {#each jobNote.attachments as attachment}
                          <button
                            class="relative download rounded-md pl-3 pr-4 py-3 flex items-center justify-between text-sm text-blue-500 bg-gray-100"
                          >
                            <div class="flex-1 flex items-center">
                              <!-- Heroicon name: solid/paper-clip -->
                              <svg
                                class="flex-shrink-0 h-5 w-5 text-blue-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <span
                                class="ml-2 flex-1 font-medium text-blue-500"
                              >
                                {attachment.fileName} ({attachment.sizeInKB} kb)
                              </span>
                              <div
                                class="ml-4 transition download-overlay hidden absolute right-0 top-0 bg-gray-100 h-full flex items-center px-2"
                              >
                                <span class="font-medium text-blue-500 ">
                                  Click here to download
                                </span>
                              </div>
                            </div>
                          </button>
                        {/each}
                      </div>
                    {/if}
                  </div>
                </article>
              </li>
            {/each}
          </ul>

          <div class="bg-white border-t border-gray-200">
            <div class="pb-3 pt-1 px-4">
              <form action="#">
                <div>
                  <TextArea
                    full
                    placeholder="Add a note, @mention users in notes..."
                    rows="4"
                    value="TODO ADD ACTION FOR @MENTIONS"
                  />
                </div>
                <div class=" flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <button class="p-3 bg-gray-100 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>

                    <button class="p-3 bg-gray-100 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>

                    <span class="flex space-x-2">
                      <CheckBox size="medium" label="Restricted" />

                      <span
                        class="cursor-pointer"
                        use:toolTip={{
                          position: "top",
                          text: "Only team members with permission can see this note.",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <Button kind="primary">Add Note</Button>
                </div>
              </form>
            </div>
          </div>
        </TabPanel>

        <!-- Activity -->
        <TabPanel panelId={2} class="h-full">
          <!-- Activity Feed -->

          <div class=" flex bg-gray-50 h-full">
            <ul class="py-8 px-12 w-full activity-list">
              {#each $jobActivities as jobActivity}
                {#if jobActivity.activities.length > 0}
                  {#each jobActivity.activities as activity}
                    <li>
                      <div class="relative pb-8">
                        <span
                          class="absolute top-4 line left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                        <div class="relative flex space-x-3">
                          <div>
                            <span
                              class="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center ring-8 ring-white"
                            >
                              <!-- Heroicon name: solid/check -->
                              <svg
                                class="w-5 h-5 text-white"
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
                          </div>
                          <div
                            class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                          >
                            <div>
                              <p class="text-sm text-gray-500">
                                {activity.message}
                              </p>
                            </div>
                            <div
                              class="text-right text-sm whitespace-nowrap text-gray-500"
                            >
                              <time datetime="2020-09-28"
                                >{@html activity.date}</time
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  {/each}
                {/if}
              {/each}
            </ul>
          </div>
        </TabPanel>

        <!-- Share -->
        <TabPanel panelId={3} />

        <TabPanel panelId={4} />
      </div>
    </TabsContainer>
  </div>
</Sidepanel>

<Modal bind:open={deleteJobModal}>
  <div slot="content">
    <div class="sm:flex sm:items-start max-w-xl px-4">
      <div
        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
      >
        <!-- Heroicon name: outline/exclamation -->
        <svg
          class="h-6 w-6 text-red-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <div class="mt-3  sm:mt-0 sm:ml-4 text-left">
        <h3 class="text-lg leading-6 text-gray-900" id="modal-title">
          Delete <span class="font-medium"> {job.title}</span> job
        </h3>
        <div class="mt-2">
          <p class="text-gray-900 py-2">
            There are {job.totalCandidates} applications for this job.
          </p>
          <p class="text-gray-500 py-2">
            Applications will not be deleted and will remain linked to the job.
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-end px-4">
      <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          on:click={() => deleteJob()}
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Delete Job
        </button>
        <Button kind="white" on:click={() => (deleteJobModal = false)}
          >Cancel</Button
        >
      </div>
    </div>
  </div>
</Modal>

<style global>
  .highlight-txt {
    @apply text-blue-500;
  }

  .download:hover .download-overlay {
    @apply flex;
  }

  .activity-list li:last-child div {
    @apply pb-0;
  }
  .activity-list li:last-child div .line {
    @apply hidden;
  }
</style>
