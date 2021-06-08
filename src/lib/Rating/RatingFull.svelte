<script lang="ts">
  export let rating: number;
  import { toolTip } from "hirehive-ui";
  import { createEventDispatcher } from "svelte";

  const ratings: { [key: number]: string } = {
    0: "Poor",
    1: "Fair",
    2: "Good",
    3: "Great",
    4: "Excellent",
  };

  const dispatch = createEventDispatcher();
  const updateRating = (rating: number) => {
    dispatch("rating", rating + 1);
  };
</script>

{#each { length: 5 } as star, i}
  <button
    on:click={() => updateRating(i)}
    use:toolTip={{
      position: "top",
      text: ratings[i],
    }}
  >
    <svg
      class="mx-1 w-4 h-4 fill-current
            {i >= rating ? 'text-gray-300' : 'text-yellow-400'}
          "
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      ><path
        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
      /></svg
    >
  </button>
{/each}
