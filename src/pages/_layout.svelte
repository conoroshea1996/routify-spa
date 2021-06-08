<script>
  import Navbar from "$lib/Navbar/navbar.svelte";
</script>

<div class="relative min-h-screen flex flex-col">
  <Navbar />

  <main class="flex-grow flex flex-col">
    <slot />
  </main>
</div>
