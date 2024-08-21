<script>
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import boxes from '../data/boxes.json';
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
    'flex flex-col items-center justify-center h-full hover:bg-secondaryBlue transition-colors duration-300 group';

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
    {#if box.type == PHOTO}
      <a href="{box.imageLink}" target="_blank">
        <div class="{photoStyle}">
          <img
            class="group-hover:bg-secondaryOrange"
            src="{box.imageLink}"
            alt="{box.alt}"
          />
          <h1 class="text-lg md:text-xl {photoHoverStyle}">
            {box.title}
          </h1>
        </div>
      </a>

      <!-- Style for a post -->
    {:else if box.type == POST}
      <a href="{box.postLink}" target="_blank">
        <div class="{postStyle}">
          <h1 class="font-bold text-2xl group-hover:text-primaryBlue">
            {box.title}
          </h1>
          <h4 class="text-lg group-hover:text-primaryBlue">
            {box.headline}
          </h4>
        </div>
      </a>

      <!-- Style for a Project -->
    {:else if box.type == PROJECT}
      <a href="{box.githubLink}" target="_blank">
        <div class="{projectStyle}">
          <img
            src="{box.imageLink}"
            alt="{box.altTag}"
            class="w-full h-auto border-none p-0 mb-8"
          />
          <h1 class="font-bold text-lg md:text-xl">
            {box.title}
          </h1>
          <p class="text-xs md:text-sm text-justify">
            {box.description}
          </p>
          <div class="space-x-4">
            {#each box.languages as language}
              {#if language === 'java'}
                <FontAwesomeIcon class="fa-2x sm:fa-3x" icon="{faJava}" />
              {:else if language === 'javascript'}
                <FontAwesomeIcon class="fa-2x sm:fa-3x" icon="{faSquareJs}" />
              {:else if language === 'react'}
                <FontAwesomeIcon class="fa-2x sm:fa-3x" icon="{faReact}" />
              {:else if language === 'python'}
                <FontAwesomeIcon class="fa-2x sm:fa-3x" icon="{faPython}" />
              {:else}
                <span class=" font-semibold">{language}</span>
              {/if}
            {/each}
          </div>
        </div>
      </a>
    {/if}
  </div>
{/each}
