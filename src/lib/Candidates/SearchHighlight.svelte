<script lang="ts">
  export let highlights: any;
  let hasHighlights: boolean;

  let tags: string;
  let coverLetter: string;
  let resume: string;
  let location: string;

  tags =
    highlights.tags &&
    highlights.tags.some((tag: any) => {
      return tag.matchLevel !== "none";
    })
      ? highlights.tags
      : null;

  coverLetter =
    highlights.coverLetter && highlights.coverLetter.matchLevel !== "none"
      ? highlights.coverLetter.value
      : null;

  resume =
    highlights.resumeText && highlights.resumeText.matchLevel !== "none"
      ? highlights.resumeText.value
      : null;

  location =
    highlights.currentLocation &&
    highlights.currentLocation.matchLevel !== "none"
      ? highlights.currentLocation.value
      : null;

  hasHighlights =
    tags !== null ||
    coverLetter !== null ||
    resume !== null ||
    location != null;
</script>

{#if hasHighlights}
  <div class="px-2 w-full flex flex-col space-y-1 py-1 relative h-full">
    {#if coverLetter}
      <div class="rounded-md bg-gray-50 flex py-2 space-x-3 px-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-900"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
          />
          <path
            fill-rule="evenodd"
            d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="text-gray-600">{@html coverLetter}</p>
      </div>
    {/if}
    {#if resume}
      <div class="rounded-md bg-gray-50 flex py-2 space-x-3 px-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-900"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
          />
          <path
            fill-rule="evenodd"
            d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="text-gray-600">{@html resume}</p>
      </div>
    {/if}

    {#if location}
      <div class="rounded-md bg-gray-50  flex py-2 space-x-3 px-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-900"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"
          />
          <path
            fill-rule="evenodd"
            d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="text-gray-600">{@html location}</p>
      </div>
    {/if}
  </div>
{/if}

<style global>
  .highlight {
    @apply bg-yellow-200;
  }
</style>
