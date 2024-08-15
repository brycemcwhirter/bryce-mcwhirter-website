<script>
  import boxes from '../data/boxes.json';
  const PROJECT = 'project';
  const PHOTO = 'photo';
  const POST = 'post';
</script>

{#each boxes as box}
  <div class="border min-h-[50vh]">
    {#if box.type == PHOTO}
      <h1>a photo</h1>
    {:else if box.type == POST}
      <h1>a post</h1>
    {:else if box.type == PROJECT}
      <h1>a project</h1>
    {/if}
  </div>
{/each}
