"use client";
import { Link } from "@/i18n/routing";
import { Routes } from "@/types/routes";
import { useTranslations } from "next-intl";

const GobackHeader = ({ title }: { title?: string }) => {
	const t = useTranslations(Routes.impressum);
	return (
		<header className="flex justify-between items-center font-inter capitalize m-4 tablet:m-8 font-bold text-base above-4k-style">
			<Link href="/">{t("go-back")}</Link>
			{title && <p>{t(title)}</p>}
		</header>
	);
};

export const Adheader = () => {
	const t = useTranslations(Routes.root);
	return (
		<header className="hidden font-bold font-clash">{t("ad-text")}</header>
	);
};

export default GobackHeader;
