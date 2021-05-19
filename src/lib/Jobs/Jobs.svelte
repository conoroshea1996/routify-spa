<script>
  import JobItem from "./JobItem.svelte";
  import ChipSet from "hirehive-ui/src/Chips/ChipSet.svelte";
  import Menu from "hirehive-ui/src/Inputs/Menu.svelte";
  import Button from "hirehive-ui/src/Button/Button.svelte";
  import CheckBox from "hirehive-ui/src/Inputs/CheckBox.svelte";
  const jobs = [
    {
      id: 34,
      jobId: 34,
      title: "Developer",
      location: "City",
      state: null,
      country: "Canada",
      stateCode: null,
      countryCode: "CA",
      description:
        "<p><strong>Job purpose</strong></p><p>Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.</p><p><em>The job purpose is usually no more than a few sentences long.</em></p><p><br></p><p><strong>Duties and responsibilities</strong></p><p>List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.</p><p><br></p><p><strong>Qualifications</strong></p><p>State the minimum qualifications required to successfully perform the job.</p><p><br></p><p><strong>Qualifications include</strong></p><ul><li>Education</li><li>Specialized knowledge</li><li>Skills</li><li>Abilities</li><li>Other characteristics such as personal characteristics</li><li>Professional Certification</li><li>Experience</li></ul><p><br></p><p><strong>Perks/Benefits of the role</strong></p><p><em>Explain what benefits exist for the successful candidates.</em></p>",
      cleanDescription:
        "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
      type: "Contract",
      status: "Published",
      experience: "Entry Level",
      category: "No Category",
      ownerId: 1,
      owner: "Test Admin",
      companyId: 1,
      dateCreated: 1611045785,
      datePublished: 1611045785,
      orderId: 0,
      totalCandidates: 7,
      languageId: 1,
      language: "English",
      newCandidates: {
        statusId: 2,
        count: 2,
        customStatuses: [],
      },
      screeningCandidates: {
        statusId: 3,
        count: 2,
        customStatuses: [
          {
            statusId: 13,
            name: "CV Review by Practice lead",
            count: 1,
          },
          {
            statusId: 15,
            name: "Screening 2",
            count: 1,
          },
        ],
      },
      interviewingCandidates: {
        statusId: 4,
        count: 0,
        customStatuses: [],
      },
      rejectedCandidates: {
        statusId: 1,
        count: 0,
        customStatuses: [],
      },
      offeredCandidates: {
        statusId: 5,
        count: 0,
        customStatuses: [],
      },
      hiredCandidates: {
        statusId: 6,
        count: 3,
        customStatuses: [
          {
            statusId: 12,
            name: "On board",
            count: 1,
          },
        ],
      },
      companyName: "updatedName",
      companyURL: "tester",
      postOnHH: false,
      hasLogo: true,
      hiringManagerIds: [44, 1],
      followerIds: [1, 44],
      allowedUserIds: [1, 47, 44],
      recruiterIds: [],
      deleted: false,
      lastModified: 1620979626,
      sponsoredDate: null,
      isSample: false,
      jobCode: null,
      salary: "40,000",
      remoteOption: "CovidRemote",
      objectID: "34",
      _highlightResult: {
        title: {
          value: "Developer",
          matchLevel: "none",
          matchedWords: [],
        },
        location: {
          value: "City",
          matchLevel: "none",
          matchedWords: [],
        },
        country: {
          value: "Canada",
          matchLevel: "none",
          matchedWords: [],
        },
        cleanDescription: {
          value:
            "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
          matchLevel: "none",
          matchedWords: [],
        },
        category: {
          value: "No Category",
          matchLevel: "none",
          matchedWords: [],
        },
        owner: {
          value: "Test Admin",
          matchLevel: "none",
          matchedWords: [],
        },
        companyName: {
          value: "updatedName",
          matchLevel: "none",
          matchedWords: [],
        },
      },
      $$hashKey: "object:41",
    },
    {
      id: 33,
      jobId: 33,
      title: "Sample 1",
      location: "cork",
      state: null,
      country: "United Kingdom",
      stateCode: null,
      countryCode: "GB",
      description:
        "<p><strong>Job purpose</strong></p><p>Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.</p><p><em>The job purpose is usually no more than a few sentences long.</em></p><p><br></p><p><strong>Duties and responsibilities</strong></p><p>List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.</p><p><br></p><ul><li>List the primary duties and responsibilities in order of importance</li><li>Begin each statement with an action verb</li><li>Use the present tense of verbs</li><li>Use gender neutral language</li><li>Use generic language</li><li>Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner”</li></ul><p><br></p><p><strong>Qualifications</strong></p><p>State the minimum qualifications required to successfully perform the job.</p><p><br></p><p><strong>Qualifications include</strong></p><ul><li>Education</li><li>Specialized knowledge</li><li>Skills</li><li>Abilities</li><li>Other characteristics such as personal characteristics</li><li>Professional Certification</li><li>Experience</li></ul><p><br></p><p><strong>Perks/Benefits of the role</strong></p><p><em>Explain what benefits exist for the successful candidates.</em></p>",
      cleanDescription:
        "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. List the primary duties and responsibilities in order of importance Begin each statement with an action verb Use the present tense of verbs Use gender neutral language Use generic language Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner” Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
      type: "Full Time",
      status: "Published",
      experience: "MidLevel",
      category: "No Category",
      ownerId: 1,
      owner: "Test Admin",
      companyId: 1,
      dateCreated: 1610990724,
      datePublished: 1610990724,
      orderId: 0,
      totalCandidates: 36,
      languageId: 1,
      language: "English",
      newCandidates: {
        statusId: 2,
        count: 32,
        customStatuses: [],
      },
      screeningCandidates: {
        statusId: 3,
        count: 4,
        customStatuses: [
          {
            statusId: 13,
            name: "CV Review by Practice lead",
            count: 4,
          },
        ],
      },
      interviewingCandidates: {
        statusId: 4,
        count: 0,
        customStatuses: [],
      },
      rejectedCandidates: {
        statusId: 1,
        count: 0,
        customStatuses: [],
      },
      offeredCandidates: {
        statusId: 5,
        count: 0,
        customStatuses: [],
      },
      hiredCandidates: {
        statusId: 6,
        count: 0,
        customStatuses: [],
      },
      companyName: "updatedName",
      companyURL: "tester",
      postOnHH: false,
      hasLogo: true,
      hiringManagerIds: [46, 44, 48, 1],
      followerIds: [1],
      allowedUserIds: [1, 47, 46, 44, 48],
      recruiterIds: [],
      deleted: false,
      lastModified: 1620979740,
      sponsoredDate: null,
      isSample: false,
      jobCode: null,
      salary: "£50,000",
      remoteOption: "NotRemote",
      objectID: "33",
      _highlightResult: {
        title: {
          value: "Sample 1",
          matchLevel: "none",
          matchedWords: [],
        },
        location: {
          value: "cork",
          matchLevel: "none",
          matchedWords: [],
        },
        country: {
          value: "United Kingdom",
          matchLevel: "none",
          matchedWords: [],
        },
        cleanDescription: {
          value:
            "Job purpose Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish. The job purpose is usually no more than a few sentences long. Duties and responsibilities List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position. List the primary duties and responsibilities in order of importance Begin each statement with an action verb Use the present tense of verbs Use gender neutral language Use generic language Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner” Qualifications State the minimum qualifications required to successfully perform the job. Qualifications include Education Specialized knowledge Skills Abilities Other characteristics such as personal characteristics Professional Certification Experience Perks/Benefits of the role Explain what benefits exist for the successful candidates.",
          matchLevel: "none",
          matchedWords: [],
        },
        category: {
          value: "No Category",
          matchLevel: "none",
          matchedWords: [],
        },
        owner: {
          value: "Test Admin",
          matchLevel: "none",
          matchedWords: [],
        },
        companyName: {
          value: "updatedName",
          matchLevel: "none",
          matchedWords: [],
        },
      },
      $$hashKey: "object:42",
    },
  ];

  let categoriesMenu = false;
  let locationsMenu = false;
  let ownersMenu = false;
  let stageMenu = false;

  let activeFilters = [];
  let categoryFitlers = [];
  let locationsFilter = [];
  let ownersFilter = [];
  let stagesFilter = [];

  const buildChipSet = (
    categoryFitlers,
    locationsFilter,
    ownersFilter,
    stagesFilter
  ) => {
    activeFilters = [
      ...categoryFitlers,
      ...locationsFilter,
      ...ownersFilter,
      ...stagesFilter,
    ];
  };

  $: buildChipSet(categoryFitlers, locationsFilter, ownersFilter, stagesFilter);

  $: console.log(activeFilters);

  const removeNonActiveFilter = (activeFilters) => {
    categoryFitlers = categoryFitlers.filter((c) => activeFilters.includes(c));
    locationsFilter = locationsFilter.filter((c) => activeFilters.includes(c));
    ownersFilter = ownersFilter.filter((c) => activeFilters.includes(c));
    stagesFilter = stagesFilter.filter((c) => activeFilters.includes(c));
  };

  const clearAll = () => {
    categoryFitlers = [];
    locationsFilter = [];
    ownersFilter = [];
    stagesFilter = [];
  };

  $: removeNonActiveFilter(activeFilters);
</script>

<div class="hidden md:flex pb-4 justify-between">
  <div class="1/3 flex items-center space-x-4">
    <div class="flex w-3/4">
      <ChipSet bind:chipArray={activeFilters} />
    </div>
    <span class="text-gray-500 whitespace-nowrap"> 3 out of 23 results </span>
  </div>

  <div class="flex text-gray-700 space-x-4">
    <button on:click={() => clearAll()}> Clear all </button>

    <Menu position="left" bind:open={categoriesMenu}>
      <span slot="menu_trigger" class="cursor-pointer z-50">
        <Button kind="white" size="large">
          <span class="mx-1">Categories</span>

          {#if categoryFitlers.length}
            <span
              class="bg-blue-100 text-blue-500 px-2 py-1 rounded-md text-xs flex items-center mx-1"
            >
              {categoryFitlers.length}
            </span>
          {/if}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mx-1 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </span>
      <div slot="menu_context" class="bg-white shadow-md rounded-md p-3">
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="checkbox id"
              name="checkbox id"
              type="checkbox"
              bind:group={categoryFitlers}
              value="Product"
              class="h-3 w-3 border-gray-300 svelte-112l3bx"
              aria-checked="true"
            />
          </div>
          <div class="ml-3 text-sm">
            <label
              for="checkbox id"
              class="font-medium text-gray-700 svelte-112l3bx">Product</label
            >
          </div>
        </div>

        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="checkbox id"
              name="checkbox id"
              type="checkbox"
              bind:group={categoryFitlers}
              value="Dev"
              class="h-3 w-3 border-gray-300 svelte-112l3bx"
              aria-checked="true"
            />
          </div>
          <div class="ml-3 text-sm">
            <label
              for="checkbox id"
              class="font-medium text-gray-700 svelte-112l3bx">Dev</label
            >
          </div>
        </div>
      </div>
    </Menu>

    <Menu position="left" bind:open={locationsMenu}>
      <span slot="menu_trigger" class="cursor-pointer z-50">
        <Button kind="white" size="large">
          <span class="mx-1">Locations</span>

          {#if locationsFilter.length}
            <span
              class="bg-blue-100 text-blue-500 px-2 py-1 rounded-md text-xs flex items-center mx-1"
            >
              {locationsFilter.length}
            </span>
          {/if}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mx-1 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </span>
      <div slot="menu_context" class="bg-white shadow-md rounded-md p-3">
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="checkbox id"
              name="checkbox id"
              type="checkbox"
              bind:group={locationsFilter}
              value="Ireland"
              class="h-3 w-3 border-gray-300 svelte-112l3bx"
              aria-checked="true"
            />
          </div>
          <div class="ml-3 text-sm">
            <label
              for="checkbox id"
              class="font-medium text-gray-700 svelte-112l3bx">Ireland</label
            >
          </div>
        </div>

        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="checkbox id"
              name="checkbox id"
              type="checkbox"
              bind:group={locationsFilter}
              value="Uk"
              class="h-3 w-3 border-gray-300 svelte-112l3bx"
              aria-checked="true"
            />
          </div>
          <div class="ml-3 text-sm">
            <label
              for="checkbox id"
              class="font-medium text-gray-700 svelte-112l3bx">Uk</label
            >
          </div>
        </div>
      </div>
    </Menu>

    <Menu position="left" bind:open={ownersMenu}>
      <span slot="menu_trigger" class="cursor-pointer z-50">
        <Button kind="white" size="large">
          <span class="mx-1">Owners</span>

          {#if ownersFilter.length}
            <span
              class="bg-blue-100 text-blue-500 px-2 py-1 rounded-md text-xs flex items-center mx-1"
            >
              {ownersFilter.length}
            </span>
          {/if}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mx-1 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </span>
      <div slot="menu_context" class="bg-white shadow-md rounded-md p-3">
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="checkbox id"
              name="checkbox id"
              type="checkbox"
              bind:group={ownersFilter}
              value="Max verstappen"
              class="h-3 w-3 border-gray-300 svelte-112l3bx"
              aria-checked="true"
            />
          </div>
          <div class="ml-3 text-sm">
            <label
              for="checkbox id"
              class="font-medium text-gray-700 svelte-112l3bx"
              >Max verstappen</label
            >
          </div>
        </div>
      </div>
    </Menu>

    <Menu position="left" bind:open={stageMenu}>
      <span slot="menu_trigger" class="cursor-pointer z-50">
        <Button kind="white" size="large">
          <span class="mx-1">Stages</span>

          {#if stagesFilter.length}
            <span
              class="bg-blue-100 text-blue-500 px-2 py-1 rounded-md text-xs flex items-center mx-1"
            >
              {stagesFilter.length}
            </span>
          {/if}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mx-1 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </span>
      <div slot="menu_context" class="bg-white shadow-md rounded-md p-3">
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="checkbox id"
              name="checkbox id"
              type="checkbox"
              bind:group={stagesFilter}
              value="Published"
              class="h-3 w-3 border-gray-300 svelte-112l3bx"
              aria-checked="true"
            />
          </div>
          <div class="ml-3 text-sm">
            <label
              for="checkbox id"
              class="font-medium text-gray-700 svelte-112l3bx">Published</label
            >
          </div>
        </div>

        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id="checkbox id"
              name="checkbox id"
              type="checkbox"
              bind:group={stagesFilter}
              value="Cv needs to be reviewed by team lead"
              class="h-3 w-3 border-gray-300 svelte-112l3bx"
              aria-checked="true"
            />
          </div>
          <div class="ml-3 text-sm">
            <label
              for="checkbox id"
              class="font-medium text-gray-700 svelte-112l3bx"
              >Cv needs to be reviewed by team lead</label
            >
          </div>
        </div>
      </div>
    </Menu>
  </div>
</div>

<ul>
  {#each jobs as job}
    <JobItem {job} open={job.status === "Published"} />
  {/each}
</ul>
