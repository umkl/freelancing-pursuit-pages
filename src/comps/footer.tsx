"use client";
import Link from "next/link";
import AtFlag from "@/svgs/at-flag.svg";
import EnFlag from "@/svgs/en-flag.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import HeaderDe from "@/svgs/header-de.svg";
import HeaderEn from "@/svgs/header-en.svg";
import { useLocale } from "next-intl";

const ImpressumLangFooter = () => {
	const pathname = usePathname();
	const aintAlreadyImpressum = !pathname.includes("impressum");
	const locale = useLocale();

	return (
		<footer
			className={cn(
				"flex justify-between align-bottom font-inter font-bold text-base m-4 tablet:m-8 capitalize above-4k-style",
				!aintAlreadyImpressum && "flex-row-reverse"
			)}
		>
			{aintAlreadyImpressum && <Link href="/impressum">impressum</Link>}
			{locale == "en-US" ? (
				<EnFlag className="scale-75" />
			) : (
				<AtFlag className="scale-75" />
			)}
		</footer>
	);
};

export default ImpressumLangFooter;
