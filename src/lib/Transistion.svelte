<script>
  import { fly } from "svelte/transition";
</script>

<div
  class="space-y-6  lg:col-span-9 "
  out:fly|local={{ duration: 300, y: 250 }}
>
  <slot />
</div>
