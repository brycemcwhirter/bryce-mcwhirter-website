<script>
  import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import Boxes from './Boxes.svelte';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

  let mainLinksStyle = 'p-10 flex flex-col justify-center items-center';
</script>

<!-- TODO make text element transitions smooth -->
<!-- TODO make boxes fade in on first appearance -->
<!-- TODO make boxes fade in on scroll -->
<!-- TODO make a temporal link for first blog post -->
<!-- TODO write your first blog about your portfolio -->

<div class="min-h-screen grid grid-cols-1 md:grid-cols-2">
  <div class="flex justify-center items-center">
    <p class="text-center p-5 text-lg md:text-2xl">
      Hi, I'm <strong>Bryce McWhirter</strong>, a
      <strong>Full Stack Developer</strong> based in <strong>DFW</strong>. I
      hold a
      <strong>Bachelor of Science in Computer Science</strong>
      with a minor in Entrepreneurship and Corporate Innovation from
      <strong>Baylor University</strong>.
      <!-- I love Web Development, Theology,
        and talking about Music. -->
    </p>
  </div>
  <div class="grid grid-rows-2">
    <a href="/blog" target="_parent">
      <div
        class="{mainLinksStyle} hover:bg-secondaryBlue group h-full transition-colors duration-300"
      >
        <h1
          class="text-lg lg:text-4xl font-bold group-hover:text-primaryBlue transition-colors duration-300"
        >
          Blog
        </h1>
      </div>
    </a>
    <a href="/files/Gene Bryce McWhirter Resume.pdf" target="_blank">
      <div
        class="{mainLinksStyle} hover:bg-secondaryGreen group h-full transition-colors duration-300"
      >
        <h1
          class="text-lg lg:text-4xl font-bold transition-colors duration-300"
        >
          Resumé
        </h1>
      </div>
    </a>

    <!-- <div class="{mainLinksStyle} bg-secondaryGreen">
      <h1 class="text-lg lg:text-xl bg-secondaryGreen text-primaryBlue">
        Playlists
      </h1>
    </div> -->
  </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3">
  <Boxes />
</div>

<div class="min-h-28 flex flex-col justify-center items-center space-y-3">
  <h1 class="text-2xl font-extrabold">Contact</h1>
  <div class="flex flex-row space-x-3">
    <a
      href="https://www.linkedin.com/in/bryce-mcwhirter-5b9330146/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon="{faLinkedin}" class="fa-xl sm:fa-2x" />
    </a>
    <a
      href="https://github.com/brycemcwhirter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fa-brands fa-github"></i>
      <FontAwesomeIcon icon="{faGithub}" class="fa-xl sm:fa-2x" />
    </a>
    <a
      href="mailto:mcwhirterbryce@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon="{faEnvelope}" class="fa-xl sm:fa-2x" />
    </a>
  </div>
</div>
