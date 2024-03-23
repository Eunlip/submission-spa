/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '540px',
			xs: '420px',
		},
		container: {
			center: true,
		},
		colors: {
			'black': '#000',
			'white': '#fff',
			'secondary': '#7E7E7E',
			'notes': '#F6F6F6',
			'dark-green': '#00935F',
			'light-green': '#59CE8F',
		},
		fontFamily: {
			display: '"Libre Caslon Text", serif',
		},
		extend: {},
	},
};
