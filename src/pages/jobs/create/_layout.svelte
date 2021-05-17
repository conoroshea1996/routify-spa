<script lang="ts">
  import { isActive, page } from "@roxi/routify";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import Fader from "../../../lib/fader.svelte";

  const job = writable({});

  setContext("Jobs_Context", {
    job,
  });

  $: console.log($job);
</script>

<h1>Current Job Details</h1>
{JSON.stringify($job)}

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
          class="text-gray-900 hover:text-gray-900 hover:bg-yellow-100 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
          class:bg-yellow-100={$isActive("/jobs/create/index")}
        >
          <span class="truncate"> Job Details </span>
        </a>

        <a
          href="/jobs/create/description"
          class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
          class:bg-yellow-100={$isActive("/jobs/create/description")}
        >
          <span class="truncate"> Job description </span>
        </a>

        <a
          href="#"
          class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
        >
          <span class="truncate"> Password </span>
        </a>

        <a
          href="#"
          class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
        >
          <span class="truncate"> Notifications </span>
        </a>

        <a
          href="#"
          class="bg-gray-50 text-orange-600 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium"
          aria-current="page"
        >
          <span class="truncate"> Plan &amp; Billing </span>
        </a>

        <a
          href="#"
          class="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium"
        >
          <span class="truncate"> Integrations </span>
        </a>
      </nav>
    </aside>

    <slot decorator={Fader} />
  </div>
</main>
