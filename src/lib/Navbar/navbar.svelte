<script>
  import { isActive, page } from "@roxi/routify";
  import { hiringTeam } from "../../stores/jobs";
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
      active: $isActive("/candidates/index"),
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
</script>

<nav class="bg-gray-900">
  <div class="max-w-screen-2xl px-4 mx-auto">
    <div class="relative flex items-center justify-between">
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
      <div class="flex-1 flex items-center justify-start sm:items-stretch">
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
          <div class="flex space-x-4 text-gray-400 py-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            {#each navUrls as { name, url, active }}
              <a
                href={url}
                class=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
                class:bg-gray-800={active}
                class:text-yellow-400={active}
                aria-current="page">{name}</a
              >
            {/each}
          </div>
        </div>
      </div>

      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 py-4"
      >
        <div class="hidden sm:block">
          <div
            class="bg-gray-700 flex space-x-4 items-center justify-between py-4 text-white border-4 border-gray-700 px-4"
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
        </div>

        <button
          class="hover:bg-gray-800 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
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
          <div>
            <button
              type="button"
              class="hover:bg-gray-800 hover:text-white p-1 flex items-center text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
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
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a
        href="#"
        class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
        aria-current="page">Dashboard</a
      >

      <a
        href="#"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >Team</a
      >

      <a
        href="#"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >Projects</a
      >

      <a
        href="#"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >Calendar</a
      >
    </div>
  </div>
</nav>
