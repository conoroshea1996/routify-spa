<script lang="ts">
  import { url } from "@roxi/routify";

  const message: string = "Hello from Typescript";

  console.log(message);
</script>

<div class="container text-gray-500">
  <h1 class="title">Routify + Vite + Typescript + Windi CSS Template</h1>

  <p class="description">
    Visit <a
      class="link"
      href="https://github.com/sveltegaruda/routify-vite-ts-windicss"
      >Official Repository</a
    > for further information.
  </p>
</div>

<a href={$url("/calendar")} class="text-blue-500 text-4xl"> Calendar </a>
