<script lang="ts">
  import { Button, TextInput, Select } from "hirehive-ui";

  import { getContext } from "svelte";

  let { job, formErrors } = getContext("Jobs_Context");
</script>

<section class="bg-white">
  <div class="shadow sm:rounded-md sm:overflow-hidden">
    <h1 class=" text-xl font-semibold p-4 border-b border-gray-100">
      Job details
    </h1>
    <div class="px-4 py-3  text-right sm:px-6 space-y-6">
      <div class="my-2 flex justify-between item-center">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Job Title</span>
        </div>
        <div class="w-3/4">
          <TextInput
            bind:value={$job.title}
            full
            placeholder="Job Title"
            on:focus={() => ($formErrors.jobTitle = false)}
            hasError={$formErrors.jobTitle}
            errorMessage="Required field"
          />
        </div>
      </div>
      <div class="my-2 flex justify-between item-center">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Job Category</span>
        </div>
        <div class="w-3/4">
          <Select
            options={["Dev", "HR"]}
            bind:value={$job.category}
            full
            placeholder="Select"
          />
        </div>
      </div>

      <div class="my-2 flex justify-between item-center">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Job type</span>
        </div>
        <div class="w-3/4">
          <Select
            options={["PartTime", "FullTime"]}
            bind:value={$job.type}
            full
            placeholder="Select"
          />
        </div>
      </div>

      <div class="my-2 flex justify-between item-center">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Remote</span>
        </div>
        <div class="w-3/4">
          <Select
            options={["Fully", "Partly"]}
            bind:value={$job.remote}
            full
            placeholder="Select"
          />
        </div>
      </div>

      <div class="my-2 flex justify-between item-center">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> City</span>
        </div>
        <div class="w-3/4">
          <TextInput
            bind:value={$job.location}
            full
            hasError={$formErrors.location}
            on:focus={() => ($formErrors.location = false)}
            errorMessage="Required field"
          />
        </div>
      </div>

      <div class="my-2 flex justify-between item-center border-b pb-16">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Country</span>
        </div>
        <div class="w-3/4">
          <TextInput
            bind:value={$job.country}
            full
            hasError={$formErrors.country}
            errorMessage="Required field"
            on:focus={() => ($formErrors.country = false)}
          />
        </div>
      </div>

      <div class="my-2 flex justify-between item-center">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Experience</span>
        </div>
        <div class="w-3/4">
          <TextInput bind:value={$job.experience} full>
            <span
              slot="trailing"
              class="text-gray-500 absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none"
            >
              Year
            </span>
          </TextInput>
        </div>
      </div>

      <div class="my-2 flex justify-between item-center">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Salary</span>
        </div>
        <div class="w-3/4">
          <TextInput bind:value={$job.salary} full>
            <span
              slot="leading"
              class="text-gray-500 absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
            >
              $
            </span>
            <span
              slot="trailing"
              class="text-gray-500 absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none"
            >
              USD
            </span>
          </TextInput>
        </div>
      </div>

      <div class="flex justify-end">
        <Button href="/jobs/create/description" kind="secondary" size="base"
          >Next: Job Description</Button
        >
      </div>
    </div>
  </div>
</section>
