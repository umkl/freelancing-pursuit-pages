"use client";
import Link from "next/link";
import AtFlag from "@/svgs/at-flag.svg";
import EnFlag from "@/svgs/en-flag.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import HeaderDe from "@/svgs/header-de.svg";
import HeaderEn from "@/svgs/header-en.svg";
import { useLocale } from "next-intl";
import locales from "@/data/locales.json";
import { useRouter } from "next/navigation";

const ImpressumLangFooter = () => {
	const pathname = usePathname();
	const aintAlreadyImpressum = !pathname.includes("impressum");
	const locale = useLocale();
	const router = useRouter();

	const handleLocaleChange = (locale: string) => {
		// Split the pathname to replace the current locale
		const parts = pathname.split("/");

		// Check if the first part of the path is a locale and replace it
		// Adjust the index based on your URL structure
		if (parts.length > 1) {
			parts[1] = locale; // Replace the locale part with the new locale
		}

		// Construct the new pathname
		const newPathname = parts.join("/");

		// Update the URL with the new locale, keeping query parameters intact
		router.push(newPathname + window.location.search);
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
