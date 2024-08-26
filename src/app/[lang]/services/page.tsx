import { Routes } from "@/types/routes";
import ProductOfferSection from "./_comps/ProductOfferSection";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Skill } from "@/types/services";
import FancyDivider from "@/comps/dividers";
import BlogItemsSection from "./_comps/BlogItemsSection";
import { Blogs } from "./_data/blogs";
import Image from "next/image";

const ServicesPage = ({ params }: { params: { lang: string } }) => {
	unstable_setRequestLocale(params.lang);

	const t = useTranslations(Routes.services);
	return (
		<main className="mx-4 tablet:mx-8">
			<h1 className="text-xl font-bold">{t("services")}</h1>
			<p className="text-md font-bold mb-4">{t("services_sub")}</p>
			<ProductOfferSection services={[]} />
			<FancyDivider />
			<h1 className="text-xl font-bold">{t("disciplines")}</h1>
			<p className="text-md font-bold mb-4">{t("disciplines_sub")}</p>
			<BlogItemsSection blogs={Blogs} />
			<FancyDivider />
			<h1 className="text-xl font-bold">{t("disciplines")}</h1>
			<p className="text-md font-bold mb-4">{t("disciplines_sub")}</p>
			<FancyDivider />
			<div className="grid grid-cols-2 w-fit gap-4 mx-auto my-48">
				<Image
					src={"/imgs/illustrations/Frontend-Art-Poster.png"}
					alt={"Frontend Illustration"}
					width={300}
					height={300}
				/>
				<Image
					src={"/imgs/illustrations/Backend-Art-Poster.png"}
					alt={"Backend Illustration"}
					width={300}
					height={300}
				/>
				<Image
					src={"/imgs/illustrations/Brand-Art-Poster.png"}
					alt={"Brand Illustration"}
					width={300}
					height={300}
				/>
				<Image
					src={"/imgs/illustrations/UX-Art-Poster.png"}
					alt={"UX Illustration"}
					width={300}
					height={300}
				/>
			</div>
		</main>
	);
};

export default ServicesPage;
