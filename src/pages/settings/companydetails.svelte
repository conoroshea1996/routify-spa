<script>
  import { getContext } from "svelte";

  let x = getContext("HH_SETTTINGS_PAGE_");

  console.log(x);
</script>

<h1 class="text-center">Company Settings</h1>
<section class="bg-white">
  <div class="shadow sm:rounded-md sm:overflow-hidden h-full">
    <div
      class="flex items-center justify-between w-full border-b border-gray-100 px-2"
    >
      <h1 class=" text-xl font-semibold p-4 ">Application form</h1>

      <div class="mx-6" />
    </div>
    <div class="px-4 py-3 sm:px-6 h-full">
      <div class="my-2 flex flex-col justify-between item-center">
        <div class="w-1/4 flex">
          <span class="font-medium text-gray-800"> Personal Details</span>
        </div>

        <ul>
          <li class="border border-gray-200 rounded-md p-5 my-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div
                  class="bg-yellow-100 text-yellow-400 p-2 rounded-md shadow-sm mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="text-sm font-medium text-gray-900 truncate">
                  Name, Email, Location
                </p>
              </div>
              <button
                class="ml-2 flex-shrink-0 flex cursor-pointer"
                on:click={() => (personalModal = true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </li>
          <li class="border border-gray-200 rounded-md p-5 my-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div
                  class="bg-yellow-100 text-yellow-400 p-2 rounded-md shadow-sm mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p class="text-sm font-medium text-gray-900 truncate">
                  Education, Work Experience
                </p>
              </div>
              <button class="ml-2 flex-shrink-0 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>

      <div class="my-2 flex flex-col justify-between item-center">
        <div class="w-1/4 flex ">
          <span class="font-medium text-gray-800 ml-2">
            Additional Questions</span
          >
        </div>

        <ul>
          <li class="border border-gray-200 rounded-md p-5 my-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="ml-2">
                  <p class="font-medium text-gray-900 truncate">
                    Legal

                    <span class="text-gray-500 text-sm pl-2">
                      6 Questions
                    </span>
                  </p>
                </div>
              </div>
              <div class="ml-2 flex-shrink-0 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
