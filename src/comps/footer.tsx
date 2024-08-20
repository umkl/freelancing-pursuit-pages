"use client";
import Link from "next/link";
import AtFlag from "@/svgs/at-flag.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const ImpressumLangFooter = () => {
	const pathname = usePathname();
	const aintAlreadyImpressum = !pathname.includes("impressum");
	return (
		<footer
			className={cn(
				"flex justify-between align-bottom font-inter capitalize m-4 tablet:m-8 font-bold text-base",
				!aintAlreadyImpressum && "flex-row-reverse"
			)}
		>
			{aintAlreadyImpressum && <Link href="/impressum">impressum</Link>}
			<AtFlag className="scale-75" />
		</footer>
	);
};

export default ImpressumLangFooter;
