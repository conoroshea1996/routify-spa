<script>
  import { Chart } from "frappe-charts";
  import { afterUpdate, onMount } from "svelte";

  let node;
  let chart;

  export let data;

  const drawChart = (data) => {
    chart = new Chart(node, {
      data,
      height: 400,
      type: "line",
    });
  };

  afterUpdate(() => drawChart(data));

  onMount(() => {
    drawChart(data);
  });
</script>

<div bind:this={node} />
