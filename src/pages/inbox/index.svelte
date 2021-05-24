<script>
  import { TextInput, TabsContainer, TabBar, Tab, TabPanel } from "hirehive-ui";

  import { emails, threads } from "../../stores/emails";

  let inbox = $emails.filter((e) => e.incoming);
  let outbox = $emails.filter((e) => !e.incoming);
  let unread = $emails.filter((e) => e.unRead);

  let emailId = 0;
  let emailThreads = [];
  $: getEmails(emailId);

  const getEmails = (emailId) => {
    emailThreads = $threads[emailId];
    console.log(emailThreads, "Email Threads");
  };
</script>

<div class="flex-grow w-full mx-auto lg:flex">
  <!-- Left sidebar & main wrapper -->
  <div class="flex-1 min-w-0 mx-auto max-w-screen-2xl xl:flex">
    <div class="border-b border-gray-200 bg-white w-1/4 h-100vh">
      <div class="h-full border-r pt-4">
        <div class="w-4/5 px-4">
          <TextInput placeholder="Search inbox" full>
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

        <TabsContainer>
          <div class="border-b border-gray-200 my-2 w-full px-4">
            <TabBar class="-mb-px flex space-x-8" let:selectedTabId>
              <Tab
                TabId={1}
                class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm {selectedTabId ===
                1
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500'}"
              >
                Inbox
              </Tab>
              <Tab
                TabId={2}
                class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm {selectedTabId ===
                2
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500'}"
              >
                Outbox
              </Tab>
              <Tab
                TabId={3}
                class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm {selectedTabId ===
                3
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500'}"
              >
                Unread
              </Tab>
            </TabBar>
          </div>

          <TabPanel panelId={1}>
            <ul class="divide-y divide-gray-200">
              {#each inbox as email, i}
                <li
                  class="py-4 px-4 cursor-pointer"
                  on:click={() => (emailId = i)}
                >
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {email.fullName}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {email.subject}
                      </p>
                    </div>
                    <div class="flex items-center text-gray-500">
                      <p>{email.formattedDate}</p>
                    </div>
                  </div>
                </li>
              {/each}
            </ul>
          </TabPanel>

          <TabPanel panelId={2}>
            <ul class="divide-y divide-gray-200">
              {#each outbox as email}
                <li class="py-4 px-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {email.fullName}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {email.subject}
                      </p>
                    </div>
                    <div class="flex items-center text-gray-500">
                      <p>{email.formattedDate}</p>
                    </div>
                  </div>
                </li>
              {/each}
            </ul>
          </TabPanel>

          <TabPanel panelId={3}>
            <ul class="divide-y divide-gray-200">
              {#each unread as email}
                <li class="py-4 px-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {email.fullName}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {email.subject}
                      </p>
                    </div>
                    <div class="flex items-center text-gray-500">
                      <p>{email.formattedDate}</p>
                    </div>
                  </div>
                </li>
              {/each}
            </ul>
          </TabPanel>
        </TabsContainer>
      </div>
    </div>

    <div class=" lg:min-w-0 lg:flex-1 bg-gray-50">
      <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
        <!-- Start main area-->
        <ul
          class="bg-white  border border-gray-200 rounded-md p-8 overflow-y-auto h-80 emailThread"
        >
          {#each emailThreads as email}
            <li>
              <div class="relative pb-16">
                <span
                  class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
                <div class="relative flex items-start space-x-3">
                  <div class="relative">
                    <img
                      class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                      src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt=""
                    />

                    <span
                      class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px"
                    >
                      <!-- Heroicon name: solid/chat-alt -->
                      <svg
                        class="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="min-w-0 flex-1">
                    <div>
                      <div class="text-sm">
                        <p class="font-medium text-gray-900">
                          {email.senderName}
                        </p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">
                        {email.date}
                      </p>
                    </div>
                    <div class="mt-2 text-sm text-gray-700">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tincidunt nunc ipsum tempor purus vitae id. Morbi in
                        vestibulum nec varius. Et diam cursus quis sed purus
                        nam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          {/each}
        </ul>

        <div class="bg-white  border border-gray-200 rounded-md p-8 my-6" />
      </div>
    </div>
  </div>
</div>

<style>
  .emailThread li:last-child div {
    @apply pb-0;
  }
  .emailThread li:last-child div span:first-child {
    @apply hidden;
  }
</style>
