<script lang="ts">
  import Calendar from "tui-calendar";
  import "tui-calendar/dist/tui-calendar.css";
  import { onMount } from "svelte";

  let calendarElement: Element;
  let calendarInstance: Calendar;
  var today: Date = new Date();

  onMount(() => {
    calendarInstance = new Calendar(calendarElement, {
      defaultView: "week",
      useCreationPopup: true,
      useDetailPopup: true,
      disableDblClick: true,
      taskView: false,
      scheduleView: ["allday", "time"],
      template: {
        //allday: function(schedule) {
        //    return schedule.title + ' <i class="fa fa-refresh"></i>';
        //},
        //alldayTitle: function() {
        //    return "All Day";
        //}
      },
      month: {
        workweek: false,
        narrowWeekend: true,
      },
      week: {
        workweek: false,
        hourStart: 6,
        hourEnd: 22,
        narrowWeekend: true,
      },
    });

    calendarInstance.createSchedules([
      {
        id: "1",
        calendarId: "1",
        title: "Really busy thing",
        category: "time",
        dueDateClass: "",
        start: today.toString(),
        end: today.toString(),
      },
    ]);
  });
</script>

<h1 class="text-blue-500 text-5xl">Hello world</h1>

<div bind:this={calendarElement} />
