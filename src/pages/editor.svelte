<script>
  import EditorJS from "@editorjs/editorjs";
  import Paragraph from "@editorjs/paragraph";
  import Header from "@editorjs/header";
  import List from "@editorjs/list";
  import SimpleImage from "@editorjs/simple-image";
  import ColorPlugin from "editorjs-text-color-plugin";
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
            levels: [2, 4],
            defaultLevel: 2,
          },
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        image: SimpleImage,

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
      data: {
        blocks: [
          [
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
                text: "Job purpose",
              },
            },
            {
              type: "paragraph",
              data: {
                text:
                  "Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.",
              },
            },
            {
              type: "paragraph",
              data: {
                text:
                  "The job purpose is usually no more than a few sentences long.",
              },
            },
            {
              type: "paragraph",
              data: {
                text: "Duties and responsibilities",
              },
            },
            {
              type: "paragraph",
              data: {
                text:
                  "List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.",
              },
            },
            {
              type: "list",
              data: {
                style: "unordered",
                items: [
                  "List the primary duties and responsibilities in order of importance",
                  "Begin each statement with an action verb",
                  "Use the present tense of verbs",
                  "Use gender neutral language",
                  "Use generic language",
                  "Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner”",
                ],
              },
            },
            {
              type: "paragraph",
              data: {
                text: "Qualifications",
              },
            },
            {
              type: "paragraph",
              data: {
                text:
                  "State the minimum qualifications required to successfully perform the job.",
              },
            },
            {
              type: "paragraph",
              data: {
                text: "Qualifications include",
              },
            },
            {
              type: "list",
              data: {
                style: "unordered",
                items: [
                  "Education",
                  "Specialized knowledge",
                  "Skills",
                  "Abilities",
                  "Other characteristics such as personal characteristics",
                  "Professional Certification",
                  "Experience",
                ],
              },
            },
            {
              type: "paragraph",
              data: {
                text: "Perks/Benefits of the role",
              },
            },
            {
              type: "image",
              data: {
                url:
                  "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
                caption: "Random Image attached using url",
                withBorder: false,
                withBackground: false,
                stretched: false,
              },
            },
          ],
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
