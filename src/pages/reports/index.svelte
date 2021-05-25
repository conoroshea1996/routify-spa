<script>
  import ReportCard from "$lib/Reports/ReportCard.svelte";
  import { overView } from "../../stores/reports";
  let totalConversion = `${parseFloat(
    ($overView.data.totalViews / $overView.data.totalApplications) * 100
  ).toFixed(2)}%`;
</script>

<div class="px-1 my-8">
  <h1 class="text-xl font-bold text-gray-900">All Jobs</h1>

  <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-6">
    <ReportCard title="Total views" value={$overView.data.totalViews} />
    <ReportCard
      title="Total applications"
      value={$overView.data.totalApplications}
    />
    <ReportCard title="Total conversion rate" value={totalConversion} />
    <ReportCard title="Interviewing" value={$overView.data.interviewing} />
    <ReportCard title="Offered" value={$overView.data.offered} />
    <ReportCard title="Hired" value={$overView.data.hired} />
  </dl>
</div>
