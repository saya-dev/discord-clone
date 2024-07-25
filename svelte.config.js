import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			$components: './src/lib/components',
			$paraglide: './src/paraglide'
		},
		adapter: adapter()
	}
};

export default config;
