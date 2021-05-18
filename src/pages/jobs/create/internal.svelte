<script>
  import Select from "hirehive-ui/src/Inputs/Select.svelte";

  import TextInput from "hirehive-ui/src/Inputs/TextInput.svelte";
</script>

<section class="bg-white">
  <div class="shadow sm:rounded-md sm:overflow-hidden">
    <h1 class=" text-xl font-semibold p-4 border-b border-gray-200">
      Internal settings
    </h1>
    <div class="px-4 py-3  text-right sm:px-6">
      <div class="my-2 flex justify-between item-center pb-8">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Job owner</span>
        </div>
        <div class="w-3/4">
          <div
            class=" bg-gray-50 py-2 shadow-sm block border flex justify-start px-3 border-gray-200 rounded-md text-sm text-gray-500 focus:outline-none focus:ring-indigo-500 w-full s-NXr_rU-X1aGU"
          >
            <span> Emma carbery</span>
          </div>
        </div>
      </div>

      <div class="my-2 flex justify-between item-center pb-8">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500">Status</span>
        </div>
        <div class="w-3/4">
          <Select full options={["Published", "Drafted"]} value="Published" />
        </div>
      </div>

      <div class="my-2 flex justify-between item-center pb-8">
        <div class="w-1/4 flex items-center">
          <span class="font-medium text-gray-500"> Job code</span>
        </div>
        <div class="w-3/4">
          <TextInput full placeholder="For interal use" />
        </div>
      </div>
    </div>
  </div>
</section>
