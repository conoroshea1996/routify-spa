<script>
  import Calendar from "@event-calendar/core";
  import TimeGrid from "@event-calendar/time-grid";

  let plugins = [TimeGrid];
  let options = {
    view: "timeGridWeek",
    events: [
      // your list of events
    ],
  };

  const test = false;
</script>

<h1 class="text-blue-500 text-5xl">Hello world</h1>

<Calendar {plugins} {options} />
