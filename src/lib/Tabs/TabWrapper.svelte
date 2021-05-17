<script lang="ts">
  import { onMount, setContext } from "svelte";

  import { writable } from "svelte/store";
  import type { Writable } from "svelte/store";

  const selectedTabIndexTracker = () => {
    const { subscribe, update }: Writable<number> = writable(0);
    const prevIndex: Writable<number> = writable(0);

    return {
      prevIndex,
      set: (value: number) => {
        return update((prevValue) => {
          prevIndex.set(prevValue);
          return value;
        });
      },
      subscribe,
    };
  };

  export let fullUnmount: boolean = true;

  const selectedTabIndex = selectedTabIndexTracker();
  const currentIndex: Writable<number> = writable(0);

  setContext("TABS_KEY", {
    selectedTabIndex,
    currentIndex,
    fullUnmount,
  });
</script>

<div>
  <slot currentPanel={$selectedTabIndex} />
</div>
