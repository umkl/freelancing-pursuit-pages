"use client";
import { Routes } from "@/types/routes";
import { useTranslations } from "next-intl";
import Link from "next/link";

const GobackHeader = () => {
	const t = useTranslations(Routes.impressum);
	return (
		<header className="flex justify-between items-center font-inter capitalize m-4 font-bold text-base">
			<Link href="/">{t("go-back")}</Link>
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
