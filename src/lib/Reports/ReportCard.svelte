<script lang="ts">
  // https://tailwindui.com/components/application-ui/data-display/stats
  /**
   * title for card
   */
  export let title: string;
  /**
   * number value to display
   */
  export let value: number | string;
</script>

<div class="p-6 bg-white shadow rounded-lg overflow-hidden">
  <dt class="text-sm font-medium text-gray-500 truncate">{title}</dt>
  <dd class="mt-1 text-3xl font-semibold text-gray-900">{value}</dd>
</div>
