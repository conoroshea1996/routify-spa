<script>
  import { goto, params } from "@roxi/routify";

  import { TextInput, TabsContainer, TabBar, Tab, TabPanel } from "hirehive-ui";
  import { onMount } from "svelte";
  import InboxItem from "../../lib/Inbox/InboxItem.svelte";

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

  $: activeEmailId = parseInt($params.emailId);

  onMount(() => {
    if (inbox.length > 0) {
      $goto(`/inbox/${inbox[0].id}`);
    }
  });
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
          <div class="border-b border-gray-200  w-full px-4">
            <TabBar
              class="-mb-px flex space-x-8 focus:outline-none"
              let:selectedTabId
            >
              <Tab
                TabId={1}
                class="whitespace-nowrap focus:outline-none py-4 px-1 border-b-2 font-medium text-sm {selectedTabId ===
                1
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500'}"
              >
                Inbox
              </Tab>
              <Tab
                TabId={2}
                class="whitespace-nowrap focus:outline-none py-4 px-1 border-b-2 font-medium text-sm {selectedTabId ===
                2
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500'}"
              >
                Outbox
              </Tab>
              <Tab
                TabId={3}
                class="whitespace-nowrap focus:outline-none py-4 px-1 border-b-2 font-medium text-sm {selectedTabId ===
                3
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500'}"
              >
                Unread
              </Tab>
            </TabBar>
          </div>

          <!-- Inbox -->
          <TabPanel panelId={1}>
            <div>
              {#each inbox as email, i}
                <InboxItem {email} isActive={email.id === activeEmailId} />
              {/each}
            </div>
          </TabPanel>

          <!-- Outbox -->
          <TabPanel panelId={2}>
            <div class="divide-y divide-gray-200">
              {#each outbox as email}
                <InboxItem {email} isActive={email.id === activeEmailId} />
              {/each}
            </div>
          </TabPanel>

          <!-- Unread -->
          <TabPanel panelId={3}>
            <div class="divide-y divide-gray-200">
              {#each unread as email}
                <InboxItem {email} isActive={email.id === activeEmailId} />
              {/each}
            </div>
          </TabPanel>
        </TabsContainer>
      </div>
    </div>

    <slot />
  </div>
</div>
