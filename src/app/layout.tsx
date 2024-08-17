import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import ImpressumLangFooter from "@/comps/footer";

import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { clash, inter } from "@/fonts";
import config from "../../tailwind.config";

export const metadata: Metadata = {
	title: "",
	description: "",
};

export const viewport: Viewport = {
	// themeColor: config.theme?.extend?.colors.neutral
	initialScale: 1,
	width: "device-width",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<NextIntlClientProvider messages={messages}>
				<body
					className={cn(
						inter.className,
						clash.variable,
						"min-h-screen max-w- flex flex-col"
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
