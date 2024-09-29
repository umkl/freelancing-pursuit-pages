import { Filler } from "@/comps/aids";
import GobackHeader from "@/comps/header";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function ServicesLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { lang: string };
}>) {
	unstable_setRequestLocale(params.lang);
	return (
		<>
			{children}
			{/* <Filler /> */}
		</>
	);
}
