const SkillMarquee = dynamic(() => import("@/comps/skill-marquee"), {
	ssr: false,
});
import { ServiceProduct, Skill } from "@/types/services";
import dynamic from "next/dynamic";
import BookOpen from "@/svgs/BookOpen.svg";

const ProductOfferSection = ({
	services,
}: {
	services: Array<ServiceProduct>;
}) => {
	return (
		<div className="flex gap-8 flex-wrap content-stretch relative">
			{services.map((v, i) => {
				return <ServiceProductItem key={i} service={v} />;
			})}
		</div>
	);
};

const ServiceProductItem = ({ service }: { service: ServiceProduct }) => {
	return (
		<article className="font-bold w-full tablet:w-[700px] flex flex-col">
			<h2 className="mb-2">
				{/* <span className="h-fit w-fit px-2 inline-flex justify-center items-center rounded-full bg-neutral-900">
			</span> */}
				<span className="text-lg font-black underline underline-offset-4 text-neutral-600 relative inline-block">
					#1
				</span>
				&nbsp;&nbsp;
				<span className="font-black leading-tight text-lg underline underline-offset-4">
					{service.name}
				</span>
			</h2>
			<div className="border-l-2 border-neutral-200 pl-4 flex-1">
				<p className=" text-base mb-2 text-neutral-400 italic">
					&quot;{service.desc}&quot;
				</p>
				<h3 className="text-md font-black">4 Projektphasen</h3>
				<ol className="list-decimal list-inside mb-4">
					{service.phases.map((v, i) => {
						return <div key={i}>{`${i + 1}. ${v}`}</div>;
					})}
				</ol>
				<h3 className="text-md font-black mb-2">Fähigkeitsbereiche</h3>
				<SkillMarquee items={service.skills} />
				<h3 className="text-md font-black leading-snug ">
					Relevante Themen/Tools
				</h3>
				<p className="mb-4 h-fit">
					{service.tags.map((v, i) => {
						return <span key={i}>#{v}&nbsp;</span>;
					})}
				</p>
				<p className="text-neutral-500 mt-10">
					mehr über das Angebot herausfinden:
				</p>
			</div>
			<a
				className="border-2 border-neutral-900 dark:border-neutral-200 rounded-full p-2 w-full mt-2 flex justify-center relative"
				href={`/pdf/Dienstleistung_1.pdf`}
			>
				<BookOpen className="w-[20px] h-[20px] absolute left-4 top-1/2 -translate-y-1/2" />
				<p className="text-center">{service.pdfName}</p>
			</a>
		</article>
	);
};

export default ProductOfferSection;
