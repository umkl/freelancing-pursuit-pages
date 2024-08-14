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
			fontSize: {
				xs: "0.5rem",
				sm: "0.75rem" /* small text */,
				base: "1rem" /* body */,
				md: "1.25rem" /* subheading */,
				lg: "1.5rem" /* heading */,
				lgp: "1.75rem" /* modest headings */,
				xl: "2rem" /* larger headings */,
				xlp: "3rem" /* larger headings */,
				"2xl": "4rem",
			},
			fontWeight: {
				thin: "100",
				hairline: "100",
				extralight: "200",
				light: "300",
				normal: "400",
				medium: "500",
				semibold: "600",
				bold: "700",
				extrabold: "800",
				"extra-bold": "800",
				black: "900",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				sm: "400px",
			},
		},
	},
	plugins: [],
};
export default config;
