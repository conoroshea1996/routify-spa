<script>
  import { url } from "@roxi/routify";

  import { mutate, useSWR } from "sswr";

  import { onMount, setContext } from "svelte";
  import Tab from "../../lib/Tabs/Tab.svelte";
  import TabPanel from "../../lib/Tabs/TabPanel.svelte";
  import Tabs from "../../lib/Tabs/Tabs.svelte";
  import TabWrapper from "../../lib/Tabs/TabWrapper.svelte";

  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", {
    dedupingInterval: 100,
  });

  const { data: x } = useSWR("https://jsonplaceholder.typicode.com/users", {
    dedupingInterval: 100,
  });

  $: console.log($data, "Datatata");
  $: console.log($x);

  let testing = () => {
    clear();
  };
</script>

<button class="bg-red-400 px-4 py-2 text-white" on:click={() => testing()}>
  Clear Cache
</button>
<h1>Edit</h1>

<TabWrapper>
  <Tabs>
    <Tab>All Users</Tab>
    <Tab>Active Of Users</Tab>
  </Tabs>
  <TabPanel id={0}>
    <div class="bg-white justify-center flex items-center">
      <ul class="w-full">
        {#if $data}
          {$data.length}

          {#each $data as user}
            <li
              class="py-4 flex flex-col my-4 bg-gray-50"
              class:bg-blue-100={user.active}
            >
              <div>
                <h1 class="text-gray-500 text-xl">Id {user.id}</h1>
                <h1 class="text-gray-500">{user.email}</h1>
              </div>

              <div class="flex w-full">
                <a href={`/candidates/${user.id}`} class="bg-gray-300 px-4">
                  Details
                </a>
                <a
                  href={`/candidates/edit/${user.id}`}
                  class="bg-blue-300 px-4"
                >
                  Edit
                </a>
              </div>
            </li>
          {/each}
        {/if}
      </ul>
    </div>
  </TabPanel>

  <TabPanel id={1}>
    <div class="bg-blue-100 py-40 justify-center flex items-center">
      <h2 />
    </div>
  </TabPanel>
</TabWrapper>
