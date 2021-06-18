<script lang="ts">
  import Calendar from "@event-calendar/core";
  import TimeGrid from "@event-calendar/time-grid";
  import DayGrid from "@event-calendar/day-grid";

  import { Switch, Select, TextInput, Button, trapFocus } from "hirehive-ui";
  import {
    getDate,
    getDay,
    format,
    addMinutes,
    isBefore,
    eachMinuteOfInterval,
    isAfter,
    subMinutes,
  } from "date-fns";

  import { onMount, tick } from "svelte";
  import { fade } from "svelte/transition";

  const TODAY = new Date();
  import { calendars } from "../../stores/calendar";
  import { attendees } from "../../stores/tags";
  import Tags from "../Candidates/Tags.svelte";
  import FilterDropDown from "../Filters/FilterDropDown.svelte";
  import { isToday } from "date-fns/esm";
  import Menu from "hirehive-ui/src/Inputs/Menu.svelte";
  import { isScrolledIntoView } from "../../utils/domUtils";
  let x = {
    attendees: [
      {
        userId: 100302,
        applicationId: 81,
        firstName: "Conor",
        lastName:
          'O Shea <span class="optional-text pos--rel z-0">(Candidate)</span>',
        email: "conor@hirehive.com",
        fullName:
          'Conor O Shea <span class="optional-text pos--rel z-0">(Candidate)</span>',
        color: "#f4f4f5",
      },
      {
        fullName:
          'Test Admin <span class="optional-text pos--rel z-0">(You)</span>',
        userId: 1,
        firstName: "Test",
        lastName: 'Admin <span class="optional-text pos--rel z-0">(You)</span>',
        email: "admin@hirehive.com",
        color: "#564737",
        calendarTypes: [1, 2],
        loading: false,
      },
      {
        fullName: "svelte dev",
        userId: 47,
        firstName: "svelte",
        lastName: "dev",
        email: "svelteDev@svelte.com",
        color: "#0AD139",
        calendarTypes: [],
        loading: false,
      },
    ],
    type: 1,
    personCompanyId: 46,
    personApplicationId: 81,
    jobId: 33,
    candidateName: "Conor O Shea",
    noteForCandidate: null,
    noteForAdmins: null,
    title: "Interview with Conor O Shea",
    timezone: "Europe/London",
    timezoneLabel: "Europe/London",
    jobTitle: "Sample 1",
    startTimeUTC: "2021-06-16T12:30:00.000Z",
    startTime: "2021-06-16T12:30:00.000Z",
    startHour: 13,
    startMinute: 30,
    endTimeUTC: "2021-06-16T13:10:00.000Z",
    endTime: "2021-06-16T13:10:00.000Z",
    endHour: 14,
    endMinute: 10,
    formattedTime: "01:30 pm - Wednesday, 16th June 2021",
    duration: 30,
    durationLabel: "40 Minute Meeting",
    start: "2021-06-16T12:30:00.000Z",
    end: "2021-06-16T13:10:00.000Z",
  };
  let allowedUsers: any[] = attendees;
  let plugins = [TimeGrid, DayGrid];

  export let candidate;
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
    header: "ec-header h-16 rounded-t-md",
    withScroll: "ec-with-scroll",
    hiddenScroll: "ec-hidden-scroll",
    body: "ec-body rounded-b-md",
    week: "ec-week",
    compact: "ec-compact",
    toolbar: "ec-toolbar",
    sidebar: "ec-sidebar",
    content: "ec-content",
    lines: "ec-lines",
    line: "ec-line",
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

  let handleEvent = async (timeInfo) => {
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
        extendedProps: {
          isNewEvent: true,
        },
      };

      calendar.addEvent(event);
      newEvent = event;
    }
  };

  let cancellNewEvent = () => {
    dateConfirmOpen.open = false;
    calendar.removeEvent(newEvent.id);
  };

  let events;

  const getCalendarData = () => {
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
    console.log(events);
  };

  let draggabble = true;

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
          date: TODAY,
          dayHeaderFormat: (info) => {
            const dayHeader = `${sorter[getDay(info)]} \n ${getDate(info)}`;
            return dayHeader;
          },
          titleFormat: (info) => {
            const formattedDate = format(TODAY, "PPPP");
            return `Today, ${formattedDate}`;
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
            const isNewEvent = eventInfo.event.extendedProps.isNewEvent;
            return `<a  ${
              isNewEvent ? "id='EVENT'" : ""
            } class="text-gray-500 block h-full w-full flex items-center justify-center pointer-events-none"> 
                <div class="z-20 block truncate">  
                  ${eventInfo.event.title}
                </div>
              </a>`;
          },
          eventDragStop: (info) => {
            // console.log(info);
          },
          dateClick: async (dateClickInfo) => {
            // clicked date thats passed
            const activeView = calendar.getOption("view");
            // should make types for this
            if (activeView === "dayGridMonth") {
              if (
                isBefore(dateClickInfo.date, TODAY) &&
                !isToday(dateClickInfo.date)
              ) {
                alert("date passed");
                return;
              }

              // hack as calendar doesn't offer change view function;
              // tried calendar.setOption("view", "the view we want") but doesn't work
              const dayButton = document.getElementsByClassName(
                "ec-timeGridDay"
              )[0] as HTMLButtonElement;
              calendar.setOption("date", dateClickInfo.date);
              dayButton.click();
              return;
            } else {
              if (isBefore(dateClickInfo.date, TODAY)) {
                alert("date passed");
                return;
              }
              handleEvent(dateClickInfo);

              await tick();
              await movePopup();
              setTimeSlotOptions(dateClickInfo.date);
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

        calendar.setOption("events", events);
      }
    }
  };
  $: toggleOverlayCalendar(overlayCalendar);

  let addAttendMenu;

  let tags;
  let interviewModel: any = {
    attendees: [],
    type: 1,
    personCompanyId: candidate.personCompanyId,
    personApplicationId: candidate.id,
    jobId: candidate.jobId,
    candidateName: `${candidate.firstName} ${candidate.lastName}`,
    noteForCandidate: null,
    noteForAdmins: null,
    title: `Interview with ${candidate.firstName} ${candidate.lastName}`,
    timezone: "Europe/London",
    timezoneLabel: "Europe/London",
    jobTitle: `${candidate.jobTitle}`,
  };

  let selectedAttendeeIds = [1, 100164];

  $: interviewModel.attendees = allowedUsers.filter((c) =>
    selectedAttendeeIds.includes(c.userId)
  );

  const addTags = (e) => {
    const details = e.detail;

    if (details.selectedFromOptions) {
      selectedAttendeeIds = [...selectedAttendeeIds, details.tag.userId];
    } else {
      const randomId = Math.floor(Math.random() * (500 - 1 + 1)) + 111105353;
      let externalUser: any = {
        firstName: details.tag,
        externalEmail: details.tag,
        external: true,
        email: details.tag,
        fullName: details.tag,
        userId: randomId,
      };
      allowedUsers = [...allowedUsers, externalUser];
      selectedAttendeeIds = [...selectedAttendeeIds, randomId];
    }
  };

  const updateTimes = async (time, type: "start" | "end") => {
    if (type === "start") {
      let settingTimeAfter = isBefore(newEvent.end, time);
      if (settingTimeAfter) {
        newEvent.end = addMinutes(time, 30);
      }
      newEvent.start = time;
    } else {
      let settingTimeAfter = isAfter(newEvent.start, time);
      if (settingTimeAfter) {
        newEvent.start = subMinutes(time, 30);
      }
      newEvent.end = time;
    }
    calendar.updateEvent(newEvent);

    await movePopup();
  };

  const movePopup = async () => {
    await tick();
    const newEventNode: HTMLElement = document.getElementById(
      "EVENT"
    ) as HTMLElement;

    const isInView = isScrolledIntoView(newEventNode);

    if (!isInView) {
      newEventNode.scrollIntoView();
      await tick();
    }

    const { x, y, top } = newEventNode.getBoundingClientRect();

    // if its clicked high up in calendar lower postion more;
    const calculateY = top < 350 ? 250 : 325;

    console.log(newEventNode.getBoundingClientRect());
    dateConfirmOpen.open = true;
    dateConfirmOpen.x = x - 425;
    dateConfirmOpen.y = top - calculateY;
  };

  let timeSlotOptions: Date[];

  const setTimeSlotOptions = (date: Date) => {
    var copiedDate = new Date(date.getTime());
    timeSlotOptions = eachMinuteOfInterval(
      {
        start: copiedDate.setHours(6, 0, 0, 0),
        end: copiedDate.setHours(23, 0, 0, 0),
      },
      { step: 15 }
    );
  };

  setTimeSlotOptions(TODAY);
  getCalendarData();

  let startTimeMenu;
  let endTimeMenu;

  let popup;
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

      {#if interviewType === "Onsite"}
        <div class="flex flex-col my-4">
          <p class="text-gray-700 font-medium">Where</p>
          <TextInput full />
        </div>
      {/if}
      <div class="flex flex-col my-4">
        <p class="text-gray-700 font-medium">Attendees</p>

        <ul
          class="divide-y divide-gray-200 border border-gray-200 rounded-t-md overflow-hidden"
        >
          {#each allowedUsers.filter( (a) => selectedAttendeeIds.includes(a.userId) ) as attendee}
            <li
              class="bg-white text-gray-700 flex items-center justify-between p-3 font-medium"
            >
              <span class="truncate">
                {@html attendee.fullName}
                {#if attendee.external} (External) {/if}</span
              >
              <button
                on:click={() => {
                  selectedAttendeeIds = selectedAttendeeIds.filter(
                    (id) => id !== attendee.userId
                  );
                }}
              >
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
        </ul>

        <div
          class="bg-white  border-l border-r border-b border-gray-200 rounded-b-md text-gray-700 flex items-center justify-between p-3 font-medium"
        >
          <Tags
            bind:open={addAttendMenu}
            autoComplete={attendees}
            autoCompleteKey={"email"}
            onlyAutocomplete={false}
            placeholder="Search team members"
            minChars={0}
            loadAll={true}
            on:tagAdded={addTags}
            bind:tags
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

            <span slot="create" let:value>
              Add external attendee {value}
            </span>
          </Tags>
        </div>
      </div>

      <div class="flex flex-col my-4">
        <p class="text-gray-700 font-medium py-2">Settings</p>

        <nav class="space-y-1" aria-label="Sidebar">
          <a
            href="#"
            class="text-gray-700 flex items-center px-3 py-2 text-sm font-medium rounded-md space-x-2"
            aria-current="page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
              />
            </svg>
            <span class="truncate"> Add hiring team </span>
          </a>
          <a
            href="#"
            class="text-gray-700 flex items-center px-3 py-2 text-sm font-medium rounded-md space-x-2"
            aria-current="page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="truncate"> Manage connected calendars </span>
          </a>
        </nav>
      </div>
    </div>
  </aside>
</main>

{#if dateConfirmOpen.open}
  <div
    use:trapFocus={{
      allowOutsideClick: true,
      clickOutsideDeactivates: false,
      escapeDeactivates: false,
    }}
    transition:fade
    on:keydown={(e) => handleKey(e)}
    class="flex fixed z-40 transition-all left-0 top-0 px-12 h-72 w-96"
    style="left: {dateConfirmOpen.x}px; top:{dateConfirmOpen.y}px;"
  >
    <div
      class="absolute left-0 top-0 right-0 bg-white rounded-xl shadow-popover h-full  w-full flex-1"
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
                />
              </svg>
            </div>
          </button>
        </div>

        {#if newEvent && newEvent.start && newEvent.end}
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
                {format(newEvent.start, "PPPP")}
                <br />

                <Menu bind:open={startTimeMenu}>
                  <button
                    type="button"
                    slot="menu_trigger"
                    class="font-medium text-gray-700"
                    bind:this={popup}
                  >
                    {format(newEvent.start, "p")}
                  </button>
                  <div
                    slot="menu_context"
                    class="z-50 h-60 overflow-y-auto rounded-md border border-gray-200 bg-white"
                  >
                    {#each timeSlotOptions as timeSlot}
                      <button
                        on:click={() => {
                          startTimeMenu = false;
                          updateTimes(timeSlot, "start");
                          popup.focus();
                        }}
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                      >
                        {format(timeSlot, "p")}
                      </button>
                    {/each}
                  </div>
                </Menu>
                -
                <Menu bind:open={endTimeMenu}>
                  <button
                    type="button"
                    slot="menu_trigger"
                    class="font-medium text-gray-700"
                  >
                    {format(newEvent.end, "p")}
                  </button>
                  <div
                    slot="menu_context"
                    class="z-50 h-60 overflow-y-auto rounded-md border border-gray-200 bg-white"
                  >
                    {#each timeSlotOptions.slice(2) as timeSlot}
                      <button
                        on:click={() => {
                          endTimeMenu = false;
                          updateTimes(timeSlot, "end");
                          popup.focus();
                        }}
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        role="menuitem"
                      >
                        {format(timeSlot, "p")}
                      </button>
                    {/each}
                  </div>
                </Menu>
                (GMT +1 Dublin)
              </p>
            </div>
          </div>
        {/if}

        <div class="flex justify-end py-1">
          <div class="flex items-center">
            <Button kind="primary" on:click={() => console.log(interviewModel)}>
              Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style global>
  .ec-body:not(.ec-compact) .ec-line:nth-child(even):after {
    border: none !important;
  }
</style>
