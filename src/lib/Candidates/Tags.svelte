<script>
  import { Badge } from "hirehive-ui";
  import { createEventDispatcher } from "svelte";
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

    if (input.key === "Enter") {
      addTag(currentTag);
    }
    if (input.key === "ArrowDown" && autoComplete) {
      event.preventDefault();
      dropDownElement.querySelector("li:first-child").focus();
    } // ArrowUp : focus on last element of the autocomplete
    else if (input.key === "ArrowUp" && autoComplete) {
      event.preventDefault();
      dropDownElement.querySelector("li:last-child").focus();
    }
  };
  function addTag(currentTag) {
    console.log(currentTag);
    currentTag = currentTag.trim();

    if (currentTag == "") return;
    if (onlyUnique && tags.includes(currentTag)) return;
    if (onlyAutocomplete && arrelementsmatch.length === 0) return;

    tags.push(currentTag);
    tags = tags;
    tag = "";
    dispatch("tags", {
      tags: tags,
    });

    // Hide autocomplete list
    // Focus on svelte tags input
    arrelementsmatch = [];
    inputElement.focus();
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
  }
  function navigateAutoComplete(
    autoCompleteIndex,
    autoCompleteLength,
    autoCompleteElement
  ) {
    if (!autoComplete) return;
    event.preventDefault();
    if (event.key === "ArrowDown") {
      // Last element on the list ? Go to the first
      if (autoCompleteIndex + 1 === autoCompleteLength) {
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
      addTag(autoCompleteElement[autoCompleteKey]);
    } else if (event.key === "Escape") {
      // Escape
      arrelementsmatch = [];
      inputElement.focus();
    }
  }
</script>

<h1 class="text-green-600 text-4xl">{tags}</h1>

<div class="relative inline-block text-left">
  <button on:click={() => (open = true)}>
    <slot />
  </button>

  <!--
      Dropdown menu, show/hide based on menu state.
  
      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    -->
  <div
    class="origin-top-right absolute transition ease duration-100 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none
    {open ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95'}"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  >
    <div>
      <input
        type="text"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        bind:this={inputElement}
        {name}
        bind:value={tag}
        on:keydown={setTag}
        on:keyup={getMatchElements}
        placeholder="Find an option"
      />
    </div>

    {#if autoComplete && arrelementsmatch.length > 0}
      <div>
        <ul bind:this={dropDownElement}>
          {#each arrelementsmatch as element, index}
            <li
              tabindex="-1"
              on:keydown={() =>
                navigateAutoComplete(
                  index,
                  arrelementsmatch.length,
                  element.label
                )}
              class="focus:bg-red-200"
              on:click={() => addTag(element.label[autoCompleteKey])}
            >
              <Badge kind="gray">{@html element.search}</Badge>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>
