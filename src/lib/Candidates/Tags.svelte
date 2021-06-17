<script>
  import { Badge, clickOutside } from "hirehive-ui";
  import { createEventDispatcher } from "svelte";
  import { getRandomBadgeColor } from "../../utils/badgeType";
  const dispatch = createEventDispatcher();
  let tag = "";
  let arrelementsmatch = [];
  let regExpEscape = (s) => {
    return s.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
  };
  export let tags;
  export let onlyUnique;
  export let autoComplete;
  export let open;
  export let autoCompleteKey;
  export let name;
  export let minChars;
  export let onlyAutocomplete;
  export let placeholder = "Find an option";
  export let loadAll = false;

  $: tags = tags || [];
  $: onlyUnique = onlyUnique || true;
  $: autoComplete = autoComplete || false;
  $: autoCompleteKey = autoCompleteKey || false;
  $: minChars = minChars || 1;
  $: onlyAutocomplete = onlyAutocomplete || false;

  let dropDownElement;
  let inputElement;

  const setTag = (input) => {
    const currentTag = input.target.value;

    event.stopPropagation();
    if (input.key === "Enter") {
      addTag(currentTag, false);
    }
    if (input.key === "ArrowDown" && autoComplete) {
      event.preventDefault();
      dropDownElement.querySelector("li:first-child").focus();
    } // ArrowUp : focus on last element of the autocomplete
    else if (input.key === "ArrowUp" && autoComplete) {
      event.preventDefault();
      dropDownElement.querySelector("li:last-child").focus();
    } else if (input.key === "Escape") {
      event.preventDefault();
      open = false;
    }
  };
  function addTag(currentTag, fromOptions) {
    currentTag = currentTag.trim();

    if (currentTag == "") return;
    if (onlyUnique && tags.includes(currentTag)) return;
    if (onlyAutocomplete && arrelementsmatch.length === 0) return;

    tags.push(currentTag);
    tags = tags;
    tag = "";
    if (fromOptions) {
      console.log(currentTag);
      const selectedOption = autoComplete.find(
        (c) => c[autoCompleteKey].toLowerCase() === currentTag.toLowerCase()
      );

      console.log(selectedOption);

      currentTag = selectedOption;
    }

    console.log(currentTag, "TAG");

    dispatch("tagAdded", {
      tag: currentTag,
      selectedFromOptions: fromOptions,
    });

    // Hide autocomplete list
    // Focus on svelte tags input
    arrelementsmatch = [];
    open = false;
  }

  async function getMatchElements(input) {
    if (!autoComplete) return;
    let autoCompleteValues = [];

    autoCompleteValues = autoComplete;

    var value = input.target.value;

    // Escape
    if (value == "" || input.key === "Escape" || value.length < minChars) {
      arrelementsmatch = [];
      return;
    }

    var matchs = autoCompleteValues
      .filter((e) =>
        e[autoCompleteKey].toLowerCase().includes(value.toLowerCase())
      )
      .map((matchTag) => {
        return {
          label: matchTag,
          search: matchTag[autoCompleteKey].replace(
            RegExp(regExpEscape(value.toLowerCase()), "i"),
            "<strong>$&</strong>"
          ),
        };
      });

    if (onlyUnique === true && !autoCompleteKey) {
      matchs = matchs.filter((tag) => !tags.includes(tag.label));
    }

    arrelementsmatch = matchs;
    console.log(arrelementsmatch, "Element match");
  }
  function navigateAutoComplete(autoCompleteIndex, autoCompleteLength, tag) {
    if (!autoComplete) return;
    event.preventDefault();
    event.stopPropagation();
    if (event.key === "ArrowDown") {
      // Last element on the list ? Go to the first
      if (autoCompleteIndex === autoCompleteLength - 1) {
        dropDownElement.querySelector("li:first-child").focus();
        return;
      }
      dropDownElement.querySelectorAll("li")[autoCompleteIndex + 1].focus();
    } else if (event.key === "ArrowUp") {
      // First element on the list ? Go to the last
      if (autoCompleteIndex === 0) {
        dropDownElement.querySelector("li:last-child").focus();
        return;
      }
      dropDownElement.querySelectorAll("li")[autoCompleteIndex - 1].focus();
    } else if (event.key === "Enter") {
      // Enter
      addTag(tag, true);
    } else if (event.key === "Escape") {
      // Escape
      arrelementsmatch = [];
      inputElement.focus();
    }
  }

  const autoFocus = (open) => {
    if (open) {
      inputElement.focus();
    }
  };

  $: autoFocus(open);

  const getELementsOnLoad = () => {
    var matchs = autoComplete.map((matchTag) => {
      return {
        label: matchTag,
        search: matchTag[autoCompleteKey],
      };
    });

    arrelementsmatch = matchs;
  };

  if (loadAll) {
    getELementsOnLoad();
  }
</script>

<div
  class="relative inline-block text-left z-10"
  use:clickOutside={() => (open = false)}
>
  <span on:click={() => (open = true)}>
    <slot />
  </span>
  <div
    class="origin-top-right absolute transition ease duration-100 left-0 mt-2 w-56 rounded-md 
     border border-gray-200 bg-white focus:outline-none
    {open ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95'}"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  >
    <input
      type="text"
      class="placeholder-gray-400 text-sm focus:text-md focus:ring-transparent focus:border-transparent block w-full border-transparent rounded-md text-gray-900 font-bold"
      bind:this={inputElement}
      {name}
      bind:value={tag}
      on:keydown={setTag}
      on:keyup={getMatchElements}
      {placeholder}
    />

    <ul bind:this={dropDownElement} class="space-y-2 max-h-56 overflow-y-auto">
      {#if autoComplete && arrelementsmatch.length > 0}
        {#each arrelementsmatch as element, index}
          <li
            tabindex="-1"
            on:keydown={() =>
              navigateAutoComplete(
                index,
                arrelementsmatch.length,
                element.label[autoCompleteKey]
              )}
            class="focus:bg-gray-50 focus:outline-none px-2 py-1 cursor-pointer hover:bg-gray-50"
            on:click={() => addTag(element.label[autoCompleteKey], true)}
          >
            <Badge size="large" kind={getRandomBadgeColor()}>
              <span class="mx-0.5">{@html element.search}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 mx-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Badge>
          </li>
        {/each}
      {/if}

      {#if tag.length > 0}
        <li
          class="bg-gray-50 text-gray-500 focus:bg-gray-100"
          tabindex="-1"
          on:keydown={() =>
            navigateAutoComplete(
              arrelementsmatch.length,
              arrelementsmatch.length,
              tag
            )}
        >
          <button
            type="button"
            on:click={() => addTag(tag, false)}
            class="w-full inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-bold rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
            Create new tag {tag}
          </button>
        </li>
      {/if}
    </ul>
  </div>
</div>
