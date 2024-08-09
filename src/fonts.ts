import localfont from "next/font/local";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const clash = localfont({
	src: [
		{
			path: "../assets/ClashDisplay-Variable.ttf",
		},
	],
	variable: "--font-clash",
});
