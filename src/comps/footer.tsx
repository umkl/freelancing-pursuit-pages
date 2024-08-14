"use client";
import AtFlag from "@/svgs/at-flag.svg";
import { Routes } from "@/types/routes";
import { useRouter } from "next/navigation";

const ImpressumLangFooter = () => {
	const router = useRouter();
	return (
		<footer className="flex justify-between items-center font-inter capitalize m-4 font-bold text-base">
			<div
				className="font"
				onClick={() => {
					router.push(Routes.impressum);
				}}
			>
				impressum
			</div>
			<AtFlag className="scale-75" />
		</footer>
	);
};

export default ImpressumLangFooter;
