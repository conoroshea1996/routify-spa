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
