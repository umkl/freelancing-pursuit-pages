"use client";
import AtFlag from "@/svgs/at-flag.svg";
import EnFlag from "@/svgs/en-flag.svg";
import { cn } from "@/utils/cn";
import HeaderDe from "@/svgs/header-de.svg";
import HeaderEn from "@/svgs/header-en.svg";
import { useLocale } from "next-intl";
import locales from "@/data/locales.json";
import { Link, redirect, useRouter, usePathname } from "@/i18n/routing";

const ImpressumLangFooter = () => {
	const pathname = usePathname();
	const aintAlreadyImpressum = !pathname.includes("impressum");
	const locale = useLocale();
	const router = useRouter();

	const handleLocaleChange = (locale: string) => {
		router.push(pathname, { locale: locale });
	};

	return (
		<footer
			className={cn(
				"flex justify-between align-bottom font-inter font-bold text-base m-4 tablet:m-8 capitalize above-4k-style",
				!aintAlreadyImpressum && "flex-row-reverse"
			)}
		>
			{aintAlreadyImpressum && <Link href="/impressum">impressum</Link>}
			{locale == "en-US" ? (
				<button
					onClick={() => handleLocaleChange(locales[1])}
					className="appearance-none"
				>
					<EnFlag className="scale-75" />
				</button>
			) : (
				<button
					className="appearance-none"
					onClick={() => handleLocaleChange(locales[0])}
				>
					<AtFlag className="scale-75" />
				</button>
			)}
		</footer>
	);
};

export default ImpressumLangFooter;
