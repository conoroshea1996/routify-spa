<script lang="ts">
  import { createCustomArrayStore, customSet } from "../stores/Todo";
  import { useSWR, createSWR } from "sswr";
  import { onMount } from "svelte";
  import { setContext, xlink_attr } from "svelte/internal";
  import { readable } from "svelte/store";

  import Pagination from "hirehive-ui/src/Pagination/Pagination.svelte";
  import Jobs from "../lib/Jobs/Jobs.svelte";
  import TextInput from "hirehive-ui/src/Inputs/TextInput.svelte";
  import Button from "hirehive-ui/src/Button/Button.svelte";
  import Rating from "../lib/Rating/rating.svelte";

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

  let currentPage = 1;
</script>

<div class=" space-x-5 w-full border-b border-gray-200">
  <div class="max-w-screen-2xl mx-auto flex justify-between py-4">
    <div class="w-64">
      <TextInput placeholder="search jobs..." full>
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
    <div
      class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"
    >
      <Button kind="primary" href="/jobs/create/index">
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span> New Job </span>
      </Button>
    </div>
  </div>
</div>

<div class="max-w-screen-2xl	mx-auto">
  <div class="my-8">
    <Jobs />
  </div>

  <Pagination bind:current={currentPage} numItems={50} perPage={3} />
</div>
