<script>
  import Switch from "hirehive-ui/src/Inputs/Switch.svelte";
  import Button from "hirehive-ui/src/Button/Button.svelte";
  import Modal from "hirehive-ui/src/Modal/Modal.svelte";
  import CheckBox from "hirehive-ui/src/Inputs/CheckBox.svelte";
  import { getContext } from "svelte";

  let { job } = getContext("Jobs_Context");

  let personalModal = false;
</script>

<section>
  <div class="shadow sm:rounded-md sm:overflow-hidden h-full">
    <div
      class="flex items-center justify-between w-full border-b border-gray-300 px-2"
    >
      <h1 class=" text-xl font-semibold p-4 ">Application form</h1>

      <div class="mx-6">
        <Button kind="white" size="large">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
        </Button>
      </div>
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
              <div
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
              </div>
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

      <div class="my-2 flex flex-col justify-between item-center">
        <div class="w-1/4 flex ">
          <Switch bind:value={$job.additionalQuestions} />
          <span class="font-medium text-gray-800 ml-2">
            Additional Questions</span
          >
        </div>

        <ul>
          <li class="border border-gray-200 rounded-md p-5 my-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <CheckBox size="medium" />
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
      <div class="flex justify-end space-x-4">
        <Button kind="secondary">Next: Settings (optional)</Button>
        <Button kind="primary">Publish Job</Button>
      </div>
    </div>
  </div>
</section>

<Modal bind:open={personalModal}>
  <div slot="header">
    <h1 class="text-gray-900 text-xl font-bold py-2">Personal details</h1>
    <p class="text-gray-500 py-2">
      Select what should be included or required in the application form.
    </p>
  </div>

  <div slot="content" class="flex flex-col my-2">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-4xl sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs  text-gray-500  tracking-wider"
                >
                  Fields
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-right text-xs text-gray-500  tracking-wider"
                >
                  Require an answer
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  <Switch disabled value={true} labelPostion="right">
                    <span slot="label" class="text-gray-500 pl-3">
                      First name
                    </span>
                  </Switch>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <span class="text-gray-500 ">Always required</span>
                </td>
              </tr>

              <tr class="bg-white">
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  <Switch disabled value={true} labelPostion="right">
                    <span slot="label" class="text-gray-500 pl-3">
                      Last name
                    </span>
                  </Switch>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <span class="text-gray-500 ">Always required</span>
                </td>
              </tr>

              <tr class="bg-white">
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  <Switch disabled value={true} labelPostion="right">
                    <span slot="label" class="text-gray-500 pl-3"> Email </span>
                  </Switch>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <span class="text-gray-500 ">Always required</span>
                </td>
              </tr>

              <tr class="bg-white">
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  <Switch labelPostion="right">
                    <span slot="label" class="text-gray-500 pl-3"> Phone </span>
                  </Switch>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center justify-end"
                >
                  <CheckBox size="medium" />
                  <span class="text-gray-500 pl-3"> Required </span>
                </td>
              </tr>

              <tr class="bg-white">
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  <Switch labelPostion="right">
                    <span slot="label" class="text-gray-500 pl-3">
                      Location
                    </span>
                  </Switch>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center justify-end"
                >
                  <CheckBox size="medium" />
                  <span class="text-gray-500 pl-3"> Required </span>
                </td>
              </tr></tbody
            >
          </table>
        </div>
      </div>
    </div>
  </div>

  <div slot="footer" class="flex justify-end mt-4">
    <div>
      <Button kind="white">Cancel</Button>
      <Button kind="primary">Apply changes</Button>
    </div>
  </div>
</Modal>
