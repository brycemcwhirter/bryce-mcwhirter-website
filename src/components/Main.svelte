<script>
  import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import Boxes from './Boxes.svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import {
    faEnvelope,
    faMailReply,
    faVoicemail,
  } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="min-h-screen grid grid-cols-1 md:grid-cols-2">
  <div class="flex justify-center items-center">
    <p class="text-center p-5 text-lg">
      My name is Bryce McWhirter and I'm a full stack developer based in the DFW
      area. I'm a graduate from Baylor University with a Bachelor of Science in
      Computer Science and a minor in Entrepreneurship and Corporate Innovation.
      I enjoy web development, reading, theology, and annoying my friends about
      all things music.
    </p>
  </div>
  <div class="grid grid-rows-3">
    <div class="border">Blog</div>
    <div class="border">Resumé</div>
    <div class="border">Playlist</div>
  </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2">
  <Boxes />
</div>

<div class="min-h-28 flex flex-col justify-center items-center">
  <h1>Contact</h1>
  <div class="flex flex-row space-x-3">
    <a
      href="https://www.linkedin.com/in/bryce-mcwhirter-5b9330146/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon="{faLinkedin}" />
    </a>
    <a
      href="https://github.com/brycemcwhirter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fa-brands fa-github"></i>
      <FontAwesomeIcon icon="{faGithub}" />
    </a>
    <a
      href="mailto:mcwhirterbryce@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon="{faEnvelope}" />
    </a>
  </div>
</div>
