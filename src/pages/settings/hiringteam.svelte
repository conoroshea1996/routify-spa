<script>
  import { Button, TextInput, Badge, Sidepanel, Select } from "hirehive-ui";
  import FilterDropDown from "../../lib/Filters/FilterDropDown.svelte";
  import { hiringTeam } from "../../stores/hiringteam";
  import { userBadgeType, userTypeAsString } from "../../utils/badgeType";

  let categoriesMenu = false;
  let categoriesFilter = [];

  let locationsMenu = false;
  let locationsFilter = [];

  let rolesMenu = false;
  let rolesFilter = [];

  let openAddTeam;
</script>

<div class="w-full px-6">
  <div class="mx-auto py-4  lg:flex lg:items-center lg:justify-between">
    <div class="font-medium tracking-tight text-gray-500  flex w-1/2">
      <div>
        <h1 class="text-gray-900 text-3xl font-bold">Hiring team</h1>

        <div class="my-2">
          <p class="flex items-center font-medium text-gray-500">
            Admins have access to every feature and every employee, and can
            assign any role to a user. <br /> Users and reviewers can review candidates
            and more, depending on the permissions.
          </p>
        </div>
      </div>
    </div>
    <div class="flex  items-center">
      <Button kind="primary" on:click={() => (openAddTeam = true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="mx-1 ml-2"> Add team member </span>
      </Button>
    </div>
  </div>
</div>

<main class="px-6 mt-4">
  <div class="flex justify-between text-gray-700">
    <div class="w-96">
      <TextInput placeholder="Search hiring team" full size="large">
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
    <div class="flex space-x-4">
      <FilterDropDown
        filterName="All categories"
        facets={["Product", "Support", "Finance"]}
        open={categoriesMenu}
        bind:activeFilters={categoriesFilter}
      />

      <FilterDropDown
        filterName="All locations"
        facets={["New", "Good", "Possible"]}
        open={locationsMenu}
        bind:activeFilters={locationsFilter}
      />

      <FilterDropDown
        filterName="All roles"
        facets={["Owner", "User", "Reviewer"]}
        open={rolesMenu}
        bind:activeFilters={rolesFilter}
      />
    </div>
  </div>

  <div
    class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-4"
  >
    <table class="min-w-full divide-y divide-gray-200 bg-white">
      <thead>
        <tr>
          <th
            scope="col"
            class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/5"
          >
            Name
          </th>

          <th
            scope="col"
            class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Category
          </th>

          <th
            scope="col"
            class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Role
          </th>
          <th
            scope="col"
            class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Hiring
          </th>
          <th
            scope="col"
            class="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Edit
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each $hiringTeam as user}
          <tr>
            <td class="px-6 py-4 whitespace-nowrap w-2/5">
              <div class="flex items-center">
                <div>
                  <p class="capitalize text-gray-900 font-medium">
                    {user.firstName}
                    {user.lastName}
                  </p>
                  <p class="text-gray-500 ">{user.email}</p>
                </div>
              </div>
            </td>

            <td class="px-6 py-4 whitespace-nowrap">
              {#if !user.categoryName}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              {:else}
                <p class="text-gray-500">{user.categoryName}</p>
              {/if}
            </td>

            <td class="px-6 py-4 whitespace-nowrap">
              <Badge kind={userBadgeType(user.typeId)} size="large">
                {userTypeAsString(user.typeId)}
              </Badge>
            </td>

            <td class="px-6 py-4 whitespace-nowrap">
              <Badge size="large" kind="gray">
                {user.jobCount} jobs assigned
              </Badge>
            </td>

            <td
              class="px-6 py-6 whitespace-nowrap  flex justify-end items-center"
            >
              <button class="text-gray-300">
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
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</main>

<Sidepanel bind:open={openAddTeam} let:close>
  <div class="h-full w-screen flex flex-col max-w-xl ">
    <div class="p-6 border-b border-gray-200">
      <div class="flex items-start justify-between">
        <h2 class="text-lg font-medium text-gray-900">Add team member</h2>
        <div class="ml-3 h-7 flex items-center">
          <button
            on:click={() => close()}
            class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
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
      </div>
    </div>

    <div class="pr-5 pl-14 flex-1 flex flex-col space-y-6 mt-6">
      <div class="my-2 flex justify-between item-center space-x-6 ">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> First name</span>
        </div>
        <div class="w-3/4">
          <TextInput full />
        </div>
      </div>
      <div class="my-2 flex justify-between item-center space-x-6">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Last name</span>
        </div>
        <div class="w-3/4">
          <TextInput full />
        </div>
      </div>
      <div class="my-2 flex justify-between item-center space-x-6">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Email</span>
        </div>
        <div class="w-3/4">
          <TextInput full />
        </div>
      </div>
      <div class="my-2 flex justify-between item-center space-x-6">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> User role</span>
        </div>
        <div class="w-3/4">
          <Select options={["Fully", "Partly"]} full placeholder="Select" />
        </div>
      </div>

      <div class="my-2 flex justify-between item-center space-x-6">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Premission</span>
        </div>
        <div class="w-3/4">
          <Select options={["Fully", "Partly"]} full placeholder="User" />
        </div>
      </div>
      <div class="my-2 flex justify-between item-center space-x-6">
        <div class="w-1/4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        </div>
        <div class="w-3/4">
          <Select
            options={["Fully", "Partly"]}
            full
            placeholder="Link to application"
          />
        </div>
      </div>
    </div>

    <div class="border-t border-gray-200 flex justify-end py-4">
      <div class="flex space-x-4 pb-8 px-6">
        <Button kind="white" on:click={() => close()}>Cancel</Button>
        <Button kind="primary">Save</Button>
      </div>
    </div>
  </div>
</Sidepanel>
