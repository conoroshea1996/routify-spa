<script>
  import { setContext } from "svelte";
  import { afterPageLoad } from "@roxi/routify";

  setContext("HH_SETTTINGS_PAGE_", {
    set: "test",
  });
</script>

<div class="flex">
  <div class="bg-red-200  w-96 h-100vh flex flex-col">
    <a href="/settings/comp" class="py-4 flex bg-white my-2">
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">Comp</p>
      </div>
    </a>
    <a href="/settings/plans" class="py-4 flex bg-white my-2">
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">Plans</p>
      </div>
    </a>
  </div>
</div>
