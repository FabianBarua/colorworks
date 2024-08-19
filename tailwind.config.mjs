/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				ClashDisplay: ['ClashDisplay', 'sans-serif', 'system-ui'],
				inter : ['Inter', 'sans-serif', 'system-ui'],
			},
			colors: {
				'brandGray': '#F1F0F1',
				'brandBlack' : '#010001',
				'brandYellow' : '#FCD34D',
				'brandWhite' : '#FFF',
			},
		},
	},
	plugins: [],
}
