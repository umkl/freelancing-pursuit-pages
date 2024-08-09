import { useTranslations } from "next-intl";
import Image from "next/image";
import tags from "@/data/tags.json";

export default function Home() {
	const t = useTranslations("/");

	return (
		<main>
			<header>{t("ad-text")}</header>
			<section className="">
				<p>{t("greeting")}</p>
				<p className="font-clash">Michael Ungar</p>
				<ul>
					{["webdev", "ux"].map((key) => (
						<li key={key}>{t("jobs." + key)}</li>
					))}
				</ul>
				<p>
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
				<div>
					{tags.map((content, key) => (
						<div key={key}>{content}</div>
					))}
				</div>
				<ul>
					{["projects", "services", "contact"].map((key) => (
						<li key={key}>{t("major-links." + key)}</li>
					))}
				</ul>
				<Image
					className="w-[400px] cover"
					src={"/imgs/gabriel-garcia-marengo-qJvpykJ5SKs-unsplash.jpg"}
					alt={"Image from Gabriel Garcia Marengo of Mountains."}
					width={"500"}
					height={"400"}
				></Image>
			</section>
		</main>
	);
}
