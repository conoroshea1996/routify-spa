<script lang="ts">
  import { getContext, onMount } from "svelte";
  import { fly } from "svelte/transition";

  const { selectedTabIndex, fullUnmount } = getContext("TABS_KEY");

  let flyInFrom = 1400;
  const prevValue = selectedTabIndex.prevIndex;

  const calculateIndex = (currentValue: number) => {
    if ($prevValue > currentValue) {
      flyInFrom = -1400;
    } else {
      flyInFrom = 1400;
    }
  };

  $: calculateIndex($selectedTabIndex);
  export let id: number;

  onMount(() => {
    console.log("Mounted");
  });
</script>

{#if id === $selectedTabIndex}
  <div in:fly={{ x: flyInFrom, duration: 500 }}>
    <slot />
  </div>
{/if}
