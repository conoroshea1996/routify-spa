<script lang="ts">
  import { CheckBox, Badge } from "hirehive-ui";
  import { candidateBadgeType } from "../../utils/badgeType";
  import Rating from "../Rating/rating.svelte";
  import SearchHighlight from "./SearchHighlight.svelte";
  export let selectedCandidateIds: string[];
  export let candidate: any;
  export let columnsToShow: string[];
</script>

<!-- <tr class:bg-blue-50={selectedCandidateIds.includes(candidate.id)}>
  <td class="px-2">
    <CheckBox
      size="medium"
      value={candidate.id}
      bind:group={selectedCandidateIds}
    />
  </td>

  <td
    class="py-4 whitespace-nowrap"
    class:hidden={!columnsToShow.includes("Name")}
  >
    <div class="flex items-center">
      <div
        class="text-sm font-medium text-gray-900 flex items-center space-x-2"
      >
        <span> {candidate.fullName}</span>
      </div>
    </div>
  </td>
  <td
    class="px-6 py-4 whitespace-nowrap"
    class:hidden={!columnsToShow.includes("Current title")}
  >
    <div class="text-sm text-gray-500">
      {candidate.currentTitle}
    </div>
  </td>

  <td
    class="px-6 py-4 whitespace-nowrap"
    class:hidden={!columnsToShow.includes("Status")}
  >
    <Badge kind={candidateBadgeType(candidate.parentStatusId)}
      >{candidate.statusName}</Badge
    >
  </td>
  <td
    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex flex-col"
    class:hidden={!columnsToShow.includes("Sourced")}
  >
    <span>{candidate.dateApplied}</span>
    <span class="text-xs"> get date from now to apply </span>
  </td>
  <td
    class="px-6 py-4 whitespace-nowrap text-sm font-medium"
    class:hidden={!columnsToShow.includes("Tags")}
  >
    <Badge kind="gray">Good</Badge>
  </td>

  <td
    class="px-6 py-4 whitespace-nowrap text-sm font-medium"
    class:hidden={!columnsToShow.includes("Rating")}
  >
    <Rating rating={candidate.rating} />
  </td>

  <td
    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"
    class:hidden={!columnsToShow.includes("Applications")}
  >
    {candidate.otherApplications.length}
  </td>
</tr> -->

<li
  class="w-full"
  class:bg-blue-50={selectedCandidateIds.includes(candidate.id)}
>
  <div class="flex items-center  w-full py-2">
    <div class="flex-1 flex">
      <div class="items-center flex px-2">
        <CheckBox
          size="medium"
          value={candidate.id}
          bind:group={selectedCandidateIds}
        />
      </div>
      <div
        class="w-3/12 px-2 flex items-center space-x-4 text-gray-500 px-1 text-left text-sm font-medium text-gray-500  tracking-wider"
        class:hidden={!columnsToShow.includes("Name")}
      >
        <span>
          {candidate.fullName}
        </span>
      </div>

      <div
        class="w-3/12 px-4 py-3 text-left text-sm font-medium text-gray-500  tracking-wider col-span-2"
        class:hidden={!columnsToShow.includes("Current title")}
      >
        <span>
          {candidate.currentTitle}
        </span>
      </div>
      <div
        class="w-2/12 px-4 py-3 text-left text-sm font-medium text-gray-500  tracking-wider col-span-1"
        class:hidden={!columnsToShow.includes("Status")}
      >
        <Badge kind={candidateBadgeType(candidate.parentStatusId)} size="large"
          >{candidate.statusName}</Badge
        >
      </div>
      <div
        class="flex-1 px-4 py-3 text-left text-sm font-medium text-gray-500  tracking-wider col-span-1"
        class:hidden={!columnsToShow.includes("Sourced")}
      >
        <span>{candidate.dateApplied}</span>
      </div>

      <div
        class="flex-1  px-4 py-3 text-sm font-medium text-gray-500  tracking-wider col-span-1"
        class:hidden={!columnsToShow.includes("Tags")}
      >
        <Badge kind="gray" size="large">Good</Badge>
      </div>

      <div
        class="flex-1 px-2 py-3 text-xs font-medium text-gray-500  tracking-wider col-span-1"
        class:hidden={!columnsToShow.includes("Rating")}
      >
        <Rating rating={candidate.rating} />
      </div>

      <div
        class="flex-1 px-1 py-3 text-xs font-medium text-gray-500 tracking-wider col-span-1"
        class:hidden={!columnsToShow.includes("Applications")}
      >
        <span>
          {candidate.otherApplications.length}
        </span>
      </div>
    </div>
  </div>

  <SearchHighlight highlights={candidate._snippetResult} />
</li>
