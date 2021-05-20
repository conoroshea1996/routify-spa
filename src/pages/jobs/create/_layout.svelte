<script>
  import {
    goto,
    isActive,
    layout,
    page,
    prefetch,
    params,
  } from "@roxi/routify";
  import Button from "hirehive-ui/src/Button/Button.svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import Transistion from "../../../lib/Transistion.svelte";
  import { jobs } from "../../../stores/jobs";
  export let jobId = $params.jobId ? parseInt($params.jobId) : null;

  const job = writable({});

  let jobDetails;
  // is editing a job
  if (jobId) {
    jobDetails = $jobs.find((j) => j.id === jobId);
    $job = jobDetails;
  }

  const formErrors = writable({
    jobTitle: false,
    location: false,
    country: false,
  });

  const handleFormSubmit = () => {
    let invalid;
    if (!$job.title) {
      invalid = true;
      $formErrors.jobTitle = true;
    }
    if (!$job.location) {
      invalid = true;
      $formErrors.location = true;
    }
    if (!$job.country) {
      invalid = true;
      $formErrors.country = true;
    }

    if (invalid) {
      $goto("/jobs/create/index");
    }
  };

  setContext("Jobs_Context", {
    job,
    formErrors,
    handleFormSubmit,
  });
</script>

<div class="border-b  border-gray-200 w-full">
  <div
    class="mx-auto max-w-screen-2xl py-4  lg:flex lg:items-center lg:justify-between"
  >
    <div
      class="font-medium tracking-tight text-gray-500  flex items-center text-2xl"
    >
      <a href="/index" class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 pr-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <h1 class="pr-2 ">Add Job /</h1>
      </a>
      <h1 class="text-gray-900">{$job.title}</h1>
    </div>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-3">
      <Button kind="white">Save as Draft</Button>
      <Button
        kind="primary"
        on:click={() => handleFormSubmit()}
        disabled={$isActive("/jobs/create/index") ||
          $isActive("/jobs/create/description")}>Publish Job</Button
      >
    </div>
  </div>
</div>

<main class="max-w-screen-2xl mx-auto pb-10 lg:py-12">
  <div class="lg:grid lg:grid-cols-12">
    <aside class="py-6 lg:py-0  lg:col-span-2 pr-6">
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
