<script>
  import { isActive, layout, page, prefetch } from "@roxi/routify";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import Transistion from "../../../lib/Transistion.svelte";

  const job = writable({});

  setContext("Jobs_Context", {
    job,
  });
  $: console.log($job);
</script>

<main class="mx-auto pb-10 lg:py-12 px-4 w-full">
  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
    <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
      <nav class="space-y-1">
        <!-- Current: "bg-gray-50 text-orange-600 hover:bg-white", Default: "text-gray-900 hover:text-gray-900 hover:bg-gray-50" -->
        <h1
          class="text-gray-900 group rounded-md px-3 py-2 flex items-center text-lg font-medium"
        >
          Job
        </h1>
        <a
          href="/jobs/create/index"
          use:prefetch
          class="text-gray-900 hover:text-gray-900 hover:bg-yellow-100 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
          class:bg-yellow-100={$isActive("/jobs/create/index")}
        >
          <span class="truncate"> Job Details </span>
        </a>

        <a
          href="/jobs/create/description"
          class="text-gray-900 hover:text-gray-900 hover:bg-yellow-100 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
          class:bg-yellow-100={$isActive("/jobs/create/description")}
          use:prefetch
        >
          <span class="truncate"> Job description </span>
        </a>

        <a
          href="/jobs/create/application"
          class:bg-yellow-100={$isActive("/jobs/create/application")}
          use:prefetch
          class="text-gray-900 hover:text-gray-900 hover:bg-yellow-100 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
        >
          <span class="truncate"> Application form </span>
        </a>

        <h1
          class="text-gray-900 group rounded-md px-3 py-2 flex items-center text-lg font-medium"
        >
          Settings
        </h1>
        <a
          href="/jobs/create/hiringteam"
          class:bg-yellow-100={$isActive("/jobs/create/hiringteam")}
          use:prefetch
          class="text-gray-900 hover:text-gray-900 hover:bg-yellow-100 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
        >
          <span class="truncate"> Hiring team </span>
        </a>

        <a
          href="#"
          class="text-gray-900 hover:text-gray-900 hover:bg-yellow-100 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
        >
          <span class="truncate"> Hiring stages </span>
        </a>

        <a
          href="/jobs/create/confirmationemail"
          class:bg-yellow-100={$isActive("/jobs/create/confirmationemail")}
          use:prefetch
          class="text-gray-900 hover:text-gray-900 hover:bg-yellow-100 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
        >
          <span class="truncate"> Confirmation email </span>
        </a>

        <a
          href="/jobs/create/internal"
          class:bg-yellow-100={$isActive("/jobs/create/internal")}
          use:prefetch
          class="text-gray-900 hover:text-gray-900 hover:bg-yellow-100 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
        >
          <span class="truncate"> Internal settings </span>
        </a>
      </nav>
    </aside>

    <slot decorator={Transistion} />
  </div>
</main>
