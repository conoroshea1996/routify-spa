<script lang="ts">
  import { createCustomArrayStore, customSet } from "../stores/Todo";
  import { useSWR, createSWR } from "sswr";
  import { onMount } from "svelte";
  import { setContext, xlink_attr } from "svelte/internal";
  import { readable } from "svelte/store";

  import Pagination from "hirehive-ui/src/Pagination/Pagination.svelte";
  import TabsOne from "../lib/Tabs/TabsOne.svelte";
  import Jobs from "../lib/Jobs/Jobs.svelte";

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

  let currentPage = 0;
</script>

<h1 class="text-4xl text-gray-700 text-center my-4">
  Current Page {currentPage}
</h1>

<TabsOne />

<div class="my-8">
  <Jobs />
</div>

<Pagination bind:current={currentPage} numItems={50} perPage={3} />
