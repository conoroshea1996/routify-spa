<script lang="ts">
  import TextInput from "hirehive-ui/src/Inputs/TextInput.svelte";
  import TextArea from "hirehive-ui/src/Inputs/TextArea.svelte";

  import { getContext } from "svelte";
  let { job } = getContext("Jobs_Context");
</script>

<section>
  <div class="shadow sm:rounded-md sm:overflow-hidden">
    <div class="border-b border-gray-300 p-4">
      <h1 class=" text-xl font-semibold ">Confirmation email</h1>
      <p class="text-gray-500 py-2">
        Every applicant receives a default confirmation email to confirm their
        application.
      </p>
    </div>
    <div class="px-4 py-3  text-right sm:px-6">
      <div class="my-4 flex justify-between item-center">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Subject</span>
        </div>
        <div class="w-3/4">
          <TextInput bind:value={$job.email} full placeholder="Job Title" />
        </div>
      </div>

      <div class="my-4 flex justify-between item-center">
        <div class="w-1/4 flex">
          <span class="font-medium text-gray-500"> Body</span>
        </div>
        <div class="w-3/4 h-68">
          <TextArea bind:value={$job.emailBody} full placeholder="Job Title" />
        </div>
      </div>
    </div>
  </div>
</section>
