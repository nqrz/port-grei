import preprocess from "svelte-preprocess";
import netlify from '@sveltejs/adapter-netlify';
const pkg = require('./package.json')
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: netlify(),
    target: "#svelte",
    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
