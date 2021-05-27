<script>
  export let emailId;
</script>

<div class=" lg:min-w-0 lg:flex-1 bg-gray-50">
  <h1>Show thread for {emailId}</h1>

  <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
    <!-- Start main area-->
    <ul
      class="bg-white  border border-gray-200 rounded-md p-8 overflow-y-auto h-80 emailThread"
    >
      <li>
        <div class="relative pb-16">
          <span
            class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
          <div class="relative flex items-start space-x-3">
            <div class="relative">
              <img
                class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                alt=""
              />

              <span
                class="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px"
              >
                <!-- Heroicon name: solid/chat-alt -->
                <svg
                  class="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div class="min-w-0 flex-1">
              <div>
                <div class="text-sm">
                  <p class="font-medium text-gray-900">Max</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">email Date</p>
              </div>
              <div class="mt-2 text-sm text-gray-700">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt nunc ipsum tempor purus vitae id. Morbi in
                  vestibulum nec varius. Et diam cursus quis sed purus nam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div class="bg-white  border border-gray-200 rounded-md p-8 my-6" />
  </div>
</div>

<style>
  .emailThread li:last-child div {
    @apply pb-0;
  }
  .emailThread li:last-child div span:first-child {
    @apply hidden;
  }
</style>
