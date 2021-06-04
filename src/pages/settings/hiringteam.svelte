<script>
  import {
    Button,
    TextInput,
    Badge,
    Sidepanel,
    Select,
    toolTip,
  } from "hirehive-ui";
  import CheckBox from "hirehive-ui/src/Inputs/CheckBox.svelte";
  import FilterDropDown from "../../lib/Filters/FilterDropDown.svelte";
  import { hired } from "../../stores/candidates";
  import { hiringTeam } from "../../stores/hiringteam";
  import { userBadgeType, userTypeAsString } from "../../utils/badgeType";
  let categoriesMenu = false;
  let categoriesFilter = [];

  let locationsMenu = false;
  let locationsFilter = [];

  let rolesMenu = false;
  let rolesFilter = [];

  let openAddTeam;
  let openSearchCandidate;

  let selectedUserType;

  const adminPermissions = [
    {
      label: "Access to all jobs/candidates",
      type: "",
      value: "",
      allowed: true,
      isDefaultPermission: true,
    },

    {
      label: "Manage jobs (add, edit and publish)",
      type: "",
      value: "",
      allowed: true,
      isDefaultPermission: true,
    },

    {
      label: "Candidate actions (progress, share and link)",
      type: "",
      value: "",
      allowed: true,
      isDefaultPermission: true,
    },
    {
      label: "Manage custom pipeline",
      type: "",
      value: "",
      allowed: true,
      isDefaultPermission: true,
    },
    {
      label: "Email candidates",
      type: "",
      value: "",
      allowed: true,
      isDefaultPermission: true,
    },
    {
      label: "Manage Referrals",
      type: "",
      value: "",
      allowed: true,
      isDefaultPermission: true,
    },

    {
      label: "Manage team members",
      type: "MANAGE_TEAM",
      value: "MANAGE_TEAM",
      allowed: false,
    },
    {
      label: "Manage subscription",
      type: "SETTINGS_BILLING",
      value: "SETTINGS_BILLING",
      allowed: false,
    },
    {
      label: "Can manage job boards and place sponsored postings",
      type: "SETTINGS_JOBBOARD",
      value: "SETTINGS_JOBBOARD",
      allowed: false,
    },
  ];

  const hiringMangerPermissions = [
    {
      label: "Access to assigned jobs/candidates",
      type: "",
      value: "",
      allowed: true,
      isDefaultPermission: true,
    },
    {
      label: "Candidate actions (progress, share and link)",
      type: "",
      value: "",
      allowed: true,
      isDefaultPermission: true,
    },
    {
      label: "Send emails to candidates",
      type: "MESSAGE_CANDIDATE",
      value: "MESSAGE_CANDIDATE",
      allowed: true,
    },
    {
      label: "Create and edit jobs",
      type: "MANAGE_JOBS",
      value: "MANAGE_JOBS",
      allowed: true,
    },
    {
      label: "Publish jobs and assign team members",
      type: "JOB_PUBLISH",
      value: "JOB_PUBLISH",
      allowed: true,
    },
    {
      label: "Access to restricted candidate information",
      type: "SENSITIVE_INFO",
      value: "SENSITIVE_INFO",
      allowed: false,
    },
  ];

  const reviewerPermissions = [
    {
      label: "Access to candidates at assigned stages",
      type: "",
      value: "",
      allowed: true,
      isDefaultPermission: true,
    },
    {
      label: "Access to restricted candidate information",
      type: "SENSITIVE_INFO",
      value: "SENSITIVE_INFO",
      allowed: false,
    },
  ];

  let userPermissions = [];

  $: setPermissions(selectedUserType);

  const setPermissions = (selectedUserType) => {
    if (selectedUserType === "Admin") {
      userPermissions = adminPermissions;
    } else if (selectedUserType === "User") {
      userPermissions = hiringMangerPermissions;
    } else {
      userPermissions = reviewerPermissions;
    }
  };
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

{#if openAddTeam}
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
          <div class="w-1/4 flex items-center space-x-2">
            <span class="font-medium text-gray-500"> User role</span>
            <span
              class="text-gray-900 cursor-pointer"
              use:toolTip={{
                position: "top",
                text: "Admins: HR Director, VP of HR, Lead Recruiter, Recruiter, Head of Recruiting<br><br>User: Recruiting Coordinators, Schedulers, Sourcers<br><br>Reviewer: Hiring Managers, any other team members who need candidate only access",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
          </div>
          <div class="w-3/4">
            <Select
              options={["Admin", "User", "Reviewer"]}
              full
              placeholder="Select"
              bind:value={selectedUserType}
            />
          </div>
        </div>

        <div class="my-2 flex justify-between item-center space-x-6">
          <div class="w-1/4 flex items-start space-x-2">
            <span class="font-medium text-gray-500">Account access</span>
          </div>
          <div class="w-3/4 flex flex-col space-y-2 my-1">
            {#if selectedUserType}
              {#each userPermissions as permission}
                <CheckBox
                  size="large"
                  label={permission.label}
                  value={permission.value}
                  name={permission.value}
                  checked={permission.allowed}
                  disabled={permission.isDefaultPermission}
                />
              {/each}
            {/if}
          </div>
        </div>

        {#if selectedUserType === "Reviewer"}
          <div class="my-2 flex justify-between item-center space-x-6">
            <div class="w-1/4 flex items-start space-x-2">
              <span class="font-medium text-gray-500">Pipeline access</span>
            </div>
            <div class="w-3/4 flex flex-col space-y-2 my-1">
              <Button kind="white">
                <span class="text-blue-500"> See stages </span>
              </Button>
            </div>
          </div>
        {/if}

        <div class="my-2 flex justify-between item-center space-x-6">
          <div class="w-1/4 flex items-start space-x-2">
            <span class="font-medium text-gray-500">
              Link to candidate profile
            </span>
            <span
              class="text-gray-900 cursor-pointer"
              use:toolTip={{
                position: "top",
                text: "Search for candidate by email or name<br/>Only candidates marked as 'Hired' will appear",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
          </div>
          <div class="w-3/4 flex flex-col space-y-2 my-1">
            <div class="pr-4">
              <Button
                kind="white"
                size="large"
                on:click={() => (openSearchCandidate = true)}
              >
                <span class="text-blue-500"> Search for hired candidate </span>
              </Button>
            </div>
            <span class="text-sm font-medium text-gray-500"
              >Prevents the user from seeing their own application</span
            >
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

    {#if openSearchCandidate}
      <Sidepanel bind:open={openSearchCandidate} let:close>
        <div class="h-full w-screen flex flex-col max-w-lg bg-gray-100">
          <div class="p-6">
            <div class="flex items-start justify-between">
              <button class="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="text-lg font-medium text-gray-900">
                  Search candidate to link
                </p>
              </button>
            </div>
          </div>

          <div class="flex-1 flex flex-col space-y-6 mt-6 px-8">
            <div>
              <TextInput
                full
                label="Name"
                placeholder="Search hired candidate......"
              >
                <div
                  slot="leading"
                  class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
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

                <div
                  slot="trailing"
                  class="absolute inset-y-0 right-0 flex items-center pointer-events-none rounded-full"
                >
                  <div class="p-0.5 bg-gray-100 rounded-full mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </TextInput>
            </div>

            {#if hired}
              <ul class="divide-y divide-gray-200">
                {#each hired as result}
                  <li class="p-4 bg-white rounded-md border border-gray-200">
                    <div class="flex items-center space-x-4">
                      <div class="flex-1 min-w-0">
                        <p class="text-md font-medium text-gray-900 truncate">
                          {result.fullName}
                        </p>
                        <p class="text-md text-gray-500 truncate">
                          {result.email}
                        </p>
                      </div>
                      <div>
                        <Button kind="secondary">Link</Button>
                      </div>
                    </div>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>

          <div class="border-t border-gray-200 flex justify-end py-4 bg-white">
            <div class="flex space-x-4 px-6">
              <Button kind="white" on:click={() => close()}>Back</Button>
              <Button kind="primary">Done</Button>
            </div>
          </div>
        </div>
      </Sidepanel>
    {/if}
  </Sidepanel>
{/if}
