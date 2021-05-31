<script>
  import EditorJS from "@editorjs/editorjs";
  import Paragraph from "@editorjs/paragraph";
  import Header from "@editorjs/header";
  import List from "@editorjs/list";
  import SimpleImage from "@editorjs/simple-image";
  import ColorPlugin from "editorjs-text-color-plugin";
  import { onDestroy, onMount } from "svelte";
  import edjsHTML from "editorjs-html";
  import { beforeUrlChange } from "@roxi/routify";
  let unSavedChanges = false;
  let editor;
  let editorInstance;
  onMount(async () => {
    editorInstance = new EditorJS({
      holder: editor,
      minHeight: 100,
      hideToolbar: false,
      inlineToolbar: true,
      tools: {
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          shortcut: "SHIFT+P",
        },
        header: {
          class: Header,
          config: {
            placeholder: "Enter a header",
            levels: [2, 4],
            defaultLevel: 2,
          },
          inlineToolbar: true,
          shortcut: "SHIFT+H",
        },
        list: {
          class: List,
          inlineToolbar: true,
          shortcut: "SHIFT+L",
        },
        image: {
          class: SimpleImage,
          inlineToolbar: true,
        },
        Color: {
          class: ColorPlugin,
          config: {
            colorCollections: [
              "#FF1300",
              "#EC7878",
              "#9C27B0",
              "#673AB7",
              "#3F51B5",
              "#0070FF",
              "#03A9F4",
              "#00BCD4",
              "#4CAF50",
              "#8BC34A",
              "#CDDC39",
              "#FFF",
              "#000000",
            ],
            defaultColor: "#000000",
            type: "text",
          },
        },
        Marker: {
          class: ColorPlugin,
          config: {
            defaultColor: "#FFBF00",
            type: "marker",
          },
        },
      },
      onChange: () => {
        unSavedChanges = true;
      },
    });
  });

  const imageParser = (image) => {
    return `<img src="${image.data.url}" />`;
  };

  const edjsParser = edjsHTML({ image: imageParser });

  export async function renderFromString(string) {
    await editorInstance.isReady;
    editorInstance.blocks.renderFromHTML(string);
  }

  export async function focusTop() {
    await editorInstance.isReady;
    editorInstance.focus();
  }

  export async function getHtml() {
    await editorInstance.isReady;
    const output = await editorInstance.save();
    unSavedChanges = false;
    const markup = edjsParser.parse(output);
    return markup.join(" ");
  }
  $beforeUrlChange(async () => {
    if (unSavedChanges) {
      const ok = confirm("Unsaved changes");
      if (ok) {
        editorInstance.blocks.clear();
        await editorInstance.save();
        unSavedChanges = false;
        return true;
      }
      return false;
    }

    return true;
  });

  onDestroy(async () => {
    await editorInstance.isReady;
    editorInstance.destroy();
  });
</script>

<div
  bind:this={editor}
  class="bg-white border border-gray-300 rounded-md mx-auto pb-0 h-full"
/>

<style global>
  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  .ce-block__content,
  .ce-toolbar__content {
    @apply mx-12;
    max-width: unset;
  }
</style>
