<script lang="ts">
  // list of mentions;
  export let items: any[];
  export let command: Function;
  export let query: string;
  export let cords: (() => DOMRect) | null;

  let menuCordinates: DOMRect | null;
  $: menuCordinates = cords ? cords() : null;
  let selectedIndex = 0;

  export const onKeyDown = ({ event }: { event: KeyboardEvent }) => {
    if (event.key === "ArrowUp") {
      upHandler();
      return true;
    }

    if (event.key === "ArrowDown") {
      downHandler();
      return true;
    }

    if (event.key === "Enter") {
      selectItem(selectedIndex);
      return true;
    }
    return false;
  };

  function upHandler() {
    selectedIndex = (selectedIndex + items.length - 1) % items.length;
  }

  function downHandler() {
    selectedIndex = (selectedIndex + 1) % items.length;
  }

  export function selectItem(index) {
    const item = items[index];

    if (item) {
      command({ id: item, query });
    }
  }
</script>

{#if items.length > 0 && menuCordinates}
  <div
    class="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-30"
    style="left:{menuCordinates.left + 10}px; top:{menuCordinates.top + 10}px;"
    role="menu"
  >
    <ul class="py-1" role="none">
      {#each items as item, index}
        <li
          class="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
          class:bg-gray-50={selectedIndex === index}
          role="menuitem"
          tabindex="-1"
          on:click={() => selectItem(index)}
        >
          {item}
        </li>
      {/each}
    </ul>
  </div>
{/if}
