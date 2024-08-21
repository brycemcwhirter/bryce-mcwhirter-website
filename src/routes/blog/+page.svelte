<script>
  import posts from '/src/data/posts.json';
</script>

<div class="p-8">
  {#each posts as post}
    <div class="mb-8">
      <div class="text-2xl font-bold">{post.title}</div>
      <div class="text-base">{post.headline}</div>
    </div>
  {/each}
</div>
