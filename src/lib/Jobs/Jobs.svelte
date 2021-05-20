<script>
  import JobItem from "./JobItem.svelte";
  import ChipSet from "hirehive-ui/src/Chips/ChipSet.svelte";
  import Menu from "hirehive-ui/src/Inputs/Menu.svelte";
  import Button from "hirehive-ui/src/Button/Button.svelte";
  import CheckBox from "hirehive-ui/src/Inputs/CheckBox.svelte";
  import FilterDropDown from "../Filters/FilterDropDown.svelte";

  import { jobs } from "../../stores/jobs";

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
  {#each $jobs as job}
    <JobItem {job} open={job.status === "Published"} />
  {/each}
</ul>
