<script>
  import boxes from '../data/boxes.json';

  const PROJECT = 'project';
  const PHOTO = 'photo';
  const POST = 'post';
</script>

{#each boxes as box}
  <div class="border min-h-[50vh]">
    <!-- Style for a Photo Box -->
    {#if box.type == PHOTO}
      <div class="p-10 flex flex-col justify-center items-center">
        <img src="{box.imageLink}" alt="{box.alt}" />
        <h1>{box.title}</h1>
      </div>

      <!-- Style for a post -->
    {:else if box.type == POST}
      <div class="flex flex-col items-center justify-center h-full">
        <h1>{box.title}</h1>
        <h4>{box.headline}</h4>
      </div>

      <!-- Style for a Project -->
    {:else if box.type == PROJECT}
      <div class="p-6">
        <img src="{box.imageLink}" alt="{box.altTag}" class="p-10" />
        <h1>{box.title}</h1>
        <p>{box.description}</p>
        {#each box.languages as language}
          <!-- TODO Font Awesome Logos Here -->
          <p>{language}</p>
        {/each}
      </div>
    {/if}
  </div>
{/each}
