<script lang="ts">
  import { Button } from "hirehive-ui";
  import EmailSender from "../../lib/Inbox/EmailSender.svelte";
  import { emails, threads } from "../../stores/emails";
  import Editor from "../editor.svelte";
  export let emailId: string;
  const parseEmaildId: number = parseInt(emailId);

  let attachments: File[] = [];

  const onFileUpload = (e: Event) => {
    let files = (e.target as HTMLInputElement).files;
    let file: File | null = null;

    if (files && files.length > 0) {
      file = files[0];
      attachments = [...attachments, file];
    }
  };

  const removeFile = (attachment: File) => {
    attachments = attachments.filter((f) => f !== attachment);
  };

  let email: any;
  const getEmail = (emailId: number) => {
    email = $emails.find((e) => e.id === emailId);
    console.log(email);
  };

  getEmail(parseEmaildId);
</script>

<div class="lg:min-w-0 lg:flex-1 bg-gray-50 flex flex-col">
  <div class="border-b  border-gray-200 w-full">
    <div class="mx-auto py-6  lg:flex lg:items-center lg:justify-between">
      <div
        class="tracking-tight text-gray-500  flex items-start justify-between w-full px-8"
      >
        <div class="flex flex-col space-y-2">
          <h1 class="text-gray-900">{email.fullName}</h1>
          <p class="text-gray-500">
            {email.subject}, {email.formattedDate}
          </p>
        </div>

        <div class="flex items-start">
          <div>
            <Button kind="white" size="small">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex-1 flex flex-col px-4 sm:px-6 lg:px-8">
    <!-- Start main area-->
    <ul
      class="bg-white  border border-gray-200 rounded-md p-8 overflow-y-auto h-80 emailThread my-4"
    >
      {#each $threads as thread}
        <li>
          <div class="relative pb-6">
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
                    <p class="font-medium text-gray-900">
                      {thread.senderName}
                    </p>
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">
                    {thread.date}
                  </p>
                </div>
                <div class="mt-2 text-sm text-gray-700">
                  <p>
                    {@html thread.body}
                  </p>
                </div>
              </div>
            </div>
            {#if thread.attachments.length > 0}
              <div class="flex mx-12 my-4">
                {#each thread.attachments as attachment}
                  <button
                    class="relative download rounded-md pl-3 pr-4 py-3 flex items-center justify-between text-sm text-blue-500"
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
                        {attachment.fileName} ({attachment.sizeInKB} kb)
                      </span>
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
              </div>
            {/if}
          </div>
        </li>
      {/each}
    </ul>

    <div class="flex-1">
      <EmailSender />
    </div>
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
