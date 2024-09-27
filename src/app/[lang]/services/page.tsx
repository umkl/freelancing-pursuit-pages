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
import { serviceProducts } from "./_data/serviceProducts";
import tagsFromJson from "@/data/tags.json";

const ServicesPage = ({ params }: { params: { lang: string } }) => {
	unstable_setRequestLocale(params.lang);
	const t = useTranslations(Routes.services);
	return (
		<main className="mx-4 tablet:mx-8 above-4k-style bg-red-200">
			<h1 className="w-full text-4xl">{t("services")}</h1>
			<div className="grid grid-cols-1 w-full h-fit gap-4 mx-auto tablet:ml-auto tablet:mr-0 tablet:max-w-[500px] laptop:grid-cols-4 laptop:max-w-[90%] laptop-lg:max-w-full art-footer-parent">
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
