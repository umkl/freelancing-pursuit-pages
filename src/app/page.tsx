import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
	const t = useTranslations("/");

	return (
		<main>
			<header>{t("ad-text-1")}</header>
			<section>
				<p>{t("greeting")}</p>
				<p>Michael Ungar</p>
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
			</section>
		</main>
	);
}
