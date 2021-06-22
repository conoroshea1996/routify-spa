<script lang="ts">
  import { Badge, Button, CheckBox, Modal } from "hirehive-ui";
  import type { userType } from "../../../types/roles";
  import { userBadgeType, userTypeAsString } from "../../../utils/badgeType";

  let editHiringTeam: boolean;

  interface Admin {
    id: number;
    picUrl: string;
    email: string;
    fullName: string;
    typeId: userType;
    following: boolean;
    hasPermission: boolean;
  }

  let users: Array<Admin> = [
    {
      id: 1,
      fullName: "Jane Cooper",
      picUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      email: "janecooper@gmail.com",
      following: false,
      typeId: 1,
      hasPermission: true,
    },
    {
      id: 2,
      fullName: "John Cooper",
      picUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      email: "johncooper@gmail.com",
      following: true,
      typeId: 4,
      hasPermission: true,
    },
    {
      id: 3,
      fullName: "Jack Cooper",
      picUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=xXgW2TD4yE&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      email: "janecooper@gmail.com",
      following: false,
      typeId: 6,
      hasPermission: true,
    },
  ];

  let checkAll = false;

  if (
    users.filter((u) => u.typeId !== 1).length ===
    users.filter((u) => u.typeId !== 1 && u.hasPermission).length
  ) {
    checkAll = true;
  }

  const handleCheck = (checkValue: boolean) => {
    users = users.map((u) => {
      u.hasPermission = checkValue;

      return u;
    });
  };
  $: handleCheck(checkAll);

  $: teamIds = users.filter((u) => u.hasPermission).map((u) => u.id);
</script>

<h1>{teamIds}</h1>
<section class="bg-white">
  <div class="shadow sm:rounded-md sm:overflow-hidden h-full">
    <div
      class="flex items-center justify-between w-full border-b border-gray-100 px-2"
    >
      <h1 class=" text-xl font-semibold p-4 ">Application form</h1>

      <div class="mx-6">
        <Button kind="secondary" on:click={() => (editHiringTeam = true)}
          >Edit team</Button
        >
      </div>
    </div>
    <div class="py-4 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Alert
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {#each users as user}
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-6 w-6">
                      <img
                        class="h-6 w-6 rounded-full"
                        src={user.picUrl}
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {user.fullName}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-500">{user.email}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <Badge kind={userBadgeType(user.typeId)}>
                    {userTypeAsString(user.typeId)}
                  </Badge>
                </td>
                <td
                  class="px-8 py-4 whitespace-nowrap text-sm text-gray-500 text-right flex justify-end"
                >
                  <button
                    class:text-yellow-400={user.following}
                    on:click={() => (user.following = !user.following)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<Modal bind:open={editHiringTeam}>
  <div slot="header" class="max-w-3xl px-8">
    <h1 class="text-gray-900 text-xl font-bold py-2">Manage hiring team</h1>
    <p class="text-gray-500 py-2">
      Hiring team members of this job opening have access to candidate profiles
      and reports. They can be alerted by email when new candidates apply for
      the role. The owner has full access to this job.
    </p>
  </div>

  <div
    slot="content"
    class="py-2 align-middle inline-block min-w-full px-8 max-w-3xl"
  >
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-center"
            >
              <CheckBox size="large" bind:checked={checkAll} />
            </th>
            <th
              scope="col"
              class="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
            >
              Name
            </th>

            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Alert
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {#each users.filter((u) => u.typeId !== 1) as user}
            <tr>
              <td
                class="px-2 py-4 whitespace-nowrap flex items-center justify-center"
              >
                <div class="flex items-center">
                  <CheckBox size="large" bind:checked={user.hasPermission} />
                </div>
              </td>

              <td class="py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="text-sm font-medium text-gray-900">
                    {user.fullName}
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <Badge kind={userBadgeType(user.typeId)}>
                  {userTypeAsString(user.typeId)}
                </Badge>
              </td>
              <td
                class="px-8 py-4 whitespace-nowrap text-sm text-gray-500 text-right flex justify-end"
              >
                <button
                  class:text-yellow-400={user.following}
                  on:click={() => (user.following = !user.following)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div
      class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-2"
    >
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>

            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Alert
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {#each users.filter((u) => u.typeId === 1) as user}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {user.fullName}
                    </div>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <Badge kind={userBadgeType(user.typeId)}>
                  {userTypeAsString(user.typeId)}
                </Badge>
              </td>
              <td
                class="px-8 py-4 whitespace-nowrap text-sm text-gray-500 text-right flex justify-end"
              >
                <button
                  class:text-yellow-400={user.following}
                  on:click={() => (user.following = !user.following)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <div slot="footer" class="flex justify-end py-4 max-w-3xl px-8">
    <div>
      <Button kind="white" on:click={() => (editHiringTeam = false)}
        >Cancel</Button
      >
      <Button kind="primary" on:click={() => (editHiringTeam = false)}
        >Apply changes</Button
      >
    </div>
  </div>
</Modal>
