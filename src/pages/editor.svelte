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
  let x =
    '<h2>   New header   </h2><p>  <b> Job purpose </b>  </p><p>   Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.   </p><p>   The job purpose is usually no more than a few sentences long.# </p><p> <a href="https://editorjs.io/"><font color="#0070ff">Link test</font></a> </p><h2> <i>  Duties and responsibilities  </i> </h2><p>   List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.   </p><ul> <li>   List the primary duties and responsibilities in order of importance   </li><li>   Begin each statement with an action verb   </li><li>   Use the present tense of verbs   </li><li>   Use gender neutral language   </li><li>   Use generic language   </li><li>   Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner”   </li> </ul><p>  <b> Qualifications </b>  </p><p>   State the minimum qualifications required to successfully perform the job.   </p><p>   Qualifications include   </p><ul> <li>   Education   </li><li>   Specialized knowledge   </li><li>   Skills   </li><li>   Abilities   </li><li>   Other characteristics such as personal characteristics   </li><li>   Professional Certification   </li><li>   Experience   </li> </ul><p>   Perks/Benefits of the role   </p>';
  onMount(async () => {
    editorInstance = new EditorJS({
      holder: editor,
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
  $beforeUrlChange(() => {
    if (unSavedChanges) {
      const ok = confirm("Unsaved changes");
      if (ok) return true;
      return false;
    }

    return true;
  });

  onDestroy(async () => {
    await editorInstance.isReady;
    editorInstance.destroy();
  });
</script>

<div bind:this={editor} class="bg-white rounded-xl max-w-5xl mx-auto pb-0" />

<style global>
  h2 {
    font-size: 24px;
    font-weight: 600;
  }
  .codex-editor__redactor {
    padding: 0px !important;
  }
</style>
