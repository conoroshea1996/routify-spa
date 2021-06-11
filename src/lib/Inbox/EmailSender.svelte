<script lang="ts">
  import { Button } from "hirehive-ui";
  import { createEventDispatcher } from "svelte";
  import Editor from "../../pages/editor.svelte";

  const dispatch = createEventDispatcher();

  let attachments: File[] = [];

  const onFileUpload = (e: Event) => {
    let files = (e.target as HTMLInputElement).files;
    let file: File | null = null;

    if (files && files.length > 0) {
      file = files[0];
      attachments = [...attachments, file];
      dispatch("fileUploaded", {
        file,
      });
    }
  };

  const removeFile = (attachment: File) => {
    attachments = attachments.filter((f) => f !== attachment);
  };
</script>

<div class="bg-white border border-gray-200 rounded-md">
  <div class="flex items-center py-8 border-b border-gray-200 px-8">
    <div class="flex items-center space-x-4">
      <p class="text-gray-500">CC:</p>

      <button class="flex items-center space-x-2 text-blue-500">
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
        Add
      </button>
    </div>
  </div>

  <div class="flex justify-between items-center py-8 border-b px-8">
    <div class="flex items-center space-x-4 ">
      <p class="text-gray-500">Subject:</p>

      <p class="text-gray-900">Re: Phone Screening</p>
    </div>

    <div>
      <button class="flex items-center space-x-2 text-blue-500">
        Insert template
      </button>
    </div>
  </div>

  <div>
    <Editor />
  </div>

  <div class="flex items-center justify-between px-8 py-2">
    <div class="flex items-center justify-between space-x-2">
      <div class="flex text-sm text-gray-600">
        <label
          for="file-upload"
          class="relative p-2 cursor-pointer bg-white rounded-md font-medium text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            class="sr-only"
            on:change={(e) => onFileUpload(e)}
          />
        </label>
      </div>
    </div>
    <div class="flex-1 flex justify-end">
      <div class="flex flex-1 flex-wrap space-y-2">
        {#if attachments.length > 0}
          {#each attachments as attachment}
            <button
              class="relative mx-1 download rounded-md pl-3 pr-4 py-3 flex items-center justify-between text-sm text-blue-500 bg-gray-100"
            >
              <div class="flex-1 flex items-center">
                <!-- Heroicon name: solid/paper-clip -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2 flex-1 font-medium text-blue-500">
                  {attachment.name} ({attachment.size} kb)
                </span>

                <button on:click={() => removeFile(attachment)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-500 ml-4"
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

                <div
                  class="ml-4 transition download-overlay hidden absolute right-0 top-0 bg-gray-100 h-full flex items-center px-2"
                >
                  <span class="font-medium text-blue-500 ">
                    Click here to download
                  </span>
                </div>
              </div>
            </button>
          {/each}
        {/if}
      </div>
      <div class="justify-end">
        <Button kind="primary">Add Note</Button>
      </div>
    </div>
  </div>
</div>
