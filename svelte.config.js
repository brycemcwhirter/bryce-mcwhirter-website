import adapter from '@sveltejs/adapter-static';
// import preprocess from 'svelte-preprocess';

export default {
  extensions: ['.svelte'], // Enable .svx files

  kit: {
    adapter: adapter(),
            paths: {
            base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
        }
  },


};
