<script>
  const sections = [
    {
      heading: "Personal",
      urls: [
        {
          name: "My Profile",
          url: "/settings/index",
        },
      ],
    },

    {
      heading: "Company",
      urls: [
        {
          name: "Company Details",
          url: "/settings/companydetails",
        },
        {
          name: "Job categories",
          url: "/settings/jobcategories",
        },
        {
          name: "Hiring team",
          url: "/settings/hiringteam",
        },
        {
          name: "Billing",
          url: "/settings/billing",
        },
      ],
    },

    {
      heading: "Recruiting",
      urls: [
        {
          name: "Candidate pipeline",
          url: "/settings/candidatepipeline",
        },
        {
          name: "Email templates",
          url: "/settings/emailtemplates",
        },
        {
          name: "Application form",
          url: "/settings/applicationform",
        },
        {
          name: "Feedback forms",
          url: "/settings/feedbackforms",
        },
        {
          name: "Careers page",
          url: "/settings/feedbackforms",
        },
        {
          name: "Job boards",
          url: "/settings/feedbackforms",
        },
        {
          name: "Compliance",
          url: "/settings/compliance",
        },
      ],
    },
  ];

  import SidebarNav from "../../lib/SidebarNav/SidebarNav.svelte";
  import Transistion from "../../lib/Transistion.svelte";
</script>

<main class=" px-4 mx-auto pb-10 lg:py-12">
  <div class="lg:grid lg:grid-cols-12">
    <SidebarNav {sections} activeUrl="My Profile" />
    <slot decorator={Transistion} />
  </div>
</main>
