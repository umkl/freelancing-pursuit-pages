import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "@/comps/footer";

import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { clash, inter } from "@/fonts";

export const metadata: Metadata = {
	title: "",
	description: "",
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
						"min-h-screen flex flex-col"
					)}
				>
					{children}
					<div className="flex-1"></div>
					<Footer />
				</body>
			</NextIntlClientProvider>
		</html>
	);
}
