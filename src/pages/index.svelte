<script lang="ts">
  import Tabs from "../lib/Tabs/Tabs.svelte";
  import Tab from "../lib/Tabs/Tab.svelte";
  import Todos from "../lib/Todo/Todos.svelte";
  import TabWrapper from "../lib/Tabs/TabWrapper.svelte";
  import TabPanel from "../lib/Tabs/TabPanel.svelte";
  import { createCustomArrayStore, customSet } from "../stores/Todo";
  import { useSWR, createSWR } from "sswr";
  import { onMount } from "svelte";
  import { setContext, xlink_attr } from "svelte/internal";
  import { readable } from "svelte/store";
  const { data, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    {
      loadInitialCache: true,
    }
  );
  let numberStores = createCustomArrayStore<number>();

  let value = customSet<number>(0);
  const valueStates = value.states;
  const hg = () => {
    $value = Math.random();
  };

  let fsd: number = 20;
  const time = () => {
    return readable(20, function start(set) {
      const interval = setInterval(() => {
        let x = fsd--;
        set(x);
      }, 1000);

      return function stop() {
        clearInterval(interval);
      };
    });
  };

  createSWR({
    dedupingInterval: 20,
  });

  let validateTime: any;
  const updateTitle = (data: Array<any>, id: number, newTitle: string) => {
    const itemToUpdate = data.find((c) => c.id === id);
    itemToUpdate.title = newTitle;
    mutate((c: any) => (c = data), { revalidate: false });
    validateTime = time();
  };
</script>

<TabWrapper>
  <Tabs>
    <Tab>Tab One</Tab>
    <Tab>Tab Two</Tab>
    <Tab>Tab Three</Tab>
    <Tab>Tab Four</Tab>
  </Tabs>

  <TabPanel id={0}>
    <div class="bg-white py-40 justify-center flex items-center">
      <h2>Hello world</h2>
    </div>
  </TabPanel>
  <TabPanel id={1}>
    <div class="bg-blue-100 py-40 justify-center flex items-center">
      <h2>Hello two</h2>
    </div>
  </TabPanel>
  <TabPanel id={2}>
    <div class="bg-red-100 py-40 justify-center flex items-center">
      <h2>Hello three</h2>
    </div>
  </TabPanel>
</TabWrapper>

<!-- <Tabs>
  <Tab>Tab One</Tab>
  <Tab>Tab Two</Tab>
  <Tab>Tab Three</Tab>
</Tabs> -->
