<script>
  import { fade } from "svelte/transition";
</script>

<div class="lg:col-span-10 py-4" in:fade|local={{ duration: 300 }}>
  <slot />
</div>
