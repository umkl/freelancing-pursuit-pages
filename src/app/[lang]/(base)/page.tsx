import { useTranslations } from "next-intl";
import Image from "next/image";

import Arrow from "@/svgs/arrow.svg";
import { Routes } from "@/types/routes";

import useViewportWidth from "@/utils/hooks/useViewportWidth";
import dynamic from "next/dynamic";
import Link from "next/link";
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import Marquee from "react-fast-marquee";
const TagMarquee = dynamic(() => import("@/comps/tag-marquee"), { ssr: false });
// import TagMarquee from "@/comps/tag-marquee";

export default function Home({ params }: { params: { lang: string } }) {
	unstable_setRequestLocale(params.lang);
	const featured_projects = [
		"ballkarten-project-1866x1400",
		"charge-project-3266x1400",
		"deets-project-3266x1400",
		"filliStudio-project-3266x1400",
		"heed-project-3266x1400",
		"octagon-project-1866x1400",
		"synopsis-project-2100x1400",
		"wbyt_web-project-1866x1400",
	];
	const t = useTranslations(Routes.root);
	return (
		<section className="mx-4 tablet:mx-8 tablet:mt-4 box-border grow h-full flex flex-col relative">
			<div className=" tablet:mt-8 laptop:mt-4  z-10">
				<p className="text-lgp font-bold uppercase italic mt-2">
					{t("greeting")}
				</p>
				<p className="text-xlpp md:text-2xl leading-none font-clash font-bold uppercase">
					Michael <br className="tablet:hidden" /> Ungar
				</p>
				<div className="laptop:absolute right-0 top-8 mr-8">
					<ul className="text-xl leading-none font-bold mt-2 laptop:text-right">
						{["webdev", "ux"].map((key) => (
							<li key={key} className="mt-2">
								{t("jobs." + key)}
							</li>
						))}
					</ul>
					<p className="flex items-center gap-1 mt-2 ml-2">
						<span className="inline-block bg-green-800 rounded-full w-2 h-2 mr-1 shrink-0"></span>
						<span className="font-bold text-base md:text-md text-nowrap">
							{t("avail-status")}
						</span>
					</p>
				</div>
				<p className="text-md tablet:text-lg font-bold italic max-w-sm tablet:max-w-lg">
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

				<TagMarquee />
			</div>
			<div className="relative flex-1">
				<ul className="mt-4 scale-50 laptop:scale-100 w-full origin-bottom-left laptop:absolute laptop:bottom-0 z-10">
					{["projects", "services", "contact"].map((key) => (
						<li
							key={key}
							className="text-xlp leading-none font-clash font-bold uppercase mb-4 w-fit"
						>
							<Link
								href={"/" + key}
								className="flex items-center justify-start"
							>
								{t("major-links." + key)}
								<Arrow className="inline-block ml-[9px] scale-[163%] mb-[1.8px] fill-neutral-900 dark:fill-neutral-100" />
							</Link>
						</li>
					))}
				</ul>
				<div className="laptop:absolute w-full laptop:w-[55%] h-fit mt-5 pt-5 custombp:max-h-[500px] bottom-0 right-0 z-0 overflow-hidden bg-neutral-200 rounded-lg">
					<Marquee speed={300} pauseOnHover>
						<div className="flex flex-nowrap mb-4 gap-4 mr-10">
							{featured_projects.map((x) => {
								return (
									<Image
										src={`/imgs/project-imgs/${x}.png`}
										style={{
											width: "auto",
											height: "400px",
										}}
										width={600}
										height={400}
										quality={100}
										objectFit="contain"
										alt={`/images/project-imgs/${x}`}
									/>
								);
							})}
						</div>
					</Marquee>
					<div className="absolute font-black uppercase font-clash text-lg m-4 mr-8 z-10 mix-blend-difference right-0 bottom-0">
						@UMKL
					</div>
				</div>
			</div>
		</section>
	);
}
