/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
		},
		colors: {
			'black': '#000',
			'white': '#fff',
			'secondary': '#7E7E7E',
			'notes': '#FCFCFC',
			'dark-green': '#00935F',
			'light-green': '#00AC6F',
			'transparent': 'transparent',
			'input': '#E9F0FD',
		},
		fontFamily: {
			display: '"Libre Caslon Text", serif',
		},
		extend: {},
	},
	darkMode: 'selector',
};
