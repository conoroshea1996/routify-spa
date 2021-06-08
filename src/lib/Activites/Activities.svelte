<script>
  export let activites;
</script>

<ul class="py-8 px-12 w-full activity-list">
  {#each activites as activity}
    {#if activity.activities.length > 0}
      {#each activity.activities as activity}
        <li>
          <div class="relative pb-8">
            <span
              class="absolute top-4 line left-4 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            />
            <div class="relative flex space-x-3">
              <div>
                <span
                  class="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center ring-8 ring-white"
                >
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p class="text-sm text-gray-500">
                    {@html activity.message}
                  </p>
                </div>
                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                  <time datetime="2020-09-28">{@html activity.date}</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      {/each}
    {/if}
  {/each}
</ul>

<style global>
  .activity-list li:last-child div {
    @apply pb-0;
  }
  .activity-list li:last-child div .line {
    @apply hidden;
  }
</style>
