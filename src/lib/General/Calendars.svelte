<script lang="ts">
  import Calendar from "@event-calendar/core";
  import TimeGrid from "@event-calendar/time-grid";
  import DayGrid from "@event-calendar/day-grid";

  import { Switch, Select, TextInput, Button, trapFocus } from "hirehive-ui";
  import { getDate, getDay, format, addMinutes, isBefore } from "date-fns";

  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import { calendars } from "../../stores/calendar";

  let plugins = [TimeGrid, DayGrid];

  let userCalendars = calendars;
  const sorter = {
    0: "sun", // << if sunday is first day of week
    1: "mon",
    2: "tues",
    3: "wednesday",
    4: "thursday",
    5: "fri",
    6: "sat",
  };

  const theme = {
    calendar: "ec",
    header: "ec-header h-16",
    withScroll: "ec-with-scroll",
    hiddenScroll: "ec-hidden-scroll",
    body: "ec-body",
    week: "ec-week",
    compact: "ec-compact",
    toolbar: "ec-toolbar",
    sidebar: "ec-sidebar",
    content: "ec-content",
    lines: "ec-lines",
    line: "ec-line border-opacity-0",
    days: "ec-days",
    day: "ec-day cursor-pointer text-gray-700 whitespace-pre-line font-medium capitalize",
    dayHead: "ec-day-head",
    today: "ec-today",
    otherMonth: "ec-other-month",
    highlight: "ec-highlight",
    events: "ec-events mx-0",
    event: "ec-event",
    eventTime: "ec-event-time",
    eventTitle: "ec-event-title text-gray-500 ",
    bgEvents: "ec-bg-events bg-red-400",
    bgEvent: "ec-bg-event",
    hiddenTimes: "ec-hidden-times",
    time: "ec-time text-gray-500",
    button: "ec-button",
    buttonGroup: "ec-button-group",
    icon: "ec-icon",
    active: "ec-active",
    title: "ec-title",
    month: "ec-month",
    daySide: "ec-day-side",
    eventTag: "ec-event-tag",
    list: "ec-list",
    noEvents: "ec-no-events cursor-pointer",
    resource: "ec-resource",
    resourceTitle: "ec-resource-title",
  };

  let calendar: Calendar;
  let node: HTMLElement;

  let newEvent;

  let handleEvent = (timeInfo) => {
    if (dateConfirmOpen.open) {
      const endTime = addMinutes(timeInfo.date, defaultInMins);

      (newEvent.start = timeInfo.date),
        (newEvent.end = endTime),
        calendar.updateEvent(newEvent);
    } else {
      const endTime = addMinutes(timeInfo.date, defaultInMins);
      let event = {
        start: timeInfo.date,
        end: endTime,
        resourceId: "Scheduled Interviews",
        title: "Interview with Conor O Shea ",
        color: "#FEF3C7",
        id: "newEvent",
      };

      calendar.addEvent(event);
      newEvent = event;
    }
  };

  let cancellNewEvent = () => {
    dateConfirmOpen.open = false;
    calendar.removeEvent(newEvent.id);
    newEvent = null;
    console.log(calendar);
  };

  let events;

  const getCalendarData = () => {
    console.log("fetch");
    events = userCalendars.events.map((c, id) => {
      let event = {
        start: c.start,
        end: c.end,
        resourceId: c.calendarId,
        title: `${c.title} `,
        color: c.bgColor,
        editable: false,
        id,
      };

      return event;
    });
  };

  let draggabble = true;

  let date = new Date();

  onMount(() => {
    calendar = new Calendar({
      target: node,
      props: {
        plugins,
        options: {
          view: "timeGridWeek",
          events: events,
          height: "700px",
          headerToolbar: {
            // start: "prev,next today",
            start: "title",
            center: "",
            end: "dayGridMonth,timeGridWeek,timeGridDay, prev,next",
          },
          date,
          dayHeaderFormat: (x) => {
            const dayHeader = `${sorter[getDay(x)]} \n ${getDate(x)}`;
            return dayHeader;
          },
          eventDragStart: (info) => {
            // console.log(info);
          },
          eventMouseEnter: (info) => {},
          eventMouseLeave: () => {
            draggabble = false;
          },
          eventClick: (eventClickInfo) => {
            alert("busy");
            eventClickInfo.jsEvent.stopPropagation();
            return;
          },
          noEventsClick: (clickInfo) => {
            // console.log(clickInfo, "NO EVENTS CLICKED");
          },
          eventContent: (eventInfo) => {
            // console.log(eventInfo);
            // return string or object

            return `<a class="text-gray-500 truncate block h-full w-full pointer-events-none"> 
                <div class="h-full w-full z-20 block">  
                  ${eventInfo.event.title}
                </div>
              </a>`;
          },
          eventDragStop: (info) => {
            // console.log(info);
          },
          dateClick: (dateClickInfo) => {
            // clicked date thats passed
            // should make types for this
            const activeView = calendar.getOption("view");

            console.log(date);
            if (activeView === "dayGridMonth") {
              // hack as calendar doesn't offer change view function;
              // tried calendar.setOption("view", "the view we want") but doesn't work
              const dayButton = document.getElementsByClassName(
                "ec-timeGridDay"
              )[0] as HTMLButtonElement;
              calendar.setOption("date", dateClickInfo.date);
              dayButton.click();
              return;
            } else {
              if (isBefore(dateClickInfo.date, new Date())) {
                alert("date passed");
                return;
              }
              handleEvent(dateClickInfo);
              const target: HTMLElement = dateClickInfo.jsEvent.target;
              dateConfirmOpen.x = target.offsetLeft;
              dateConfirmOpen.y = dateClickInfo.jsEvent.layerY;
              dateConfirmOpen.open = true;

              if (popup) {
                popup.focus();
              }
            }
          },
          slotDuration: "00:15:00",
          slotLabelFormat: (time) => {
            const dateString = time.toString();
            if (dateString.includes(":30:")) {
              return "";
            } else {
              return format(time, "hh aaaaa'm'");
            }
          },
          theme,

          buttonText: {
            today: "today",
            dayGridMonth: "month",
            listDay: "list",
            listWeek: "list",
            listMonth: "list",
            listYear: "list",
            resourceTimeGridDay: "day",
            resourceTimeGridWeek: "week",
            timeGridDay: "day",
            timeGridWeek: "week",
          },
          slotMinTime: "06:00:00",
          slotMaxTime: "22:30:00",
          locale: new Intl.DateTimeFormat("en-GB", {
            dateStyle: "full",
            timeStyle: "long",
          }),
        },
      },
    });
  });

  let defaultTime = "30 mins";
  let defaultInMins = 30;
  $: defaultInMins =
    defaultTime === "30 mins" ? 30 : defaultTime === "60 mins" ? 60 : 15;

  let interviewType = "Phone";

  let dateConfirmOpen = {
    x: 0,
    y: 0,
    open: false,
  };

  const handleKey = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "Escape") {
      cancellNewEvent();
    }
  };

  let overlayCalendar = true;

  const toggleOverlayCalendar = (overlayCalendar) => {
    if (calendar) {
      console.log(calendar);
      if (!overlayCalendar) {
        calendar.setOption("events", []);
      } else {
        getCalendarData();

        events.map((event) => calendar.addEvent(event));
      }
    }
  };
  $: toggleOverlayCalendar(overlayCalendar);

  let popup;

  getCalendarData();
</script>

<div class="px-4 py-4 border-b border-gray-200 sm:px-6">
  <div class="flex justify-between items-center flex-wrap sm:flex-nowrap">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div class="ml-4">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Schedule an interview
        </h3>
      </div>
    </div>
    <div class="flex-shrink-0 flex items-center space-x-4">
      <Switch bind:value={overlayCalendar} />
      <p class="text-gray-700">Overlay my calendar</p>
    </div>
  </div>
</div>

<main class="min-w-0 flex-1 border-t border-gray-200 lg:flex">
  <!-- Primary column -->
  <section
    aria-labelledby="primary-heading"
    class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last mx-2 rounded-md py-4"
  >
    <div bind:this={node} />
  </section>

  <!-- Secondary column (hidden on smaller screens) -->
  <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
    <div
      class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-50 py-6 px-8"
    >
      <p class="text-gray-700 font-medium">
        Select a time slot in the calendar.
      </p>

      <div class="flex flex-col my-4">
        <p class="text-gray-700 font-medium">Allotted time</p>
        <Select
          bind:value={defaultTime}
          full
          options={["15 mins", "30 mins", "60 mins"]}
        />
      </div>

      <div class="flex flex-col my-4">
        <p class="text-gray-700 font-medium">Interview type</p>
        <Select
          bind:value={interviewType}
          full
          options={["Phone", "Online", "Onsite"]}
        />
      </div>

      <div class="flex flex-col my-4">
        <p class="text-gray-700 font-medium">Attendees</p>

        <ul
          class="divide-y divide-gray-200 border border-gray-200 rounded-md overflow-hidden"
        >
          {#each ["Candidate Name", "You"] as name}
            <li
              class="bg-white text-gray-700 flex items-center justify-between p-3 font-medium"
            >
              <span class="truncate"> {name} </span>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </li>
          {/each}
          <li
            class="bg-white text-gray-700 flex items-center justify-between p-3 font-medium"
          >
            <button class="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span class="font-medium text-gray-700">
                Add another attendee
              </span>
            </button>
          </li>
        </ul>
      </div>

      {#if interviewType === "Onsite"}
        <div class="flex flex-col my-4">
          <p class="text-gray-700 font-medium">Where</p>
          <TextInput full />
        </div>
      {/if}
    </div>
  </aside>
</main>

{#if dateConfirmOpen.open}
  <div
    use:trapFocus
    transition:fade
    on:keydown={(e) => handleKey(e)}
    class="hidden sm:block fixed z-40 transition-all left-0 top-0 h-96 w-96"
    style="left: {dateConfirmOpen.x}px; top:{dateConfirmOpen.y}px;"
  >
    <div
      class="absolute left-0 top-0 right-0 bg-white rounded-xl shadow-popover max-h-full overflow-y-auto"
      bind:this={popup}
      tabindex="-1"
    >
      <div class="p-6">
        <div class="flex items-center pb-6">
          <h2
            class="flex-grow text-base font-bold leading-8 truncate text-gray-800"
          >
            Confirm details
          </h2>
          <button
            on:click={() => cancellNewEvent()}
            class="-mr-1 -mt-1 flex-shrink-0 flex items-center justify-center text-gray-600 hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-gray w-8 h-8 rounded-full transition ease-in-out duration-150"
            ><div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
                ><line x1="18" y1="6" x2="6" y2="18" /><line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                /></svg
              >
            </div>
          </button>
        </div>

        <div class="px-4">
          <div class="py-2 flex space-x-6 text-sm font-medium">
            <p class="text-gray-500">What</p>
            <p class="text-gray-700">Interview for Product Designer</p>
          </div>
          <div class="py-2 space-x-6 flex text-sm font-medium">
            <p class="text-gray-500">Who</p>
            <p class="text-gray-700">Candidate name</p>
          </div>
          <div class="py-2 flex space-x-6 text-sm font-medium">
            <p class="text-gray-500">When</p>
            <p class="text-gray-700">
              Wed, April 17, 2021
              <br />
              1pm - 2pm (GMT +1 Dublin)
            </p>
          </div>
        </div>

        <div class="flex justify-end py-1">
          <div class="flex items-center">
            <Button kind="primary">Schedule</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style global>
  .x {
    pointer-events: none !important;
  }

  .ec-line::after:nth-child(3n) {
    border-color: blue !important;
  }

  .ec-body:not(.ec-compact) .ec-line:nth-child(even):after {
    border-bottom-style: none;
  }
</style>
