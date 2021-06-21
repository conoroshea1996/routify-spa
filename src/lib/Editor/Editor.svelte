<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Editor, Node } from "@tiptap/core";
  import type { Range } from "@tiptap/core";
  import StarterKit from "@tiptap/starter-kit";
  import TextStyle from "@tiptap/extension-text-style";
  import Mention from "@tiptap/extension-mention";
  import MentionList from "./MentionList.svelte";
  import Link from "@tiptap/extension-link";
  import TextAlign from "@tiptap/extension-text-align";
  import Button from "hirehive-ui/src/Button/Button.svelte";
  import BulletList from "@tiptap/extension-bullet-list";
  import OrderList from "@tiptap/extension-ordered-list";
  import ListItem from "@tiptap/extension-list-item";
  import { createImageExtension } from "./utils/image/image";
  import HighLight from "@tiptap/extension-highlight";

  import FontFamily from "@tiptap/extension-font-family";

  let element: HTMLElement;
  let mentionMenuElement: HTMLElement;
  let editor: Editor;
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // do file upload work here and return src
  const upload = async (file: File): Promise<string> => {
    await sleep(700);

    return "https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg";
  };

  export let content =
    '<h2>New header <span data-mention="" class="mention" data-id="Madonna">@Madonna</span></h2><p> <span style="font-family: cursive">Job </span>purpose</p><p><span color="green">Provide </span> a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.</p><p><img src="https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg"></p><p><img src="https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg"></p><p>The job purpose is usually no more than a few sentences long.#</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://editorjs.io/">Link test</a> </p><h2><em>Duties and responsibilities</em><img src="https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-260nw-1684423789.jpg"></h2><p>List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.</p><ul><li><p>List the primary duties and responsibilities in order of importance</p></li><li><p>Begin each statement with an action verb</p></li><li><p>Use the present tense of verbs</p></li><li><p>Use gender neutral language</p></li><li><p>Use generic language</p></li><li><p>Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner”</p></li></ul><p><strong>Qualifications</strong></p><p>State the minimum qualifications required to successfully perform the job.</p><p>Qualifications include</p><ul><li><p>Education</p></li><li><p>Specialized knowledge</p></li><li><p>Skills</p></li><li><p>Abilities</p></li><li><p>Other characteristics such as personal characteristics</p></li><li><p>Professional Certification</p></li><li><p>Experience</p></li></ul><p>Perks/Benefits of the role</p>';
  onMount(() => {
    editor = new Editor({
      element: element,
      content,

      extensions: [
        HighLight,
        FontFamily,
        StarterKit,
        TextStyle,
        BulletList,
        OrderList,
        ListItem,
        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),
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
            command: ({
              editor,
              range,
              props,
            }: {
              editor: Editor;
              range: Range;
              props: { query: string; id: any };
            }) => {
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

        console.log(editor);
      },
      onBlur: (props) => {},

      //   onSelectionUpdate: (c) => {
      //     console.log(c);
      //   },
    });

    console.log(editor.commands);
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
    editor.commands.setContent(html);
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
      on:click={() => editor.chain().focus().setFontFamily("Inter").run()}
      class:bg-green-400={editor.isActive("textStyle", { fontFamily: "Inter" })}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Inter
    </button>

    <button
      on:click={() =>
        editor.chain().focus().setHighlight({ color: "pink" }).run()}
      class:bg-green-400={editor.isActive("mark")}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      HighLight
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

    <button
      on:click={() => editor.chain().focus().setTextAlign("left").run()}
      class:bg-green-400={editor.isActive({ textAlign: "justify" })}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      left
    </button>
    <button
      on:click={() => editor.chain().focus().setTextAlign("center").run()}
      class:bg-green-400={editor.isActive({ textAlign: "center" })}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      center
    </button>
    <button
      on:click={() => editor.chain().focus().setTextAlign("right").run()}
      class:bg-green-400={editor.isActive({ textAlign: "right" })}
      type="button"
      class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      right
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
