<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Editor } from "@tiptap/core";
  import StarterKit from "@tiptap/starter-kit";
  import TextStyle from "@tiptap/extension-text-style";
  import Mention from "@tiptap/extension-mention";
  import MentionList from "./MentionList.svelte";
  import Link from "@tiptap/extension-link";
  import Button from "hirehive-ui/src/Button/Button.svelte";
  import BulletList from "@tiptap/extension-bullet-list";
  import OrderList from "@tiptap/extension-ordered-list";

  let element: HTMLElement;
  let mentionMenuElement: HTMLElement;
  let editor: Editor;

  export let content =
    '<h2>   New header  <span data-mention data-id="Madonna"></span> </h2><p> <span style="font-size:40px;font-color:red;"> Job </span> purpose </p><p>   Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.   </p><p>   The job purpose is usually no more than a few sentences long.# </p><p> <a href="https://editorjs.io/"><font color="#0070ff">Link test</font></a> </p><h2> <i>  Duties and responsibilities  </i> </h2><p>   List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.   </p><ul> <li>   List the primary duties and responsibilities in order of importance   </li><li>   Begin each statement with an action verb   </li><li>   Use the present tense of verbs   </li><li>   Use gender neutral language   </li><li>   Use generic language   </li><li>   Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner”   </li> </ul><p>  <b> Qualifications </b>  </p><p>   State the minimum qualifications required to successfully perform the job.   </p><p>   Qualifications include   </p><ul> <li>   Education   </li><li>   Specialized knowledge   </li><li>   Skills   </li><li>   Abilities   </li><li>   Other characteristics such as personal characteristics   </li><li>   Professional Certification   </li><li>   Experience   </li> </ul><p>   Perks/Benefits of the role   </p>';

  onMount(() => {
    editor = new Editor({
      element: element,
      content,
      extensions: [
        StarterKit,
        TextStyle,
        BulletList,
        OrderList,
        Link.configure({
          openOnClick: false,
        }),
        Mention.configure({
          HTMLAttributes: {
            class: "mention",
          },
          suggestion: {
            items: (query) => {
              return [
                "Lea Thompson",
                "Cyndi Lauper",
                "Tom Cruise",
                "Madonna",
                "Jerry Hall",
                "Joan Collins",
                "Winona Ryder",
                "Christina Applegate",
                "Alyssa Milano",
                "Molly Ringwald",
                "Ally Sheedy",
                "Debbie Harry",
                "Olivia Newton-John",
                "Lisa Bonet",
              ]
                .filter((item) =>
                  item.toLowerCase().startsWith(query.toLowerCase())
                )
                .slice(0, 5);
            },
            render: () => {
              let component: SvelteComponent;

              return {
                onStart: (props) => {
                  component = new MentionList({
                    target: mentionMenuElement,
                    props: {
                      items: props.items,
                      command: props.command,
                      cords: props.clientRect,
                    },
                  });
                },
                onUpdate(props) {
                  component.$set({
                    items: props.items,
                    cords: props.clientRect,
                  });
                },
                onKeyDown(props) {
                  return component.onKeyDown(props);
                },
                onExit() {
                  component.$destroy();
                },
              };
            },
          },
        }),
      ],
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor;
      },

      //   onSelectionUpdate: (c) => {
      //     console.log(c);
      //   },
    });
  });

  const setLink = () => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });

  const save = () => {
    const html = editor.getHTML();
    console.log(html);
  };
</script>

{#if editor}
  <div
    class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around"
  >
    <button
      on:click={() => editor.chain().focus().toggleBold().run()}
      class:bg-green-400={editor.isActive("bold")}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      bold
    </button>

    <button
      on:click={() => editor.chain().focus().toggleBold().run()}
      class:bg-green-400={editor.isActive("italic")}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      italic
    </button>

    <button
      on:click={() => editor.chain().focus().toggleStrike().run()}
      class:bg-green-400={editor.isActive("strike")}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      strike
    </button>

    <button
      on:click={() => editor.chain().focus().setParagraph().run()}
      class:bg-green-400={editor.isActive("paragraph")}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      paragraph
    </button>

    <button
      on:click={() => setLink()}
      class:bg-green-400={editor.isActive("link")}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Link
    </button>
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      class:bg-green-400={editor.isActive("heading", { level: 1 })}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      h1
    </button>
    <button
      on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      class:bg-green-400={editor.isActive("heading", { level: 2 })}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      h2
    </button>

    <button
      on:click={() => editor.chain().focus().toggleBulletList().run()}
      class:bg-green-400={editor.isActive("bulletList")}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Bullet List
    </button>

    <button
      on:click={() => editor.chain().focus().toggleOrderedList().run()}
      class:bg-green-400={editor.isActive("orderedList")}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Order List
    </button>

    <button
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      on:click={() => editor.chain().focus().undo().run()}
    >
      undo
    </button>
    <button
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      on:click={() => editor.chain().focus().redo().run()}
    >
      redo
    </button>
  </div>
{/if}
<div class="my-2 w-full">
  <Button kind="secondary" full on:click={() => save()}>Save</Button>
</div>

<div bind:this={mentionMenuElement} />

<div bind:this={element} class="prose mx-auto relative" />

<style global>
  .mention {
    @apply text-blue-500;
  }
</style>
