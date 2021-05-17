<script lang="ts">
  import { getContext } from "svelte";
  import { get } from "svelte/store";

  const { selectedTabIndex, currentIndex } = getContext("TABS_KEY");

  const index = get(currentIndex);

  $currentIndex++;
</script>

<button
  class=" focus:outline-transparent block w-full bg-gray-50 py-4"
  on:click={() => ($selectedTabIndex = index)}
>
  <slot />
</button>
