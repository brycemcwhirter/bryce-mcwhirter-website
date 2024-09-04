// svelte.config.js
import adapter from '@sveltejs/adapter-netlify';

export default {
  kit: {
    // Configure the adapter you want to use
    adapter: adapter({
      edge: false,
      split: false
    }),


  }
};