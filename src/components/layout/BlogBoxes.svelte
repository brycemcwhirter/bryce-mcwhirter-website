<script>
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import boxes from "../../data/boxes.json";


  import {
    faJava,
    faSquareJs,
    faReact,
    faPython,
  } from '@fortawesome/free-brands-svg-icons';

  const PROJECT = 'project';
  const PHOTO = 'photo';
  const POST = 'post';

  const photoStyle =
    'p-10 flex flex-col justify-center items-center h-full space-y-10 group hover:bg-secondaryOrange transition-colors duration-300 ';

  const postStyle =
    'flex flex-col items-center justify-center h-full hover:bg-secondaryBlue hover:text-primaryBlue transition-colors duration-300 group';

  const projectStyle =
    'space-y-3 p-10 hover:bg-secondaryGreen w-full h-full transition-colors duration-300 group';

  const photoHoverStyle =
    'group-hover:bg-secondaryOrange group-hover:text-primaryBlue transition-colors duration-300';

  const projectHoverStyle =
    'group-hover:bg-secondaryGreen transition-colors duration-300';

  // Sort Boxes By Year Value
  $: sortedBoxes = [...boxes].sort((a, b) => b.year - a.year);
</script>

{#each sortedBoxes as box}
  <div class="w-full min-h-[50vh]">
    <!-- Style for a Photo Box -->


      <!-- Style for a post -->
    {#if box.type == POST}
      <a href="{box.postLink}" target="_blank">
        <div class="{postStyle}">
          <h1 class="font-bold text-2xl">
            {box.title}
          </h1>
          <h4 class="text-lg">
            {box.headline}
          </h4>
        </div>
      </a>
    {/if}

  </div>
{/each}
