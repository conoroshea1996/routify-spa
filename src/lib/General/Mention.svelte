<script>
  import { onMount } from "svelte";

  const getUsers = () =>
    new Promise((resolve, reject) => {
      const users = [
        {
          jobId: 33,
          hasPermission: true,
          id: 46,
          firstName: "Conor",
          lastName: "O Shea",
          picUrl: null,
          email: "hide@profile.com",
          typeId: 6,
          categoryId: null,
          categoryName: null,
          logins: [],
          linkedUserCandidates: [],
          fullName: "Conor O Shea",
          following: false,
          $$hashKey: "object:214",
          displayName: "@Conor_O",
          searchName: "Conor O Shea hide@profile.com",
        },
        {
          jobId: 33,
          hasPermission: true,
          id: 44,
          firstName: "new",
          lastName: "user",
          picUrl: null,
          email: "hiredUser@hire.com",
          typeId: 2,
          categoryId: null,
          categoryName: null,
          logins: [],
          linkedUserCandidates: [],
          fullName: "new user",
          following: false,
          $$hashKey: "object:215",
          displayName: "@new_u",
          searchName: "new user hiredUser@hire.com",
        },
        {
          jobId: 33,
          hasPermission: true,
          id: 48,
          firstName: "review",
          lastName: "er",
          picUrl: null,
          email: "conor@hirehive.com",
          typeId: 6,
          categoryId: null,
          categoryName: null,
          logins: [],
          linkedUserCandidates: [],
          fullName: "review er",
          following: false,
          $$hashKey: "object:216",
          displayName: "@review_e",
          searchName: "review er conor@hirehive.com",
        },
        {
          jobId: 33,
          hasPermission: false,
          id: 47,
          firstName: "svelte",
          lastName: "dev",
          picUrl: null,
          email: "svelteDev@svelte.com",
          typeId: 2,
          categoryId: null,
          categoryName: null,
          logins: [],
          linkedUserCandidates: [],
          fullName: "svelte dev",
          following: false,
          $$hashKey: "object:217",
          displayName: "@svelte_d",
          searchName: "svelte dev svelteDev@svelte.com",
        },
        {
          jobId: 33,
          hasPermission: false,
          id: 1,
          firstName: "Test",
          lastName: "Admin",
          picUrl: null,
          email: "admin@hirehive.com",
          typeId: 1,
          categoryId: null,
          categoryName: null,
          logins: [],
          linkedUserCandidates: [],
          fullName: "Test Admin",
          following: false,
          displayName: "@Test_A",
          searchName: "Test Admin admin@hirehive.com",
        },
      ];
      setTimeout(() => {
        resolve(users);
      }, 800);
    });

  import Tribute from "tributejs";

  let tribute;
  let mentionELement;

  onMount(async () => {
    tribute = new Tribute({
      values: await getUsers(),
      containerClass:
        "origin-top-right absolute border border-gray-200 right-0 mt-1 w-56 rounded-md bg-white focus:outline-none py-1 max-h-32 overflow-y-scroll",
      selectClass: "bg-gray-100",
      // function called on select that returns the content to insert
      selectTemplate: function (item) {
        console.log(item);
        return `<span class="text-blue-500" data-hint="${item.original.email}" data-user-id="${item.original.id}">${item.original.displayName}</span>`;
      },
      // template for displaying item in menu
      menuItemTemplate: function (item) {
        return `<div
      class="text-gray-700 block px-4 py-2 text-sm"
      role="menuitem"
      tabindex="-1"
      id="menu-item-2">${item.original.displayName}</div>`;
      },
      lookup: "searchName",
    });
    tribute.attach(mentionELement);
  });
</script>

<div class="mt-1 relative inline-block h-full s-sywLKdkNPMXo w-full">
  <div
    bind:this={mentionELement}
    type="text"
    class="editable-div font-medium border-2 h-full border-gray-300 hover:border-blue-200 block focus:border-blue-500 focus:ring-1 focus:ring-blue-200 placeholder-gray-400 rounded-md text-gray-900 w-full text-gray-400"
    placeholder="Add a note, @mention users in notes..."
    contenteditable="true"
  />
</div>

<style global>
  .editable-div[contentEditable="true"]:empty:before {
    content: attr(placeholder);
  }
</style>
