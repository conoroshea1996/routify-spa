<script lang="ts">
  import { TabsContainer, TabBar, Tab, TabPanel, Modal } from "hirehive-ui";
  import { agendas } from "../../stores/agenda";
  import { InterviewStatus } from "../../types/interviewStatus";
  import { DatePicker } from "svelte-inclusive-datepicker";
  import DateFnsAdapter from "@date-io/date-fns";

  let interviewModal = false;
  let interviewDetails: {
    jobTitle: string;
    startTime: string;
    timeZone: string;
    attendees: Array<any>;
  };

  const openInterviewDetails = (interview: any) => {
    interviewModal = true;
    interviewDetails = interview;
    console.log(interviewDetails);
  };

  const hasPast = (interview: any) => {
    const interViewStartTime = new Date(interview.startTimeUTC).getTime();
    const now = Date.now();
    return interViewStartTime < now;
  };

  // $agendas.interviews = [];

  const dateFnsAdapter = new DateFnsAdapter();
  let selectedDate: Date = dateFnsAdapter.date();
  let selectedDatesEvents: any[] = [];

  const getEventsForDate = (selectedDate) => {
    selectedDatesEvents = $agendas.interviews.filter((i) => {
      let date = new Date(i.startTime);
      let is = dateFnsAdapter.isSameDay(date, selectedDate);
      return is;
    });
  };

  function handleSelectDay(e: any) {
    selectedDate = e.detail;

    getEventsForDate(selectedDate);
  }

  getEventsForDate(selectedDate);
</script>

<div>
  <div class="max-w-screen-2xl mx-auto my-4 px-4 flex space-x-6">
    <div class="flex-1 flex flex-col items-stretch w-3/5">
      <div>
        <div class="text-gray-900">
          <h1>{selectedDate}</h1>
        </div>
        <TabsContainer>
          <TabBar>
            <Tab TabId={1} let:isActive>
              <div
                class="inline-flex justify-center items-center  font-medium border border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md
                {isActive ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}"
              >
                My Agenda
              </div>
            </Tab>
            <Tab TabId={2} let:isActive>
              <div
                class="inline-flex justify-center items-center  font-medium border border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md
                {isActive ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}"
              >
                Company Agenda
              </div>
            </Tab>
          </TabBar>

          <TabPanel panelId={1}>
            <div class="shadow overflow-hidden sm:rounded-md mt-6">
              <ul class="divide-y divide-gray-200">
                {#if selectedDatesEvents.length > 0}
                  {#each selectedDatesEvents as interview}
                    <li
                      class={hasPast(interview)
                        ? "bg-gray-100 opacity-70"
                        : "bg-white"}
                    >
                      <div class="block hover:bg-gray-50">
                        <div class="flex items-center px-4 py-4 sm:px-6">
                          <div class="min-w-0 flex-1 flex items-center">
                            <div class="flex-shrink-0">
                              <p
                                class="text-sm font-medium text-gray-900 truncate"
                              >
                                {interview.startTime.split("T")[1]} - {interview.endTime.split(
                                  "T"
                                )[1]}
                              </p>
                              <p
                                class="text-sm font-medium text-gray-400 truncate"
                              >
                                {interview.timeZone}
                              </p>
                            </div>
                            <div
                              class="min-w-0 flex-1 px-10 md:grid md:grid-cols-5 md:gap-4"
                            >
                              <div class="col-span-2 ">
                                {#if interview.cancelled}
                                  <p class="text-sm font-medium text-gray-900">
                                    Cancelled: <span class="line-through">
                                      Interview for {interview.jobTitle}
                                    </span>
                                  </p>
                                {:else}
                                  <p class="text-sm font-medium text-gray-900">
                                    Interview for {interview.jobTitle}
                                  </p>
                                {/if}
                              </div>
                              <div class="block flex space-x-4 col-span-3">
                                <img
                                  class="h-8 w-8 rounded-full"
                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
                                <div>
                                  <p class="text-sm text-gray-900">Onsite</p>
                                  <p
                                    class="text-sm text-gray-400 flex items-center"
                                  >
                                    {interview.organiser.fullName} and {interview.candidateName}
                                    <svg
                                      class="flex-shrink-0 ml-1.5 h-5 w-5 text-green-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <button
                              on:click={() => openInterviewDetails(interview)}
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
                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  {/each}
                {:else}
                  <div class="block rounded-md border border-gray-200">
                    <div class="flex items-center px-4 py-4 sm:px-6 space-x-5">
                      <span class="bg-white p-2 rounded-full text-gray-500">
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

                      <p class="text-gray-900 font-medium">
                        There are no events to show here today.
                      </p>
                    </div>
                  </div>
                {/if}
              </ul>
            </div>
          </TabPanel>

          <TabPanel panelId={2}>
            <div class="bg-white shadow overflow-hidden sm:rounded-md mt-6">
              <ul class="divide-y divide-gray-200">
                <div class="shadow overflow-hidden sm:rounded-md mt-6">
                  <ul class="divide-y divide-gray-200">
                    {#each $agendas.interviews.slice(0, 1) as interview}
                      <li
                        class={hasPast(interview)
                          ? "bg-gray-100 opacity-70"
                          : "bg-white"}
                      >
                        <div class="block hover:bg-gray-50">
                          <div class="flex items-center px-4 py-4 sm:px-6">
                            <div class="min-w-0 flex-1 flex items-center">
                              <div class="flex-shrink-0">
                                <p
                                  class="text-sm font-medium text-gray-900 truncate"
                                >
                                  {interview.startTime.split("T")[1]} - {interview.endTime.split(
                                    "T"
                                  )[1]}
                                </p>
                                <p
                                  class="text-sm font-medium text-gray-400 truncate"
                                >
                                  {interview.timeZone}
                                </p>
                              </div>
                              <div
                                class="min-w-0 flex-1 px-10 md:grid md:grid-cols-5 md:gap-4"
                              >
                                <div class="col-span-2 ">
                                  {#if interview.cancelled}
                                    <p
                                      class="text-sm font-medium text-gray-900"
                                    >
                                      Cancelled: <span class="line-through">
                                        Interview for {interview.jobTitle}
                                      </span>
                                    </p>
                                  {:else}
                                    <p
                                      class="text-sm font-medium text-gray-900"
                                    >
                                      Interview for {interview.jobTitle}
                                    </p>
                                  {/if}
                                </div>
                                <div class="block flex space-x-4 col-span-3">
                                  <img
                                    class="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                  />
                                  <div>
                                    <p class="text-sm text-gray-900">Onsite</p>
                                    <p
                                      class="text-sm text-gray-400 flex items-center"
                                    >
                                      {interview.organiser.fullName} and {interview.candidateName}
                                      <svg
                                        class="flex-shrink-0 ml-1.5 h-5 w-5 text-green-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"
                                        />
                                      </svg>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <button
                                on:click={() => openInterviewDetails(interview)}
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
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    {/each}
                  </ul>
                </div>
              </ul>
            </div>
          </TabPanel>
        </TabsContainer>
      </div>
    </div>

    <div class="w-2/5  space-x-3   justify-center">
      <DatePicker
        value={selectedDate}
        dateAdapter={dateFnsAdapter}
        events={$agendas.events}
        on:selectDay={handleSelectDay}
      />
    </div>
  </div>
</div>
<Modal bind:open={interviewModal}>
  <div
    slot="header"
    class="px-8 flex justify-start flex-col items-start max-w-xl py-4"
  >
    <div>
      <div
        class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
      >
        <!-- Heroicon name: outline/check -->
        <svg
          class="h-6 w-6 text-green-600"
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
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
    <div class="py-4 w-full">
      <h1 class="text-gray-900 font-bold text-xl">
        This Interview is scheduled
      </h1>

      <p class="text-gray-400">
        We have emailed the attendees a calendar invitation with the details.
      </p>
    </div>
  </div>

  <div slot="content" class="px-8 max-w-xl">
    <div class=" border-t border-b border-gray-200 px-4 py-5 sm:p-0">
      <dl>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4">
          <dt class="text-sm text-gray-400">What</dt>
          <dd class="text-gray-900 font-medium text-sm sm:col-span-2">
            Interview for {interviewDetails.jobTitle}
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4">
          <dt class="text-sm text-gray-400">When</dt>
          <dd class="text-gray-900 font-medium text-sm sm:col-span-2">
            {interviewDetails.startTime} <br />
            {interviewDetails.timeZone}
          </dd>
        </div>

        {#each interviewDetails.attendees as attendee}
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4">
            <dt class="text-sm text-gray-400">Who</dt>
            <dd
              class="text-gray-900 font-medium sm:col-span-2 flex items-center space-x-4"
            >
              <div>
                <h3>{attendee.firstName} {attendee.lastName}</h3>
                <p class="text-gray-400 text-sm">emcar@gmail.com</p>
              </div>

              {#if attendee.status === InterviewStatus.CONFIRMED}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              {:else if attendee.status === InterviewStatus.PENDING || attendee.status === InterviewStatus.MAYBE}
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              {:else if attendee.status === InterviewStatus.DECLINED}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              {/if}
            </dd>
          </div>
        {/each}

        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4">
          <dt class="text-sm text-gray-400">Where</dt>
          <dd class="text-gray-900 font-medium text-sm sm:col-span-2">
            Do we have this?
          </dd>
        </div>
      </dl>
    </div>
  </div>

  <div slot="footer" class="px-8 max-w-xl py-4">
    <div class="text-center text-gray-400">
      <p>
        Need to make a change?
        <button>Reshedule</button>
        or
        <button>Cancel</button>
      </p>
    </div>
  </div>
</Modal>
