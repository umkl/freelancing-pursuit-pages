import GobackHeader, { Adheader } from "@/comps/header";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
// import {unstable_setRequestLocale} from 'next-intl/server';

export default async function BaseLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { lang: string };
}>) {
	unstable_setRequestLocale(params.lang);
	return (
		<main className="flex-1 relative overflow-hidden flex flex-col laptop:min-h-[700px]">
			<GobackHeader />
			{children}
		</main>
	);
}