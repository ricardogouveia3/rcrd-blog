// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.rcrd.dev',
	integrations: [sitemap(), tailwind()],
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'dracula-soft',
			defaultColor: false,
			langs: [],
			wrap: true,
			transformers: [],
		},
	},
});