import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
// import preprocess from 'svelte-preprocess';

export default {
  extensions: ['.svelte', '.svx'], // Enable .svx files

  kit: {
    adapter: adapter(),
  },

  preprocess: [
    // preprocess(),
    mdsvex({
      extension: '.svx', // Set the extension for mdsvex files
    }),
  ],
};
