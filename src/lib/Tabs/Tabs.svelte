<script lang="ts">
  import { getContext, onMount } from "svelte";

  import { tweened } from "svelte/motion";
  import { backInOut } from "svelte/easing";

  let TabBar: HTMLElement;

  let sliderPos = tweened(0, {
    duration: 300,
    easing: backInOut,
  });
  let percentage = 0;

  const updatePostion = (selectedIndex: number) => {
    sliderPos.set(percentage * selectedIndex);
  };

  const { selectedTabIndex } = getContext("TABS_KEY");

  $: updatePostion($selectedTabIndex);

  onMount(() => {
    percentage = 100 / TabBar.querySelectorAll("button").length;
  });
</script>

<nav bind:this={TabBar} class="relative flex justify-around">
  <slot x={$selectedTabIndex} />
  <span
    class="bg-yellow-700 h-1 absolute bottom-0 w-10"
    style="left:{$sliderPos}%; width:{percentage}%"
  />
</nav>
