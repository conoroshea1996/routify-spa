<script>
  import TabsContainer from "hirehive-ui/src/TabsContext/TabsContainer.svelte";
  import TabBar from "hirehive-ui/src/TabsContext/TabBar.svelte";
  import TabPanel from "hirehive-ui/src/TabsContext/TabPanel.svelte";
  import Tab from "hirehive-ui/src/TabsContext/Tab.svelte";
</script>

<TabsContainer>
  <TabBar class="w-full">
    <Tab TabId={1} let:isActive>
      <span
        class="inline-flex justify-center items-center  font-medium border border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md
        {isActive ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}"
        class:button-secondary={isActive}
        ><div class="inline-flex items-center">Overview</div>
      </span>
    </Tab>
    <Tab TabId={2} let:isActive>
      <span
        class="inline-flex justify-center items-center  font-medium border border-transparent hover:bg-gray-100 focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md
      {isActive ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}"
        class:button-secondary={isActive}
        ><div class="inline-flex items-center">Overview</div>
      </span>
    </Tab>
    <Tab TabId={3} let:isActive>
      <span
        class="inline-flex text-gray-500 justify-center items-center  font-medium border border-transparent focus:outline-none focus:ring-1 px-4 py-2 text-sm rounded-md"
        type="button"
        class:button-secondary={isActive}
        ><div class="inline-flex items-center">Time to hire</div>
      </span>
    </Tab>
    <Tab TabId={4} let:isActive>
      <span
        class="inline-flex text-gray-500 justify-center items-center font-medium border border-transparent focus:outline-none focus:ring-1 px-4 py-2 text-sm rounded-md"
        type="button"
        class:button-secondary={isActive}
        ><div class="inline-flex items-center">Demographics</div>
      </span>
    </Tab>
    <Tab TabId={5} let:isActive>
      <span
        class="inline-flex text-gray-500 justify-center items-center font-medium border border-transparent focus:outline-none focus:ring-1  px-4 py-2 text-sm rounded-md"
        type="button"
        class:button-secondary={isActive}
        ><div class="inline-flex items-center">Live summary</div>
      </span>
    </Tab>
  </TabBar>

  <TabPanel panelId={1}>
    <div
      class="my-2 mx-auto sm:px-6 lg:px-8 border border-dashed border-gray-400 h-32"
    >
      <h1 class="text-xl text-gray-500">Panel 1</h1>
    </div>
  </TabPanel>

  <TabPanel panelId={2}>
    <div
      class=" my-2 mx-auto sm:px-6 lg:px-8 border border-dashed border-gray-400 h-32"
    >
      <h1 class="text-xl text-gray-500">Panel 2</h1>
    </div>
  </TabPanel>

  <TabPanel panelId={3}>
    <div
      class=" my-2 mx-auto sm:px-6 lg:px-8 border border-dashed border-gray-400 h-32"
    >
      <h1 class="text-xl text-gray-500">Panel 3</h1>
    </div>
  </TabPanel>

  <TabPanel panelId={4}>
    <div
      class=" my-2 mx-auto sm:px-6 lg:px-8 border border-dashed border-gray-400 h-32"
    >
      <h1 class="text-xl text-gray-500">Panel 4</h1>
    </div>
  </TabPanel>
  <TabPanel panelId={5}>
    <div
      class=" my-2 mx-auto sm:px-6 lg:px-8 border border-dashed border-gray-400 h-32"
    >
      <h1 class="text-xl text-gray-500">Panel 5</h1>
    </div>
  </TabPanel>
</TabsContainer>
