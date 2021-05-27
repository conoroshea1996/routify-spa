<script>
  import Calendar from "@event-calendar/core";
  import TimeGrid from "@event-calendar/time-grid";
  import ListGrid from "@event-calendar/list";
  import DayGrid from "@event-calendar/day-grid";

  import { agendas } from "../stores/agenda";
  import { onMount } from "svelte";

  const interviews = $agendas.interviews.map((i) => {
    const endTime = new Date(i.endTimeUTC);
    const expired = endTime.getTime() < Date.now();

    let extendedProps = {
      expired,
    };
    return {
      start: i.startTime,
      end: i.endTime,
      resourceId: 1,
      display: "red",
      editable: false,
      cancelled: i.cancelled,
      extendedProps,
    };
  });

  // let x = [
  //   {
  //     start: days[0] + " 00:00",
  //     end: days[0] + " 09:00",
  //     resourceId: 1,
  //     display: "background",
  //     editable: true,
  //   },
  //   {
  //     start: days[1] + " 12:00",
  //     end: days[1] + " 14:00",
  //     resourceId: 2,
  //     display: "background",
  //   },
  //   {
  //     start: days[2] + " 17:00",
  //     end: days[2] + " 24:00",
  //     resourceId: 1,
  //     display: "background",
  //   },
  //   {
  //     start: days[0] + " 10:00",
  //     end: days[0] + " 14:00",
  //     resourceId: 1,
  //     title: "The calendar can display background and regular events",
  //   },
  //   {
  //     start: days[1] + " 16:00",
  //     end: days[2] + " 08:00",
  //     resourceId: 2,
  //     title: "An event may span to another day",
  //   },
  //   {
  //     start: days[2] + " 09:00",
  //     end: days[2] + " 13:00",
  //     resourceId: 2,
  //     title:
  //       "Events can be assigned to resources and the calendar has the resources view built-in",
  //   },
  //   {
  //     start: days[3] + " 14:00",
  //     end: days[3] + " 20:00",
  //     resourceId: 1,
  //     title: "",
  //   },
  //   {
  //     start: days[3] + " 15:00",
  //     end: days[3] + " 18:00",
  //     resourceId: 1,
  //     title: "Overlapping events are positioned properly",
  //   },
  //   {
  //     start: days[5] + " 10:00",
  //     end: days[5] + " 16:00",
  //     resourceId: 2,
  //     title:
  //       "You have complete control over the <i><b>display</b></i> of events…",
  //   },
  //   {
  //     start: days[5] + " 14:00",
  //     end: days[5] + " 19:00",
  //     resourceId: 2,
  //     title: "…and you can drag and drop the events!",
  //     editable: true,
  //   },
  //   {
  //     start: days[5] + " 18:00",
  //     end: days[5] + " 21:00",
  //     resourceId: 2,
  //     title: "",
  //   },
  // ];

  let plugins = [TimeGrid, ListGrid, DayGrid];
  let calendarInstance;

  let event;
  let showDetail = false;
  export let calendar;
  export let selectedDate;

  onMount(() => {
    calendar = new Calendar({
      target: calendarInstance,
      props: {
        plugins: plugins,
        options: {
          view: "dayGridMonth",
          editable: false,
          headerToolbar: {
            start: "title",
            center: "",
            end: "prev,next",
          },
          titleFormat: (date) => {
            selectedDate = date;
            const month = date.toString().split(" ")[1];
            return month;
          },

          eventContent(eventInfo) {
            console.log(eventInfo);
            const extraProps = eventInfo.event.extendedProps;

            return "<div class='bg-yellow-400 absolute left-0 rounded-full h-10 w-10'></div>";
          },
          dateClick(dateClickInfo) {
            selectedDate = dateClickInfo.date;
            alert("Place holder component");
          },
          monthMode: true,
          events: interviews,
        },
      },
    });
  });
</script>

<div bind:this={calendarInstance} class="p-6 " />

<style global>
  .ec-event {
    position: absolute;
    background-color: transparent !important;
    margin: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ec-events {
    position: relative;
    margin: 0;
  }

  .ec-events > div:not(:first-child) {
    display: none;
  }

  .ec-events div:first-child {
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 2;
  }

  .ec-day-head {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
  }
  .ec-day {
    position: relative;
    cursor: pointer;
  }
  .ec-body:not(.ec-list) {
    border-top: 1px #dadce0 solid;
  }

  .ec-header {
    border: white;
  }
  .ec-month > .ec-days > .ec-day {
    border: transparent;
    font-weight: 500;
  }
  .ec-body {
    background-color: white;
  }
</style>
