import { Routes } from "@/types/routes";
import ProductOfferSection from "./_comps/ProductOfferSection";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Skill } from "@/types/services";

const ServicesPage = ({ params }: { params: { lang: string } }) => {
	unstable_setRequestLocale(params.lang);

	const t = useTranslations(Routes.services);
	return (
		<main className="mx-4 tablet:mx-8">
			<h1 className="text-xl font-bold">{t("services")}</h1>
			<p className="text-md font-bold">{t("sub")}</p>
			<ProductOfferSection />
		</main>
	);
};

export default ServicesPage;
