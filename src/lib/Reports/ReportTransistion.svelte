<script>
  import { fly } from "svelte/transition";
</script>

<div in:fly|local={{ y: 300, duration: 300 }}>
  <slot />
</div>
