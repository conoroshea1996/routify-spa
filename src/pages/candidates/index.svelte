<script>
  import { url } from "@roxi/routify";

  import { mutate, useSWR } from "sswr";

  import { onMount, setContext } from "svelte";

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
