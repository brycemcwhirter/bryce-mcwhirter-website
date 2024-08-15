<script>
  import Photo from './boxes/Photo.svelte';
  import boxes from '../data/boxes.json';
  import Project from './boxes/Project.svelte';
  import Post from './boxes/Post.svelte';
  const PROJECT = 'project';
  const PHOTO = 'photo';
  const POST = 'post';
</script>

{#each boxes as box}
  <div class="border min-h-[50vh]">
    {#if box.type == PHOTO}
      <Photo box />
    {:else if box.type == POST}
      <Post box />
    {:else if box.type == PROJECT}
      <Project box />
    {/if}
  </div>
{/each}
