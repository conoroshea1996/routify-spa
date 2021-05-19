<script>
  import { fade } from "svelte/transition";
</script>

<div class="space-y-6 lg:col-span-10" in:fade|local={{ duration: 300 }}>
  <slot />
</div>
