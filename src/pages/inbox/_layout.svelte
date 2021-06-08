<script lang="ts">
  import { goto, params } from "@roxi/routify";

  import {
    TextInput,
    TabsContainer,
    TabBar,
    Tab,
    TabPanel,
    Sidepanel,
  } from "hirehive-ui";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import InboxItem from "../../lib/Inbox/InboxItem.svelte";

  import { emails } from "../../stores/emails";

  let userDetailsSidePanel = false;
  let inbox = $emails.filter((e) => e.incoming);
  let outbox = $emails.filter((e) => !e.incoming);
  let unread = $emails.filter((e) => e.unRead);
  let selectedTab = writable(1);
  let emailId: number;
  $: emailId = parseInt($params.emailId);

  onMount(() => {
    if (emailId) {
      const gotoEmail: any = $emails.find((e) => e.id === emailId);
      $goto(`/inbox/${gotoEmail.id}`);
      goToTab(gotoEmail);
    } else if (inbox.length > 0) {
      $goto(`/inbox/${inbox[0].id}`);
    }
  });

  const goToTab = (email: any) => {
    if (email.incoming) {
      $selectedTab = 1;
    } else if (!email.incoming) {
      $selectedTab = 2;
    } else {
      $selectedTab = 3;
    }
  };

  const getFirstEmailForInbox = (tabId: number) => {
    if (tabId === 1) {
      $goto(`/inbox/${inbox[0].id}`);
    } else if (tabId === 2) {
      $goto(`/inbox/${outbox[0].id}`);
    } else {
      $goto(`/inbox/${unread[0].id}`);
    }
  };
</script>

<div class="flex-grow w-full mx-auto lg:flex">
  <!-- Left sidebar & main wrapper -->
  <div class="flex-1 min-w-0 mx-auto xl:flex">
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

        <TabsContainer bind:selectedTab>
          <div class="border-b border-gray-200  w-full px-4">
            <TabBar
              class="-mb-px flex space-x-8 focus:outline-none"
              let:selectedTabId
            >
              <Tab
                TabId={1}
                on:click={() => getFirstEmailForInbox(1)}
                class="whitespace-nowrap focus:outline-none py-4 px-1 border-b-2 font-medium text-sm {selectedTabId ===
                1
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500'}"
              >
                Inbox
              </Tab>
              <Tab
                TabId={2}
                on:click={() => getFirstEmailForInbox(2)}
                class="whitespace-nowrap focus:outline-none py-4 px-1 border-b-2 font-medium text-sm {selectedTabId ===
                2
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500'}"
              >
                Outbox
              </Tab>
              <Tab
                TabId={3}
                on:click={() => getFirstEmailForInbox(3)}
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
                <InboxItem {email} isActive={email.id === emailId} />
              {/each}
            </div>
          </TabPanel>

          <!-- Outbox -->
          <TabPanel panelId={2}>
            <div class="divide-y divide-gray-200">
              {#each outbox as email}
                <InboxItem {email} isActive={email.id === emailId} />
              {/each}
            </div>
          </TabPanel>

          <!-- Unread -->
          <TabPanel panelId={3}>
            <div class="divide-y divide-gray-200">
              {#each unread as email}
                <InboxItem {email} isActive={email.id === emailId} />
              {/each}
            </div>
          </TabPanel>
        </TabsContainer>
      </div>
    </div>

    <slot />
  </div>
</div>

{#if userDetailsSidePanel}
  <Sidepanel bind:open={userDetailsSidePanel}>
    <div class="h-full flex flex-col max-w-xl">
      <!-- Main -->
      <div>
        <div class="pb-1 sm:pb-6">
          <div>
            <div class="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
              <div class="sm:flex-1">
                <div>
                  <div class="flex items-center">
                    <h3 class="font-bold text-xl text-gray-900 sm:text-2xl">
                      Render Anything inside
                    </h3>
                    <span
                      class="ml-2.5 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full"
                    >
                      <span class="sr-only">Slot</span>
                    </span>
                  </div>
                </div>
                <div
                  class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3"
                >
                  <button
                    type="button"
                    class="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-1"
                  >
                    Message
                  </button>
                  <button
                    type="button"
                    class="flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
          <dl class="space-y-8 px-4 sm:px-6 sm:space-y-6">
            <div>
              <dt
                class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
              >
                Bio
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
                <p>
                  Enim feugiat ut ipsum, neque ut. Tristique mi id elementum
                  praesent. Gravida in tempus feugiat netus enim aliquet a, quam
                  scelerisque. Dictumst in convallis nec in bibendum aenean
                  arcu.
                </p>
              </dd>
            </div>
            <div />
          </dl>
        </div>
      </div>
    </div>
  </Sidepanel>
{/if}
