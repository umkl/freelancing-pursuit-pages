import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
	const t = useTranslations("HomePage");
	return (
		<main>
			<header></header>
			<section>
				<h1>{t("title")}</h1>
				<p>Servus, I bin da</p>
				<p>Michael Ungar</p>
				<ul>
					<li>Web Developer</li>
					<li>UX Designer</li>
				</ul>
				<p>
					Mit Code & Design versuche ich die digitale Welt sukzessive schöner zu
					machen.
				</p>
			</section>
		</main>
	);
}
