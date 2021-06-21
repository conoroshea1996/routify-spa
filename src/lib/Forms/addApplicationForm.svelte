<script>
  import {
    Modal,
    Button,
    TextInput,
    Switch,
    Select,
    clickOutside,
  } from "hirehive-ui";
  import { createEventDispatcher, onMount } from "svelte";
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import { candidateTags } from "../../stores/tags";
  import Tags from "../Candidates/Tags.svelte";

  const flipDurationMs = 500;
  export let open;
  export let formName;
  let questions = [];

  let form = {
    name: "",
    questions,
  };
  let dragDisabled = false;
  const dispatch = createEventDispatcher();
  const deleteForm = () => {
    dispatch("delete", {
      form,
    });
  };
  const saveForm = () => {
    form.questions = questions;
    form.name = formName;
    dispatch("save", {
      form,
    });
    open = false;
  };

  function handleDndConsider(e) {
    questions = e.detail.items;
  }
  function handleDndFinalize(e) {
    questions = e.detail.items;
  }
  const deleteQuestion = (question) => {
    questions = questions.filter((q) => q !== question);
  };
  const addNewQuestionToForm = () => {
    newQuestion.id = questions.length;
    questions = [...questions, newQuestion];
    addQuestionModal = false;
    open = true;
    newQuestion = {};
  };

  let addQuestionModal;
  let editQuestionModal;
  let questionToEdit;

  let newQuestion = {
    question: "",
    type: "",
    options: [],
  };

  let newOptionLabel = "";

  let addOption = false;

  const handleAddOption = () => {
    if (addOption) {
      const newOption = {
        label: newOptionLabel,
        id: Math.random().toString(36).slice(-6),
        optionMenu: false,
      };
      newQuestion.options = [...newQuestion.options, newOption];
      newOptionLabel = "";
    } else {
      addOption = true;
    }
  };

  const addTagToOption = (e, option) => {
    const tag = e.detail.tag;
    option.tag = tag;
  };

  let activeMenuIndex = null;
</script>

<Modal bind:open>
  <div
    class="flex justify-between items-center w-screen max-w-7xl py-4 border-b border-gray-200 px-8"
    slot="header"
  >
    <h1 class="text-gray-900 text-xl font-bold">
      {formName}
    </h1>

    <Button kind="secondary" on:click={() => deleteForm()}>Delete form</Button>
  </div>

  <div slot="content" class="flex flex-col px-8 py-4">
    {#if questions}
      <ul
        class="overflow-y-auto"
        use:dndzone={{
          items: questions,
          flipDurationMs,
          dragDisabled,
        }}
        on:finalize={handleDndConsider}
        on:consider={handleDndFinalize}
      >
        {#each questions as question (question.id)}
          <li
            class="border border-gray-200 rounded-md p-5 my-2"
            draggable="false"
            animate:flip={{ duration: flipDurationMs }}
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span
                  tabindex="0"
                  class="px-6 py-2  hover:cursor-move"
                  on:mouseover={() => (dragDisabled = false)}
                  on:mouseout={() => (dragDisabled = true)}
                >
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <div
                  class="bg-yellow-100 text-yellow-400 p-2 rounded-md shadow-sm mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p class="text-sm font-medium text-gray-900 truncate">
                  {question.question}
                </p>
              </div>
              <div class="flex space-x-8 px-8 text-gray-500">
                <button
                  on:click={() => {
                    questionToEdit = question;
                    editQuestionModal = true;
                    open = false;
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 "
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

                <button on:click={() => deleteQuestion(question)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    {/if}
    <div class="border bg-white border-gray-200 rounded-md p-5 my-2">
      <div class="flex items-center justify-between">
        <button
          class="flex items-center text-blue-500"
          on:click={() => {
            addQuestionModal = true;
            open = false;
          }}
        >
          <div class="p-2 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <p class="text-sm font-medium  truncate">Add question</p>
        </button>
      </div>
    </div>
  </div>

  <div slot="footer" class="flex justify-end py-4 px-8">
    <div>
      <Button kind="white" on:click={() => (open = false)}>Cancel</Button>
      <Button kind="primary" on:click={() => saveForm()}>Save</Button>
    </div>
  </div>
</Modal>

<Modal bind:open={addQuestionModal} hideOverflow={false}>
  <div
    slot="header"
    class="flex justify-between items-center w-screen max-w-5xl py-4 border-b border-gray-200 px-8"
  >
    <h1 class="text-gray-900 text-xl font-bold py-2">Add Question</h1>
  </div>

  <div slot="content" class="flex flex-col my-4 px-8">
    <div class="my-2 flex justify-between item-center">
      <div class="w-1/4 flex items-center">
        <span class="font-medium text-gray-500"> Question</span>
      </div>
      <div class="w-3/4">
        <TextInput
          full
          placeholder="Write your question"
          bind:value={newQuestion.question}
        />
      </div>
    </div>

    <div class="my-2 flex justify-between item-center">
      <div class="w-1/4 flex items-center">
        <span class="font-medium text-gray-500"> Question type</span>
      </div>
      <div class="w-3/4">
        <Select
          options={[
            "Single line answer",
            "Paragraph answer",
            "Multiple choice",
            "Checkboxes",
            "Dropdown",
            "File input",
          ]}
          full
          bind:value={newQuestion.type}
          placeholder="Question type"
        />
      </div>
    </div>

    <div class="my-2 flex justify-between item-center">
      <div class="w-1/4 flex items-center">
        <span class="font-medium text-gray-500">Options</span>
      </div>
      <div class="w-3/4">
        <div class="bg-white border border-gray-300 rounded-md">
          <ul class="divide-y divide-gray-300">
            {#each newQuestion.options as option, index}
              <li class="px-6 py-3 flex items-center justify-between">
                <span class="font-medium text-gray-700 flex items-center">
                  {option.label}
                </span>
                {#if !option.tag}
                  <Tags
                    on:click={() => (activeMenuIndex = index)}
                    bind:open={option.optionMenu}
                    autoComplete={candidateTags}
                    autoCompleteKey={"name"}
                    onlyAutocomplete={false}
                    placeholder="Add Tag"
                    loadAll={true}
                    position="right"
                    on:tagAdded={(e) => addTagToOption(e, option)}
                  >
                    <span
                      class="inline-flex px-3.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Add Tag
                    </span>
                    <span slot="create" let:value>
                      Add New Tag {value}
                    </span>
                  </Tags>
                {:else}
                  <span
                    class="inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700"
                  >
                    {option.tag.name}
                    <button
                      type="button"
                      on:click={() => (option.tag = null)}
                      class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    >
                      <svg
                        class="h-2 w-2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-width="1.5"
                          d="M1 1l6 6m0-6L1 7"
                        />
                      </svg>
                    </button>
                  </span>
                {/if}
              </li>
            {/each}

            <li
              use:clickOutside={() => {
                addOption = false;
                newOptionLabel = "";
              }}
              class="px-4 space-x-4 flex items-center py-2"
            >
              {#if addOption}
                <TextInput bind:value={newOptionLabel} />
              {/if}
              <button
                on:click={() => handleAddOption()}
                class="font-medium text-blue-500"
              >
                Add Option</button
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="my-4 flex justify-between item-center">
      <div class="w-1/4 flex items-start">
        <span class="font-medium text-gray-500"> Settings</span>
      </div>
      <div class="w-3/4 flex flex-col justify-end space-y-4">
        <div
          class="border border-gray-300 rounded-md shadow-sm px-4 flex justify-between items-center py-2"
        >
          <span class="font-medium text-gray-700"> Require an answer</span>

          <Switch bind:value={newQuestion.required} />
        </div>

        <div
          class="border border-gray-300 rounded-md shadow-sm px-4 flex justify-between items-center py-2"
        >
          <span class="font-medium text-gray-700">
            Restricted view on answer</span
          >
          <Switch bind:value={newQuestion.private} />
        </div>
      </div>
    </div>
  </div>

  <div slot="footer" class="flex justify-end py-4 px-8">
    <div>
      <Button
        kind="white"
        on:click={() => {
          addQuestionModal = false;
          open = true;
        }}>Discard</Button
      >
      <Button kind="primary" on:click={() => addNewQuestionToForm()}
        >Add question</Button
      >
    </div>
  </div>
</Modal>

<Modal bind:open={editQuestionModal} hideOverflow={false}>
  <div
    slot="header"
    class="flex justify-between items-center w-screen max-w-5xl py-4 border-b border-gray-200 px-8"
  >
    <h1 class="text-gray-900 text-xl font-bold py-2">Add Question</h1>
  </div>

  <div slot="content" class="flex flex-col my-4 px-8">
    <div class="my-2 flex justify-between item-center">
      <div class="w-1/4 flex items-center">
        <span class="font-medium text-gray-500"> Question</span>
      </div>
      <div class="w-3/4">
        <TextInput
          full
          placeholder="Write your question"
          bind:value={questionToEdit.question}
        />
      </div>
    </div>

    <div class="my-2 flex justify-between item-center">
      <div class="w-1/4 flex items-center">
        <span class="font-medium text-gray-500"> Question type</span>
      </div>
      <div class="w-3/4">
        <Select
          options={["Multiple Choice", "Single line"]}
          full
          bind:value={questionToEdit.type}
          placeholder="Question type"
        />
      </div>
    </div>

    <div class="my-2 flex justify-between item-center">
      <div class="w-1/4 flex items-center">
        <span class="font-medium text-gray-500">Options</span>
      </div>
      <div class="w-3/4">
        <div class="bg-white border border-gray-300 rounded-md">
          <ul class="divide-y divide-gray-300">
            {#each questionToEdit.options as option, index}
              <li class="px-6 py-3 flex items-center justify-between">
                <span class="font-medium text-gray-700 flex items-center">
                  {option.label}
                </span>
                {#if !option.tag}
                  <Tags
                    on:click={() => (activeMenuIndex = index)}
                    bind:open={option.optionMenu}
                    autoComplete={candidateTags}
                    autoCompleteKey={"name"}
                    onlyAutocomplete={false}
                    placeholder="Add Tag"
                    loadAll={true}
                    position="right"
                    on:tagAdded={(e) => addTagToOption(e, option.id)}
                  >
                    <span
                      class="inline-flex px-3.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Add Tag
                    </span>
                    <span slot="create" let:value>
                      Add New Tag {value}
                    </span>
                  </Tags>
                {:else}
                  <span
                    class="inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700"
                  >
                    {option.tag.name}
                    <button
                      type="button"
                      on:click={() => (option.tag = null)}
                      class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    >
                      <svg
                        class="h-2 w-2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-width="1.5"
                          d="M1 1l6 6m0-6L1 7"
                        />
                      </svg>
                    </button>
                  </span>
                {/if}
              </li>
            {/each}

            <li
              use:clickOutside={() => {
                addOption = false;
                newOptionLabel = "";
              }}
              class="px-4 space-x-4 flex items-center py-2"
            >
              {#if addOption}
                <TextInput bind:value={newOptionLabel} />
              {/if}
              <button
                on:click={() => handleAddOption()}
                class="font-medium text-blue-500"
              >
                Add Option</button
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div slot="footer" class="flex justify-end py-4 px-8">
    <div>
      <Button
        kind="white"
        on:click={() => {
          editQuestionModal = false;
        }}>Discard</Button
      >
      <Button
        kind="primary"
        on:click={() => {
          editQuestionModal = false;
          questions = questions;
        }}>Edit question</Button
      >
    </div>
  </div>
</Modal>
