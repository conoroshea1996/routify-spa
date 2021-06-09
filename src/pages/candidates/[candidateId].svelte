<script lang="ts">
  import {
    Badge,
    Button,
    TabsContainer,
    TabBar,
    Tab,
    TabPanel,
  } from "hirehive-ui";
  import Activities from "../../lib/Activites/Activities.svelte";
  import CandidateStatusPicker from "../../lib/Candidates/CandidateStatusPicker.svelte";
  import Tags from "../../lib/Candidates/Tags.svelte";
  import EmailSender from "../../lib/Inbox/EmailSender.svelte";
  import RatingFull from "../../lib/Rating/RatingFull.svelte";
  import { candidateTags } from "../../stores/tags";

  import { candidates, activities } from "../../stores/candidates";

  export let candidateId: string;
  const parsedCandidateId = parseInt(candidateId);

  const candidate: any = $candidates.find((c) => c.id === parsedCandidateId);

  let otherApplications: any[] = candidate.otherApplications;
  let candidateStatusMenu = false;

  const activeApplication = {
    jobId: candidate.jobId,
    jobTitle: candidate.jobTitle,
    personApplicationId: candidate.id,
    date: candidate.dateApplied,
    parentStatusId: candidate.parentStatusId,
    statusId: candidate.statusId,
    statusName: candidate.statusName,
    active: true,
    canView: true,
  };

  otherApplications = [...otherApplications, activeApplication];

  let tagsMenu = false;

  let tags: any[] = [];
</script>

<!-- 3 column wrapper -->
<div class="flex-grow w-full mx-auto lg:flex bg-green-500">
  <!-- Left sidebar & main wrapper -->
  <div class="flex-1 min-w-0 xl:flex">
    <div
      class="border-b border-gray-200  xl:flex-shrink-0 xl:w-64 border xl:border-gray-200 bg-gray-50"
    >
      <div class="h-full">
        <!-- Start left column area -->
        <div class="h-full relative" style="min-height: 12rem;">
          <div class="p-6 bg-white border-gray-100 border-b">
            <h1 class="text-gray-900 text-xl font-bold">Candidates</h1>
          </div>

          <ul class="divide-y divide-gray-100">
            {#if otherApplications.length > 0}
              {#each otherApplications as otherApplication}
                <li
                  class="p-6 flex justify-between items-center {otherApplication.active
                    ? 'bg-yellow-100'
                    : 'bg-gray-50'}"
                >
                  <span class="font-medium text-gray-900">
                    {candidate.fullName}
                  </span>
                  <span>
                    <Badge size="large" kind="gray">
                      {otherApplication.statusName}
                    </Badge>
                  </span>
                </li>
              {/each}
            {/if}
          </ul>
        </div>
        <!-- End left column area -->
      </div>
    </div>

    <div class="bg-gray-50 lg:min-w-0 lg:flex-1">
      <div class="h-full">
        <!-- Start main area-->
        <div class="relative h-full flex flex-col" style="min-height: 36rem;">
          <div
            class="border-b bg-gray-50 flex-shrink  border-gray-200 w-full px-6"
          >
            <div class="mx-auto py-2">
              <div class="font-medium tracking-tight text-gray-500 text-xl">
                <button class="flex items-center space-x-2 mt-2">
                  <span class="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                  </span>
                  <span class="text-gray-900">Back to search</span>
                </button>
              </div>

              <div class="lg:flex lg:items-center lg:justify-between px-2">
                <div class="flex-1 min-w-0 items-center my-2">
                  <h2
                    class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                  >
                    {candidate.fullName}
                  </h2>
                  <div
                    class=" flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6 pt-4"
                  >
                    <div
                      class=" flex items-center text-sm text-gray-500 font-medium"
                    >
                      <span>{candidate.email}</span>
                    </div>
                    <div class=" flex items-center text-sm text-gray-500">
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
                      {candidate.currentLocation}
                    </div>

                    <div class=" flex items-center text-sm text-gray-500">
                      {tags}
                      <Tags
                        bind:open={tagsMenu}
                        autoComplete={candidateTags}
                        autoCompleteKey={"name"}
                        onlyAutocomplete={false}
                        bind:tags
                      >
                        <button
                          class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          Large
                        </button>
                      </Tags>
                    </div>
                    <div
                      class="flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 items-center"
                    >
                      <RatingFull
                        rating={candidate.rating}
                        on:rating={(e) => console.log(e)}
                      />
                    </div>
                  </div>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4 space-x-4">
                  <Button kind="white">
                    <span class="mx-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span class="mx-1">Reject</span>
                  </Button>

                  <Button kind="secondary">
                    <span class="mx-1">Schedule interview</span>
                    <span class="mx-1">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                  </Button>

                  <CandidateStatusPicker
                    bind:open={candidateStatusMenu}
                    on:updateCandidateStatus={(e) => console.log(e)}
                    currentCandidateStatus={candidate.statusName}
                  >
                    <Button kind="primary">
                      <span class="mx-1 capitalize">
                        Stage: {candidate.statusName}
                      </span>
                      <span class="mx-1">
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
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </Button>
                  </CandidateStatusPicker>

                  <Button kind="white" size="small">
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
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex-grow w-full  xl:px-8 lg:flex">
            <div class="flex-1 min-w-0 xl:flex">
              <div
                class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-96 xl:border-r xl:border-gray-200"
              >
                <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                  <!-- Start left column area -->
                  <div class="h-full relative" style="min-height: 12rem;">
                    <div class="absolute inset-0">
                      <div>
                        <h1 class="font-bold text-gray-900">Notes</h1>
                        <div class="bg-white">
                          <div class="px-4 py-12">
                            <!-- Content goes here -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End left column area -->
                </div>
              </div>

              <div class="lg:min-w-0 lg:flex-1">
                <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
                  <!-- Start main area-->
                  <div class="relative h-full" style="min-height: 36rem;">
                    <div class="absolute inset-0">
                      <TabsContainer>
                        <TabBar class="w-full mb-4">
                          <Tab TabId={1} let:isActive>
                            <span
                              class="inline-flex justify-center items-center  font-medium border border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md
                            {isActive
                                ? 'bg-blue-100 text-blue-500'
                                : 'text-gray-500'}"
                              class:button-secondary={isActive}
                            >
                              Application
                            </span>
                          </Tab>
                          <Tab TabId={2} let:isActive>
                            <span
                              class="inline-flex justify-center items-center  font-medium border border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md
                            {isActive
                                ? 'bg-blue-100 text-blue-500'
                                : 'text-gray-500'}"
                              class:button-secondary={isActive}
                            >
                              Follow up Questions
                            </span>
                          </Tab>
                          <Tab TabId={3} let:isActive>
                            <span
                              class="inline-flex justify-center items-center  font-medium border border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md
                            {isActive
                                ? 'bg-blue-100 text-blue-500'
                                : 'text-gray-500'}"
                              class:button-secondary={isActive}
                            >
                              Feedback
                            </span>
                          </Tab>
                          <Tab TabId={4} let:isActive>
                            <span
                              class="inline-flex justify-center items-center  font-medium border border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md
                            {isActive
                                ? 'bg-blue-100 text-blue-500'
                                : 'text-gray-500'}"
                              class:button-secondary={isActive}
                            >
                              Activity
                            </span>
                          </Tab>
                          <Tab TabId={5} let:isActive>
                            <span
                              class="inline-flex justify-center items-center  font-medium border border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md
                            {isActive
                                ? 'bg-blue-100 text-blue-500'
                                : 'text-gray-500'}"
                              class:button-secondary={isActive}
                            >
                              Interviews
                            </span>
                          </Tab>
                          <Tab TabId={6} let:isActive>
                            <span
                              class="inline-flex justify-center items-center  font-medium border border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md
                            {isActive
                                ? 'bg-blue-100 text-blue-500'
                                : 'text-gray-500'}"
                              class:button-secondary={isActive}
                            >
                              Email
                            </span>
                          </Tab>
                        </TabBar>

                        <TabPanel panelId={1}>
                          <div class="flex flex-col space-y-6">
                            {#if candidate.coverLetter}
                              <div
                                class="bg-white border border-gray-200 p-5 rounded-md"
                              >
                                <h1 class="text-gray-900 font-bold py-2">
                                  Cover Letter
                                </h1>

                                <p class="text-gray-400 py-4">
                                  {@html candidate.coverLetter}
                                </p>

                                <button class="text-blue-500">
                                  Read More
                                </button>
                              </div>
                            {/if}

                            {#if candidate.coverLetter}
                              <div
                                class="bg-white border border-gray-200 p-5 rounded-md"
                              >
                                <h1 class="text-gray-900 font-bold py-2">
                                  CV/ Resume
                                </h1>

                                <p class="text-gray-400 py-4">
                                  {@html candidate.coverLetter}
                                </p>

                                <button class="text-blue-500">
                                  Read More
                                </button>
                              </div>
                            {/if}
                          </div>
                        </TabPanel>

                        <TabPanel panelId={2}>
                          <div
                            class=" my-2 mx-auto sm:px-6 lg:px-8 border border-dashed border-gray-400 h-32"
                          />
                        </TabPanel>

                        <TabPanel panelId={3}>
                          <div
                            class=" my-2 mx-auto sm:px-6 lg:px-8 border border-dashed border-gray-400 h-32"
                          >
                            <h1 class="text-xl text-gray-500">Feedback</h1>
                          </div>
                        </TabPanel>

                        <TabPanel panelId={4}>
                          <div
                            class=" bg-white p-4 rounded-md border border-gray-200"
                          >
                            <Activities activites={activities} />
                          </div>
                        </TabPanel>
                        <TabPanel panelId={5}>
                          <div
                            class=" my-2 mx-auto sm:px-6 lg:px-8 border border-dashed border-gray-400 h-32"
                          >
                            <h1 class="text-xl text-gray-500">Interviews</h1>
                          </div>
                        </TabPanel>
                        <TabPanel panelId={6}>
                          <div
                            class=" bg-white p-4 rounded-md border border-gray-200"
                          >
                            <EmailSender
                              on:fileUploaded={(e) => console.log(e)}
                            />
                          </div>
                        </TabPanel>
                      </TabsContainer>
                    </div>
                  </div>
                  <!-- End main area -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
