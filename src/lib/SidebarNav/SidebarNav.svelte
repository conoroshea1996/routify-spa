<script>
  import { prefetch } from "@roxi/routify/runtime/Prefetcher.svelte";

  export let sections;
  export let activeUrl;
</script>

<aside class="lg:col-span-2 pr-6">
  <nav>
    {#each sections as section}
      <h1
        class="uppercase text-gray-900 group rounded-md px-3 py-2 flex items-center text-lg font-medium"
      >
        {section.heading}
      </h1>

      {#each section.urls as { url, name }}
        <a
          href={url}
          use:prefetch
          on:click={() => (activeUrl = name)}
          class="text-gray-500 hover:text-gray-900 hover:bg-yellow-100 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
          class:text-gray-900={activeUrl === name}
          class:bg-yellow-100={activeUrl === name}
        >
          <span class="truncate"> {name} </span>
        </a>
      {/each}
    {/each}
  </nav>
</aside>
