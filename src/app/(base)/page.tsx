import { useTranslations } from "next-intl";
import Image from "next/image";
import tags from "@/data/tags.json";
import Arrow from "@/svgs/arrow.svg";
import { Routes } from "@/types/routes";

export default function Home() {
	const t = useTranslations(Routes.root);
	return (
		<section>
			<p className="text-lgp font-bold italic uppercase mt-2">
				{t("greeting")}
			</p>
			<p className="text-2xl leading-none font-clash font-bold uppercase">
				Michael <br /> Ungar
			</p>
			<ul className="text-xl leading-none font-bold mt-2">
				{["webdev", "ux"].map((key) => (
					<li key={key} className="mt-2">
						{t("jobs." + key)}
					</li>
				))}
			</ul>
			<p className="flex items-center gap-1 mt-2 ml-2">
				<span className="inline-block bg-green-800 rounded-full w-2 h-2 mr-1 shrink-0"></span>
				<span className="font-bold text-md text-nowrap">
					{t("avail-status")}
				</span>
			</p>
			<p className="text-md font-bold italic mt-2 max-w-sm">
				{t("mission")
					.split(/(\[Code\]|\[Design\])/)
					.map((part, index) => {
						if (part === "[Code]") {
							return <span key={index}>Code</span>;
						} else if (part === "[Design]") {
							return <span key={index}>Design</span>;
						} else {
							return <span key={index}>{part}</span>;
						}
					})}
			</p>
			<div className="flex gap-2 mt-4">
				{tags.map((content, key) => (
					<div
						key={key}
						className="text-base font-clash font-semibold rounded-full px-4 py-1 border-[0.2rem] uppercase border-neutral-800"
					>
						{content}
					</div>
				))}
			</div>
			<ul className="mt-4 scale-50 w-full  origin-bottom-left">
				{["projects", "services", "contact"].map((key) => (
					<li
						key={key}
						className="text-xlp leading-none font-clash font-bold uppercase mb-4 flex items-center justify-start w-fit"
					>
						{t("major-links." + key)}
						<Arrow className="inline-block ml-[9px] scale-[163%] mb-[1.8px] fill-neutral-900 dark:fill-neutral-100" />
					</li>
				))}
			</ul>
			<Image
				className="w-full h-[700px] object-cover"
				src={"/imgs/gabriel-garcia-marengo-qJvpykJ5SKs-unsplash.jpg"}
				alt={"Image from Gabriel Garcia Marengo of Mountains."}
				width={"500"}
				height={"400"}
			></Image>
		</section>
	);
}
