/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				custom: "0 0 10px  #5555551A",
			},
			colors: {
        'primary': '#FF960C',
        'secondary': '#1c58ff',
        'def-hover': '#ffc57b',
        'def-blue': '#0EA5E9',

				"smocky-100": "#EDEDEF",
				"smocky-150": "#DEDEE1",
				"smocky-200": "#CFCED2",
				"smocky-250": "#C0BFC4",
				"smocky-300": "#B1B0B6",
				"smocky-400": "#929199",
				"smocky-500": "#74737D",
				"smocky-600": "#565460",
				"smocky-700": "#45434D",
				"smocky-800": "#34323A",
				"smocky-900": "#222226",
				"smocky-950": "#1A191D"
			},
			fontFamily: {
				fugaz: '"Fugaz One"', 
				Lugrasimo: '"Lugrasimo"', 
			  },
			width: {
				careerCard: "335px",
				searchInput: "400px",
				mobileSearchInput: "343px",
				"200px": "200px",
				w340px: "340px",
				w90px: "90px",
				w105px: "105px",
				w1064px: "1064px",
			},
			height: {
				h200px: "200px",
				h28px: "28px",
				h29px: "29px",
				h832px: "832px",
			},
			size: {
				"70px": "70px",
			},
			padding: {
				p109px: "109px",
			},
		},
	},
	plugins: [],
};
