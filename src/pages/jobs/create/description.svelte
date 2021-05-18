<script lang="ts">
  import { beforeUrlChange, focus } from "@roxi/routify";

  import Button from "hirehive-ui/src/Button/Button.svelte";

  import { getContext, onMount } from "svelte";

  let instance: Editor;
  import Editor from "../../editor.svelte";
  let { job } = getContext("Jobs_Context");
  let cf: HTMLElement;
  let x =
    '<h2>   New header   </h2><p>  <b> Job purpose </b>  </p><p>   Provide a brief description of the general nature of the position; an overview of why the job exists; and what the job is to accomplish.   </p><p>   The job purpose is usually no more than a few sentences long.# </p><p> <a href="https://editorjs.io/"><font color="#0070ff">Link test</font></a> </p><h2> <i>  Duties and responsibilities  </i> </h2><p>   List the primary job duties and responsibilities using headings and then give examples of the types of activities under each heading. Identify between three and eight primary duties and responsibilities for the position.   </p><ul> <li>   List the primary duties and responsibilities in order of importance   </li><li>   Begin each statement with an action verb   </li><li>   Use the present tense of verbs   </li><li>   Use gender neutral language   </li><li>   Use generic language   </li><li>   Where appropriate use qualifiers to clarify the task – where, when, why or how often – for example instead of “greet visitor to the office” use “greet visitors to the office in a professional and friendly manner”   </li> </ul><p>  <b> Qualifications </b>  </p><p>   State the minimum qualifications required to successfully perform the job.   </p><p>   Qualifications include   </p><ul> <li>   Education   </li><li>   Specialized knowledge   </li><li>   Skills   </li><li>   Abilities   </li><li>   Other characteristics such as personal characteristics   </li><li>   Professional Certification   </li><li>   Experience   </li> </ul><p>   Perks/Benefits of the role   </p>';
  onMount(async () => {
    if ($job.description) {
      await instance.renderFromString($job.description);
    } else {
      await instance.renderFromString(x);
    }
    $job.description = await instance.getHtml();

    console.log("mounted");
  });

  $beforeUrlChange(async () => {
    $job.description = await instance.getHtml();

    return true;
  });
</script>

<section>
  <div class="shadow sm:rounded-md sm:overflow-hidden h-full">
    <h1
      bind:this={cf}
      class=" text-xl font-semibold p-4 border-b border-gray-300"
    >
      Job description
    </h1>
    <div class="px-4 py-3 sm:px-6 h-full">
      <div class="my-2 flex justify-between item-center">
        <div class="w-1/4 flex">
          <span class="font-medium text-gray-500"> Body</span>
        </div>
        <div class="w-3/4">
          <Editor bind:this={instance} />
        </div>
      </div>
      <div class="flex justify-end">
        <Button kind="secondary">Next: Application form</Button>
      </div>
    </div>
  </div>
</section>
