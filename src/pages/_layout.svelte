<script lang="ts">
  import { url } from "@roxi/routify";
  import Navbar from "$lib/Navbar/navbar.svelte";
</script>

<Navbar />

<main class="max-w-6xl mx-auto mt-4">
  <slot />
</main>
