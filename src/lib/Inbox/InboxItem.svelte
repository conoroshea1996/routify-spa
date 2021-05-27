<script>
  export let email;
  export let isActive;
</script>

<a
  href="/inbox/{email.id}"
  class="py-4 px-4 block border-b border-gray-100"
  class:bg-yellow-100={isActive}
>
  <div class="flex items-center space-x-4">
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium text-gray-900 truncate">
        {email.fullName}
      </p>
      <p class="text-sm text-gray-500 truncate">
        {email.subject}
      </p>
    </div>
    <div class="flex items-center text-gray-500">
      <p>{email.formattedDate}</p>
    </div>
  </div>
</a>
