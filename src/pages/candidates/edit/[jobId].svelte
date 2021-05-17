<script>
  export let jobId;
  import { mutate, useSWR } from "sswr";

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${jobId}`,
    {
      dedupingInterval: 100,
    }
  );
</script>

{#if $data}
  <h1 class="text-4xl text-gray-700 text-center">{$data.email}</h1>
  <input bind:value={$data.email} />
{/if}
