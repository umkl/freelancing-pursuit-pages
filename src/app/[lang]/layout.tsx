import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ImpressumLangFooter from "@/comps/footer";
import locales from "@/data/locales.json";
import { unstable_setRequestLocale } from "next-intl/server";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { clash, inter } from "@/fonts";
import config from "../../../tailwind.config";

export const metadata: Metadata = {
	title: "",
	description: "",
};

export function generateStaticParams() {
	return locales.map((locale) => ({ lang: locale }));
}

export const viewport: Viewport = {
	// themeColor: config.theme?.extend?.colors.neutral
	initialScale: 1,
	width: "device-width",
};

export default async function RootLayout({
	children,
	params: { lang },
}: Readonly<{
	children: React.ReactNode;
	params: { lang: string };
}>) {
	unstable_setRequestLocale(lang);
	const messages = await getMessages();

	return (
		<html lang={lang}>
			<NextIntlClientProvider messages={messages}>
				<body
					className={cn(
						inter.className,
						clash.variable,
						"min-h-screen flex flex-col"
					)}
				>
					{children}
					<div className="flex-1"></div>
					<ImpressumLangFooter />
				</body>
			</NextIntlClientProvider>
		</html>
	);
}
