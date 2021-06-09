<script lang="ts">
  export let firstName: string;
  export let lastName: string;
  export let profilePic: string | null;

  const color = ["bg-yellow-400", "bg-blue-400", "bg-red-400", "bg-green-400"];
  const randomColor = () => {
    return color[Math.floor(Math.random() * color.length)];
  };
</script>

{#if profilePic}
  <img
    class="h-8 w-8 rounded-full"
    src={profilePic}
    alt="{firstName}{lastName}"
  />
{:else}
  <span
    class="inline-flex items-center justify-center h-8 w-8 rounded-full {randomColor()}"
  >
    <span
      class="text-xs font-medium leading-none text-white capitalize tracking-tightest"
    >
      {firstName.charAt(0)}
      {lastName.charAt(0)}
    </span>
  </span>
{/if}
