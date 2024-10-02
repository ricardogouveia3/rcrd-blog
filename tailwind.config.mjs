/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'quartz': {
					l90: "#ededed",
					l80: "#dbdbdb",
					l70: "#c9c9c9",
					l60: "#b7b7b7",
					l50: "#a5a5a5",
					l40: "#929292",
					l30: "#808080",
					l20: "#6e6e6e",
					l10: "#5c5c5c",
					DEFAULT: "#4a4a4a",
					d10: "#434343",
					d20: "#3b3b3b",
					d30: "#343434",
					d40: "#2c2c2c",
					d50: "#252525",
					d60: "#1e1e1e",
					d70: "#161616",
					d80: "#0f0f0f",
					d90: "#070707",
				},
			},
			fontFamily: {
				sans: [
					'Inter',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'sans-serif'
				],
				mono: [
					'SFMono-Regular',
					'Consolas',
					'Liberation Mono',
					'Menlo',
					'Courier',
					'monospace'
				],
			},
			typography: ({ theme }) => ({
				quartz: {
					css: {
						'--tw-prose-body': theme('colors.quartz.l80'),
						'--tw-prose-headings': theme('colors.quartz.l90'),
						'--tw-prose-lead': theme('colors.quartz.l60'),
						'--tw-prose-links': theme('colors.quartz.l90'),
						'--tw-prose-bold': theme('colors.quartz.l90'),
						'--tw-prose-counters': theme('colors.quartz.l50'),
						'--tw-prose-bullets': theme('colors.quartz.l30'),
						'--tw-prose-hr': theme('colors.quartz.l20'),
						'--tw-prose-quotes': theme('colors.quartz.l90'),
						'--tw-prose-quote-borders': theme('colors.quartz.l20'),
						'--tw-prose-captions': theme('colors.quartz.l60'),
						'--tw-prose-code': theme('colors.quartz.l90'),
						'--tw-prose-pre-code': theme('colors.quartz'),
						'--tw-prose-pre-bg': theme('colors.quartz.l90'),
						'--tw-prose-th-borders': theme('colors.quartz.l20'),
						'--tw-prose-td-borders': theme('colors.quartz.l10'),
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
