<script>
  import { flip } from "svelte/animate";
  import {
    Button,
    Modal,
    Switch,
    CheckBox,
    TextInput,
    Select,
  } from "hirehive-ui";
  import { forms } from "../../types/forms";
  import { dndzone } from "svelte-dnd-action";
  import EditForm from "../../lib/Forms/editApplicationForm.svelte";
  import AddApplicationForm from "../../lib/Forms/addApplicationForm.svelte";
  const flipDurationMs = 150;
  let errors = {
    continueForm: false,
  };

  // modal statuses
  let personalDetailsModal = false;
  let workExperienceModal = false;
  let createFormModal = false;

  let newForm = {
    name: "",
    typeid: 1,
    questions: [],
  };

  let activeFormDetails = {
    name: "",
    questions: [],
  };

  const continueForm = () => {
    if (!newForm.name) {
      errors.continueForm = true;
    } else {
      addForm = true;
      createFormModal = false;
    }
    activeFormDetails = {
      name: "",
      questions: [],
    };
    activeQuestions = [];
  };

  const deleteForm = (e) => {
    $forms = $forms.filter((f) => f.id !== e.detail.form.id);
  };

  let editForm = false;
  let addForm = false;
</script>

<div class="w-full px-6">
  <div class="mx-auto py-4  lg:flex lg:items-center lg:justify-between">
    <div class="font-medium tracking-tight text-gray-500  flex w-1/2">
      <div>
        <h1 class="text-gray-900 text-3xl font-bold">Application form</h1>

        <div class="my-2">
          <p class="flex items-center font-medium text-gray-500">
            Create questions that can be added to any job application form. <a
              class="text-blue-500 ml-1"
            >
              Learn more.
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="flex  items-center">
      <Button kind="primary" on:click={() => (createFormModal = true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="mx-1 ml-2"> Create question group </span>
      </Button>
    </div>
  </div>
</div>

<main class="px-6">
  <h1 class="font-bold">Default</h1>
  <ul>
    <li class="border bg-white border-gray-200 rounded-md p-5 my-2">
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
          on:click={() => (personalDetailsModal = true)}
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
    <li class="border bg-white border-gray-200 rounded-md p-5 my-2">
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
        <button
          class="ml-2 flex-shrink-0 flex"
          on:click={() => (workExperienceModal = true)}
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
  </ul>

  {#if $forms.length > 0}
    <h1 class="font-bold">Additional questions</h1>
    <ul>
      {#each $forms as form}
        <li class="border bg-white border-gray-200 rounded-md p-5 my-2">
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
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <p class="text-sm font-medium text-gray-900 truncate pr-2">
                {form.name}
              </p>

              <p class="text-sm text-gray-500">
                {form.questions.length} Questions
              </p>
            </div>
            <button
              class="ml-2 flex-shrink-0 flex cursor-pointer"
              on:click={() => {
                activeFormDetails = form;
                editForm = true;
              }}
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
      {/each}
    </ul>
  {/if}
</main>

<Modal bind:open={personalDetailsModal}>
  <div slot="header" class="px-4">
    <h1 class="text-gray-900 text-xl font-bold py-2">Personal details</h1>
    <p class="text-gray-500 py-2">
      Select what should be included or required in the application form.
    </p>
  </div>

  <div slot="content" class="flex flex-col my-2 px-4">
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

  <div slot="footer" class="flex justify-end mt-4 px-4">
    <div>
      <Button kind="white" on:click={() => (personalDetailsModal = false)}
        >Cancel</Button
      >
      <Button kind="primary">Apply changes</Button>
    </div>
  </div>
</Modal>

<Modal bind:open={workExperienceModal}>
  <div slot="header" class="px-4">
    <h1 class="text-gray-900 text-xl font-bold py-2">Personal details</h1>
    <p class="text-gray-500 py-2">
      Select what should be included or required in the application form.
    </p>
  </div>

  <div slot="content" class="flex flex-col my-2 px-4">
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
                  <Switch labelPostion="right">
                    <span slot="label" class="text-gray-500 pl-3">
                      Current title
                    </span>
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
                      Current company
                    </span>
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
                      Cover letter
                    </span>
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
                      Resume/CV
                    </span>
                  </Switch>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center justify-end"
                >
                  <CheckBox size="medium" />
                  <span class="text-gray-500 pl-3"> Required </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div slot="footer" class="flex justify-end mt-4 px-4">
    <div>
      <Button kind="white" on:click={() => (workExperienceModal = false)}
        >Cancel</Button
      >
      <Button kind="primary">Apply changes</Button>
    </div>
  </div>
</Modal>

<Modal bind:open={createFormModal}>
  <div
    class="flex justify-between items-center w-screen max-w-lg py-2 px-8"
    slot="header"
  >
    <h1 class="text-gray-900 text-xl font-bold ">Create question group</h1>
    <button on:click={() => (createFormModal = false)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>

  <div slot="content" class="flex flex-col my-4 px-8">
    <TextInput
      bind:value={newForm.name}
      full
      placeholder="Form name"
      label="Form title"
      hasError={errors.continueForm}
      errorMessage="Form Name required"
    />

    <div class="mt-6">
      <Button kind="primary" full on:click={() => continueForm()}
        >Continue</Button
      >
    </div>
  </div>
</Modal>

<AddApplicationForm
  bind:open={addForm}
  formName={newForm.name}
  on:save={(e) => {
    $forms = [...$forms, e.detail.form];
    createFormModal = false;
  }}
/>

<EditForm
  bind:open={editForm}
  form={activeFormDetails}
  on:save={(e) => {
    let idx = $forms.findIndex((f) => f.id === e.detail.form.id);
    $forms[idx] = e.detail.form;
    activeFormDetails = e.detail.form;
    console.log($forms);
  }}
  on:delete={(e) => deleteForm(e)}
/>
