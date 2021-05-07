<script>
  import EditorJS from "@editorjs/editorjs";
  import Header from "@editorjs/header";
  import { onMount } from "svelte";

  let editor;
  let editorInstance;
  onMount(async () => {
    console.log(editor);
    editorInstance = new EditorJS({
      holder: editor,
      hideToolbar: false,
      inlineToolbar: true,
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: "Enter a header",
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
      },
      data: {
        blocks: [
          {
            type: "header",
            data: {
              text: "New header",
              level: 2,
            },
          },
          {
            type: "paragraph",
            data: {
              text:
                "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.",
            },
          },
        ],
      },
    });
  });

  const save = async () => {
    const result = await editorInstance.save();
    console.log(result);
    alert("Console log results");
  };
</script>

<div class="bg-gray-200 p-10 rounded-md">
  <div bind:this={editor} class="bg-white" />
</div>

<button
  class="bg-blue-500 rounded-md text-white p-4 w-full"
  on:click={async () => await save()}
>
  Save
</button>
