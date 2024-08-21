import GobackHeader from "@/comps/header";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function ImpressumLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { lang: string };
}>) {
	unstable_setRequestLocale(params.lang);
	return (
		<>
			<GobackHeader />
			{children}
		</>
	);
}
