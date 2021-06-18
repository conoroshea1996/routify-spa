<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Editor } from "@tiptap/core";
  import type { Range } from "@tiptap/core";
  import StarterKit from "@tiptap/starter-kit";
  import TextStyle from "@tiptap/extension-text-style";
  import Mention from "@tiptap/extension-mention";
  import MentionList from "./MentionList.svelte";
  import Link from "@tiptap/extension-link";
  import Button from "hirehive-ui/src/Button/Button.svelte";
  import BulletList from "@tiptap/extension-bullet-list";
  import OrderList from "@tiptap/extension-ordered-list";
  import ListItem from "@tiptap/extension-list-item";
  import { createImageExtension } from "./utils/image/image";

  let element: HTMLElement;
  let mentionMenuElement: HTMLElement;
  let editor: Editor;
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const upload = async (file: File): Promise<string> => {
    alert("Upload to server");

    await sleep(700);
    return "https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg";
  };

  let cursorPos: number;
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
        ListItem,
        createImageExtension(upload),
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
            command: ({ editor, range, props }) => {
              const removeQueryStart: number = range.to;
              const removeQueryEnd: number =
                removeQueryStart + props.query.length;

              const replaceRange: Range = {
                from: removeQueryStart,
                to: removeQueryEnd,
              };

              editor
                .chain()
                .focus()
                .replaceRange(range, "mention", {
                  ...props,
                  id: props.id,
                })
                // hack for stoping query being added
                // removing query and adding space
                .deleteRange(replaceRange)
                .insertContent(" ")
                .run();
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
                      query: props.query,
                    },
                  });
                },
                onUpdate(props) {
                  component.$set({
                    items: props.items,
                    cords: props.clientRect,
                    query: props.query,
                  });
                },
                onKeyDown(props) {
                  return component.onKeyDown(props);
                },
                onExit(props) {
                  component.$destroy();
                },
              };
            },
          },
        }),
      ],
      onTransaction: (props) => {
        // force re-render so `editor.isActive` works as expected
        editor = editor;
        cursorPos = props.editor.state.selection.anchor;
      },
      onBlur: (props) => {
        cursorPos = props.editor.state.selection.anchor;
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

  const uploadImageFromDevice = async (e: Event) => {
    const input = e.target as HTMLInputElement;

    if (input.files) {
      const file = input.files[0];

      const imageSrc = await upload(file);

      //@ts-ignore
      editor.commands.insertImage(imageSrc);
    }
  };
</script>

{#if editor}
  <div
    class="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-start sm:space-y-0 sm:flex-row sm:items-end sm:justify-around"
  >
    <label
      class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150"
    >
      <i class="fas fa-cloud-upload-alt fa-3x" />
      <span class="mt-2 text-base leading-normal">Select a file</span>
      <input
        type="file"
        class="hidden"
        on:change={(e) => uploadImageFromDevice(e)}
      />
    </label>
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

  ol li::marker {
    color: transparent;
    font-weight: bold;
    content: none;
  }
</style>
