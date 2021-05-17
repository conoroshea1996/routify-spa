<script lang="ts">
  import { onMount } from "svelte";
  import { todoStore } from "../../stores/Todo";

  const { todos, loading, getTodos } = todoStore;
  onMount(async () => {
    await getTodos();
  });
</script>

<nav class="space-y-1" aria-label="Sidebar">
  {#if $loading}
    Loading
  {:else}
    {#each $todos as todo}
      <div
        class="bg-gray-100 text-gray-900 flex justify-around items-center px-3 py-2 text-sm font-medium rounded-md"
        aria-current="page"
      >
        <span class="truncate">
          {todo.title}
        </span>
        <button
          class="bg-red-800 px-2 py-1 text-white"
          on:click={async () => await todoStore.deleteTodo(todo.userId)}
          >Delete</button
        >
      </div>
    {/each}
  {/if}
</nav>
