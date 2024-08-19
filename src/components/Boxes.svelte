<script>
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import boxes from '../data/boxes.json';
  import {
    faJava,
    faSquareJs,
    faReact,
  } from '@fortawesome/free-brands-svg-icons';

  const PROJECT = 'project';
  const PHOTO = 'photo';
  const POST = 'post';

  const postStyle =
    'flex flex-col items-center justify-center h-full hover:bg-secondaryBlue transition-colors duration-300 group';

  boxes.sort((a, b) => b.year - a.year);
</script>

{#each boxes as box}
  <div class="w-full min-h-[50vh]">
    <!-- Style for a Photo Box -->
    {#if box.type == PHOTO}
      <div class="p-10 flex flex-col justify-center items-center">
        <img src="{box.imageLink}" alt="{box.alt}" />
        <h1>{box.title}</h1>
      </div>

      <!-- Style for a post -->
    {:else if box.type == POST}
      <div class="{postStyle}">
        <h1
          class="text-2xl transition-colors duration-300 group-hover:bg-secondaryBlue group-hover:text-primaryBlue"
        >
          {box.title}
        </h1>
        <h4
          class="text-lg transition-colors duration-300 group-hover:bg-secondaryBlue group-hover:text-primaryBlue"
        >
          {box.headline}
        </h4>
      </div>

      <!-- Style for a Project -->
    {:else if box.type == PROJECT}
      <div
        class="p-10 hover:bg-secondaryGreen w-full h-full transition-colors duration-300 group"
      >
        <img
          src="{box.imageLink}"
          alt="{box.altTag}"
          class="w-full h-auto border-none p-0 mb-8"
        />
        <h1
          class="text-xl md:text-2xl group-hover:bg-secondaryGreen transition-colors duration-300"
        >
          {box.title}
        </h1>
        <p
          class="text-xs md:text-sm text-justify group-hover:bg-secondaryGreen transition-colors duration-300"
        >
          {box.description}
        </p>
        <div
          class="space-x-3 group-hover:bg-secondaryGreen transition-colors duration-300"
        >
          {#each box.languages as language}
            {#if language === 'java'}
              <FontAwesomeIcon
                class="group-hover:bg-secondaryGreen transition-colors duration-300 "
                icon="{faJava}"
              />
            {:else if language === 'javascript'}
              <FontAwesomeIcon
                class="group-hover:bg-secondaryGreen transition-colors duration-300 "
                icon="{faSquareJs}"
              />
            {:else if language === 'react'}
              <FontAwesomeIcon
                class="group-hover:bg-secondaryGreen transition-colors duration-300 "
                icon="{faReact}"
              />
            {:else}
              <span
                class="group-hover:bg-secondaryGreen transition-colors duration-300"
                >{language}</span
              >
            {/if}
          {/each}
        </div>
      </div>
    {/if}
  </div>
{/each}
