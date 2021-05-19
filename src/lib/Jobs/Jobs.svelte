<script>
  import JobItem from "./JobItem.svelte";
  import ChipSet from "hirehive-ui/src/Chips/ChipSet.svelte";
  import Menu from "hirehive-ui/src/Inputs/Menu.svelte";
  import Button from "hirehive-ui/src/Button/Button.svelte";
  import CheckBox from "hirehive-ui/src/Inputs/CheckBox.svelte";
  import FilterDropDown from "../Filters/FilterDropDown.svelte";
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

    <FilterDropDown
      filterName="Categories"
      facets={["Tech", "Sales", "HR"]}
      open={categoriesMenu}
      bind:activeFilters={categoryFitlers}
    />

    <FilterDropDown
      filterName="Locations"
      facets={["Ireland", "United Kingdom", "Germany"]}
      open={locationsMenu}
      bind:activeFilters={locationsFilter}
    />

    <FilterDropDown
      filterName="Owners"
      facets={["Dave", "Jack", "Max"]}
      open={ownersMenu}
      bind:activeFilters={ownersFilter}
    />

    <FilterDropDown
      filterName="Stages"
      facets={["Draft", "Interal", "Published"]}
      open={stageMenu}
      bind:activeFilters={stagesFilter}
    />
  </div>
</div>

<ul>
  {#each jobs as job}
    <JobItem {job} open={job.status === "Published"} />
  {/each}
</ul>
