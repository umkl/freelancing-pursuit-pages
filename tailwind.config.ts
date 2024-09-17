import type { Config } from "tailwindcss";
import sizes from "./src/data/sizes.json";

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
				xs: "0.5rem" /* 8px */,
				sm: "0.75rem" /* 12px */,
				base: "1rem" /* 16px */,
				md: "1.25rem" /* 20px */,
				lg: "1.5rem" /* 24px */,
				lgp: "1.75rem" /* 28px */,
				xl: "2rem" /* 32px */,
				xlp: "3rem" /* 48px */,
				xlpp: "3.5rem" /* 56px */,
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
				...sizes,
				custombp: { raw: "(max-height: 900px)" },
			},
		},
	},
	plugins: [],
};
export default config;
