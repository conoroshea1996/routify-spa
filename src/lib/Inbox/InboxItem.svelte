<script>
  export let email;
  export let isActive;
</script>

<a
  href="/inbox/{email.id}"
  class="py-4 px-4 block border-b border-gray-100"
  class:bg-yellow-100={isActive}
  class:bg-gray-50={!email.unRead}
>
  <div class="flex items-center space-x-4">
    <div class="flex-1 min-w-0">
      <div class="flex space-x-2 items-start">
        {#if email.unRead}
          <div class="h-2 w-2 bg-blue-500 rounded-full my-2" />
        {/if}
        <div class="flex flex-col justify-start">
          <p class="text-sm font-medium text-gray-900 truncate">
            {email.fullName}
          </p>
          <p class="text-sm text-gray-500 truncate">
            {email.subject}
          </p>
        </div>
      </div>
    </div>
    <div class="flex items-center text-gray-500">
      <p>{email.formattedDate}</p>
    </div>
  </div>
</a>
