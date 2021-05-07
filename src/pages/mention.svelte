<script>
  import { onMount } from "svelte";

  const getUsers = () =>
    new Promise((resolve, reject) => {
      const users = [
        { key: "Phil Heartman", value: "pheartman" },
        { key: "Gordon Ramsey", value: "gramsey" },
      ];
      setTimeout(() => {
        resolve(users);
      }, 800);
    });

  import Tribute from "tributejs";

  let tribute;
  let mentionELement;

  onMount(async () => {
    const data = await getUsers();
    tribute = new Tribute({
      values: data,
      containerClass:
        "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none py-2",
      selectClass: "bg-gray-100",
      // function called on select that returns the content to insert
      selectTemplate: function (item) {
        return "@" + item.original.value;
      },
      // template for displaying item in menu
      menuItemTemplate: function (item) {
        return `<div
      class="text-gray-700 block px-4 py-2 text-sm"
      role="menuitem"
      tabindex="-1"
      id="menu-item-2">${item.original.key}</div>`;
      },
    });

    tribute.attach(mentionELement);
  });

  const addUser = () => {
    const newUser = { key: "Mike Tyson", value: "mtyson" };
    tribute.append(0, newUser);
  };
</script>

<div>
  <div class="mt-1 relative rounded-md shadow-sm">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    />
    <input
      bind:this={mentionELement}
      type="text"
      name="email"
      id="email"
      autocomplete="off"
      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 sm:text-sm border-gray-300 rounded-md py-4"
      placeholder="Search Users"
    />
  </div>
</div>

<button
  type="button"
  on:click={() => addUser()}
  class="my-4 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-300 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
  id="menu-button"
>
  Add user
</button>

<style global>
</style>
