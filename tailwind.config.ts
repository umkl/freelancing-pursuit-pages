import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/comps/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				druk: ["var(--font-druk)"],
				clash: ["var(--font-clash)"],
			},
			colors: {
				neutral: {
					900: "#222222",
					800: "#303030",
					700: "#494949",
					600: "#626262",
					500: "#858585",
					400: "#A0A0A0",
					300: "#B2B2B2",
					200: "#D6D6D6",
					100: "#EEEEEE",
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
