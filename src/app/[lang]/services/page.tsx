import { Routes } from "@/types/routes";
import ProductOfferSection from "./_comps/ProductOfferSection";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Skill } from "@/types/services";
import FancyDivider from "@/comps/dividers";
import BlogItemsSection from "./_comps/BlogItemsSection";
import { Blogs } from "./_data/blogs";
import Image from "next/image";
import TagCluster from "./_comps/TagCluster";
import "@/styles/services-page.css";
import { cn } from "@/utils/cn";

const ServicesPage = ({ params }: { params: { lang: string } }) => {
	unstable_setRequestLocale(params.lang);

	const t = useTranslations(Routes.services);
	return (
		<main className="mx-4 tablet:mx-8">
			<h1 className={cn("!text-lgp", params.lang == "en-US" && "!text-xlp")}>
				{t("services")}
			</h1>
			<p className="text-base font-bold leading-[120%] mt-1 mb-4 text-neutral-800 dark:text-neutral-200">
				{t("services_sub")}
			</p>
			<ProductOfferSection services={[]} />
			<FancyDivider />
			<h1 className={cn("!text-xlp")}>{t("disciplines")}</h1>
			<p className="text-base font-bold leading-[120%] mt-1 mb-4 text-neutral-800 dark:text-neutral-200">
				{t("disciplines_sub")}
			</p>
			<BlogItemsSection blogs={Blogs} />

			<TagCluster
				items={[
					"nextjs",
					"javascript",
					"typescript",
					"typescript",
					"typescript",
				]}
			/>
			<div className="grid grid-cols-1 w-full h-fit gap-4 mx-auto art-footer-parent">
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
