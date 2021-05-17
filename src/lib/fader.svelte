<script>
  import { fly } from "svelte/transition";
</script>

<div
  class="space-y-6  lg:col-span-9 bg-white"
  in:fly={{ y: 300, duration: 500 }}
>
  <slot />
</div>
