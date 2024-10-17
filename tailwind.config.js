/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				bounce: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-25%)" },
				},
			},
			animation: {
				"bounce-infinite": "bounce 4s infinite",
			},
		},
		colors: {
			...colors,
			primary: colors.purple,
			secondary: colors.pink,
		},
	},
	plugins: [],
};
