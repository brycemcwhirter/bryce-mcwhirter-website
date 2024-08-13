<script>
  import Box from './Box.svelte';
</script>

<div class=" bg-blue-300 min-h-screen grid grid-cols-2">
  <div class="">Bio</div>
  <div class="grid grid-rows-3">
    <div class="border">Blog</div>
    <div class="border">Resumé</div>
    <div class="border">Playlist</div>
  </div>
</div>

<!--Projects-->
<!-- <div class="border bg-blue-300 min-h-screen grid grid-cols-2">
  <Box />
  <Box />
  <Box />
</div> -->

<div class="grid grid-cols-2">
  <Box title="Title A" />
  <Box title="Title B" />
  <Box title="Title C" />
</div>

<div class="border min-h-28 flex flex-col justify-center items-center">
  <h1>Contact</h1>
  <div class="flex flex-row space-x-3">
    <h2>linkedin icon</h2>
    <h2>github icon</h2>
    <h2>gmail icon</h2>
  </div>
</div>
