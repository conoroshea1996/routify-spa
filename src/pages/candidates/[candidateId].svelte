<script lang="ts">
  import {
    Badge,
    Button,
    TabsContainer,
    TabBar,
    Tab,
    TabPanel,
    Modal,
    Menu,
    TextInput,
    CheckBox,
  } from "hirehive-ui";
  import Activities from "../../lib/Activites/Activities.svelte";
  import CandidateStatusPicker from "../../lib/Candidates/CandidateStatusPicker.svelte";
  import Tags from "../../lib/Candidates/Tags.svelte";
  import EmailSender from "../../lib/Inbox/EmailSender.svelte";
  import RatingFull from "../../lib/Rating/RatingFull.svelte";
  import { candidateTags } from "../../stores/tags";

  import { candidates, activities } from "../../stores/candidates";
  import { getContext } from "svelte";
  import { getRandomBadgeColor } from "../../utils/badgeType";
  import TuiCalendar from "../../lib/General/TuiCalendar.svelte";
  import Calendars from "../../lib/General/Calendars.svelte";
  import TextArea from "hirehive-ui/src/Inputs/TextArea.svelte";

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
  const toast: any = getContext("HH_TOASTS");

  const candidateStatusChange = (e: any) => {
    toast.push({
      title: `Moved to ${e.detail.status}`,
      showCloseButton: true,
      type: "success",
    });
  };

  let scheduleInterviewModal = false;

  let candidateActionMenu = false;
  let shareCandidateModal = false;

  let shareCandidateModel = {
    email: "",
    message: "",
    allowExternalNotes: false,
  };
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
                      <div class="flex items-center space-x-2 mx-1">
                        {#each tags as tag}
                          <Badge size="large" kind={getRandomBadgeColor()}
                            >{tag}</Badge
                          >
                        {/each}
                      </div>
                      <Tags
                        bind:open={tagsMenu}
                        autoComplete={candidateTags}
                        autoCompleteKey={"name"}
                        onlyAutocomplete={false}
                        bind:tags
                        loadAll={true}
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
                          Add Tag
                        </button>

                        <span slot="create" let:value>
                          Create new tag {value}
                        </span>
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

                  <Button
                    kind="secondary"
                    on:click={() => (scheduleInterviewModal = true)}
                  >
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
                    on:updateCandidateStatus={(e) => candidateStatusChange(e)}
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

                  <Menu bind:open={candidateActionMenu} position="right">
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
                      <div
                        class="py-1 w-full px-2 border-b border-gray-200"
                        role="none"
                      >
                        <button
                          on:click={() => {
                            shareCandidateModal = true;
                            candidateActionMenu = false;
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
                                d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                              />
                            </svg>
                          </span>
                          <span> Share </span>
                        </button>
                      </div>
                    </div>
                  </Menu>
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
                    <div class="absolute inset-0 flex flex-col">
                      <div>
                        <h1 class="font-bold text-gray-900">Notes</h1>
                        <div class="bg-white">
                          <div class="px-4 py-12">
                            <!-- Content goes here -->
                          </div>
                        </div>
                      </div>

                      <div class="my-6">
                        <div class="flex justify-between">
                          <h1 class="font-bold text-gray-900">
                            Past applications
                          </h1>
                          <div>
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
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
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

<Modal bind:open={scheduleInterviewModal}>
  <div slot="content" class="h-full w-screen max-w-screen-2xl bg-gray-50 p-4">
    <Calendars {candidate} />
  </div>
</Modal>

<Modal bind:open={shareCandidateModal}>
  <div
    slot="content"
    class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all max-w-screen-sm"
  >
    <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
      <button
        type="button"
        class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span class="sr-only">Close</span>
        <!-- Heroicon name: outline/x -->
        <svg
          class="h-6 w-6"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div class="sm:flex sm:items-start">
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3
          class="text-lg leading-6 font-medium text-gray-900"
          id="modal-title"
        >
          Share externally
        </h3>

        <div class="mt-2 mr-6">
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              Sends a link to this candidate profile containing only the CV,
              cover letter and basic details. Link expires after 14 days.

              <a href="#" class="text-blue-500">Learn more. </a>
            </p>
          </div>

          <TextInput
            full
            bind:value={shareCandidateModel.email}
            placeholder="Enter Email"
          />
          <TextArea
            full
            bind:value={shareCandidateModel.message}
            placeholder="Add an optional message"
            rows="2"
            resize="both"
          />

          <div class="relative flex items-start mt-2">
            <div class="flex items-center h-5">
              <CheckBox
                size="medium"
                bind:checked={shareCandidateModel.allowExternalNotes}
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="offers" class="font-medium text-gray-700">
                Allow external user to add notes
              </label>
              <p class="text-gray-500">
                They won’t be able to see your notes or other users notes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-4 sm:flex justify-end mr-6">
      <Button
        kind="primary"
        on:click={() => {
          alert("Log Model");
          console.log(shareCandidateModel);
        }}
      >
        Share
      </Button>
    </div>
  </div>
</Modal>
