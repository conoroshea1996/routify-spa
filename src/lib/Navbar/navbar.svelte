<script>
  import { isActive, page } from "@roxi/routify";
  import { Menu } from "hirehive-ui";
  import { hiringTeam } from "../../stores/jobs";
  import { companies, currentUser } from "../../stores/user";
  import Avatar from "../General/Avatar.svelte";
  $: navUrls = [
    {
      name: "Jobs",
      url: "/index",
      active: $isActive("/index") || $page.path.includes("/jobs/"),
    },
    {
      name: "Candidates",
      url: "/candidates/index",
      active:
        $isActive("candidates/index") || $page.path.includes("/candidates/"),
    },
    {
      name: "Referrals",
      url: "/referrals/index",
      active: $isActive("/referrals/index"),
    },
    {
      name: "Reports",
      url: "/reports/index",
      active: $page.path.includes("/reports/"),
    },
    {
      name: "Inbox",
      url: "/inbox/index",
      active: $isActive("/inbox/index"),
    },
    {
      name: "Agenda",
      url: "/agenda/index",
      active: $isActive("/agenda/index"),
    },
    {
      name: "Career Page",
      url: "/careerpage/index",
    },
  ];

  const user = $hiringTeam[3];

  let accountsMenu = false;
</script>

<nav class="bg-gray-900 flex-shrink-0">
  <div class="max-w-screen-2xl mx-auto px-4">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg
            class="block h-6 w-6"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg
            class="hidden h-6 w-6"
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
      <div
        class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="flex-shrink-0 flex items-center">
          <img
            class="block lg:hidden h-8 w-auto"
            src="/assets/Vector.png"
            alt="Workflow"
          />
          <img
            class="hidden lg:block h-8 w-auto"
            src="/assets/Vector.png"
            alt="Workflow"
          />
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4 text-gray-400 py-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                {#each navUrls as { name, url, active }}
                  <a
                    href={url}
                    class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 {active
                      ? 'text-yellow-400 bg-gray-800'
                      : ''}"
                    aria-current="page">{name}</a
                  >
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 space-x-6 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
      >
        <div
          class="bg-gray-700 hidden xl:flex space-x-4 items-center justify-between py-3 text-white rounded-md border-gray-700"
        >
          <p class="text-sm px-4">Free trail ends in 7 days</p>
          <div class="flex items-center space-x-2 px-4">
            <p class="text-sm font-bold">Upgrade</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <button
          class="p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none "
        >
          <span class="sr-only">View notifications</span>
          <!-- Heroicon name: outline/bell -->
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <Menu position="right" bind:open={accountsMenu} menuWidth="w-72">
            <button
              slot="menu_trigger"
              type="button"
              class="text-gray-400 hover:bg-gray-800 hover:text-white p-1 flex items-center text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              class:bg-gray-800={accountsMenu}
              class:text-white={accountsMenu}
            >
              <span class="px-2">
                {companies.find((c) => c.current === true).name}
              </span>
              <Avatar
                firstName={user.firstName}
                lastName={user.lastName}
                profilePic={user.picUrl}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              slot="menu_context"
              class="bg-white rounded-md border border-gray-200"
            >
              {#each currentUser.accounts as account}
                <div class="border-gray-100 border-b">
                  <div class="px-2 py-2">
                    <button
                      on:click={() => (accountsMenu = false)}
                      class="rounded-md flex items-center justify-between px-4 py-2 my-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left focus:outline-none focus:bg-gray-100"
                      role="menuitem"
                    >
                      <div class="flex flex-col">
                        <span class="text-gray-900 font-bold">
                          {companies.find((c) => c.id === account.id).name}
                        </span>
                        <span>
                          {currentUser.given_name}
                          {currentUser.family_name}
                        </span>
                      </div>
                      {#if companies.find((c) => c.id === account.id).current}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-900"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      {/if}
                    </button>
                  </div>
                </div>
              {/each}

              <div class="border-gray-100 border-b">
                <div class="px-2 py-1">
                  <button
                    on:click={() => (accountsMenu = false)}
                    class="rounded-md flex items-center justify-between px-4 py-2 my-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left focus:outline-none focus:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </button>
                </div>
                <div class="px-2 py-1">
                  <button
                    on:click={() => (accountsMenu = false)}
                    class="rounded-md flex items-center justify-between px-4 py-2 my-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left focus:outline-none focus:bg-gray-100"
                    role="menuitem"
                  >
                    Support
                  </button>
                </div>
              </div>

              <div class="px-2 py-1">
                <button
                  on:click={() => (accountsMenu = false)}
                  class="rounded-md flex items-center justify-between px-4 py-2 my-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left focus:outline-none focus:bg-gray-100"
                  role="menuitem"
                >
                  Sign out
                </button>
              </div>
            </div>
          </Menu>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1 flex flex-col text-gray-400">
      {#each navUrls as { name, url, active }}
        <a
          href={url}
          class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 {active
            ? 'text-yellow-400 bg-gray-800'
            : ''}"
          aria-current="page">{name}</a
        >
      {/each}
    </div>
  </div>
</nav>
