<script>
  import Calendar from "@event-calendar/core";
  import TimeGrid from "@event-calendar/time-grid";
  import ListGrid from "@event-calendar/list";
  import DayGrid from "@event-calendar/day-grid";
  import Interaction from "@event-calendar/interaction";

  import { onMount } from "svelte";
  function _pad(num) {
    let norm = Math.floor(Math.abs(num));
    return (norm < 10 ? "0" : "") + norm;
  }
  function createEvents() {
    let days = [];
    for (let i = 0; i < 7; ++i) {
      let day = new Date();
      let diff = i - day.getDay();
      day.setDate(day.getDate() + diff);
      days[i] =
        day.getFullYear() +
        "-" +
        _pad(day.getMonth() + 1) +
        "-" +
        _pad(day.getDate());
    }

    return [
      {
        start: days[0] + " 00:00",
        end: days[0] + " 09:00",
        resourceId: 1,
        display: "background",
        editable: true,
      },
      {
        start: days[1] + " 12:00",
        end: days[1] + " 14:00",
        resourceId: 2,
        display: "background",
      },
      {
        start: days[2] + " 17:00",
        end: days[2] + " 24:00",
        resourceId: 1,
        display: "background",
      },
      {
        start: days[0] + " 10:00",
        end: days[0] + " 14:00",
        resourceId: 1,
        title: "The calendar can display background and regular events",
        color: "#FE6B64",
      },
      {
        start: days[1] + " 16:00",
        end: days[2] + " 08:00",
        resourceId: 2,
        title: "An event may span to another day",
        color: "#B29DD9",
      },
      {
        start: days[2] + " 09:00",
        end: days[2] + " 13:00",
        resourceId: 2,
        title:
          "Events can be assigned to resources and the calendar has the resources view built-in",
        color: "#779ECB",
      },
      {
        start: days[3] + " 14:00",
        end: days[3] + " 20:00",
        resourceId: 1,
        title: "",
        color: "#FE6B64",
      },
      {
        start: days[3] + " 15:00",
        end: days[3] + " 18:00",
        resourceId: 1,
        title: "Overlapping events are positioned properly",
        color: "#779ECB",
      },
      {
        start: days[5] + " 10:00",
        end: days[5] + " 16:00",
        resourceId: 2,
        title:
          "You have complete control over the <i><b>display</b></i> of events…",
        color: "#779ECB",
      },
      {
        start: days[5] + " 14:00",
        end: days[5] + " 19:00",
        resourceId: 2,
        title: "…and you can drag and drop the events!",
        color: "#FE6B64",
        editable: true,
      },
      {
        start: days[5] + " 18:00",
        end: days[5] + " 21:00",
        resourceId: 2,
        title: "",
        color: "#B29DD9",
      },
    ];
  }
  let plugins = [TimeGrid, ListGrid, DayGrid, Interaction];
  let calendarInstance;

  let calendar;
  let event;
  let showDetail = false;

  onMount(() => {
    calendar = new Calendar({
      target: calendarInstance,
      props: {
        plugins: plugins,
        options: {
          view: "timeGridWeek",
          editable: true,
          headerToolbar: {
            start: "prev,next today",
            center: "title",
            end:
              "dayGridMonth,timeGridWeek,timeGridDay,listWeek resourceTimeGridWeek",
          },

          resources: [
            { id: 1, title: "Resource A" },
            { id: 2, title: "Resource B" },
          ],
          scrollTime: "09:00:00",
          events: createEvents(),
          eventClick: (cx) => {
            showDetail = true;
            event = cx.event;
          },
        },
      },
    });
  });
</script>

<div bind:this={calendarInstance} />

{#if showDetail}
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />

      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true">&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
      >
        <div>
          <div class="mt-3 text-center sm:mt-5">
            <h3
              class="text-lg leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              {event.title}
            </h3>

            <p class="text-gray-500">Meeting from {event.start}</p>
            <p class="text-gray-500">Meeting to {event.end}</p>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <button
            on:click={() => (showDetail = false)}
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Go back to dashboard
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
