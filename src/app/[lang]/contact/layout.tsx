import GobackHeader, { Adheader } from "@/comps/header";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
// import {unstable_setRequestLocale} from 'next-intl/server';

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Webdeveloper / UI+UX Designer - Michael Ungar - Contact Page",
	description: "",
	openGraph: {
		title: "Webdeveloper / UI+UX Designer - Michael Ungar - Contact Page",
	},
};

export default async function BaseLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { lang: string };
}>) {
	unstable_setRequestLocale(params.lang);
	return (
		<main className="flex-1 relative flex flex-col laptop:min-h-[700px]">
			<GobackHeader title={"contact"} />
			{children}
		</main>
	);
}
