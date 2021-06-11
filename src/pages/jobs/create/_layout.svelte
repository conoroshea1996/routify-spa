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
  import SidebarNav from "../../../lib/SidebarNav/SidebarNav.svelte";
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

  const sections = [
    {
      heading: "Job",
      urls: [
        {
          name: "Job details",
          url: "/jobs/create/index",
        },
        {
          name: "Job description",
          url: "/jobs/create/description",
        },
        {
          name: "Application form",
          url: "/jobs/create/application",
        },
      ],
    },
    {
      heading: "Settings",
      urls: [
        {
          name: "Hiring team",
          url: "/jobs/create/hiringteam",
        },
        {
          name: "Hiring stages",
          url: "#",
        },
        {
          name: "Confirmation email",
          url: "/jobs/create/confirmationemail",
        },
        {
          name: "Internal settings",
          url: "/jobs/create/internal",
        },
      ],
    },
  ];
</script>

<div class="border-b  border-gray-200 w-full">
  <div
    class="mx-auto max-w-screen-2xl px-4 py-4  lg:flex lg:items-center lg:justify-between"
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

<main class="w-full px-4 mx-auto pb-10 lg:py-12">
  <div class="lg:grid lg:grid-cols-12 max-w-screen-2xl mx-auto px-4">
    <SidebarNav {sections} activeUrl="Job details" />

    <slot decorator={Transistion} />
  </div>
</main>
