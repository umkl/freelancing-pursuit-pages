const SkillMarquee = dynamic(() => import("@/comps/skill-marquee"), {
	ssr: false,
});
import { Service, Skill } from "@/types/services";
import dynamic from "next/dynamic";
import BookOpen from "@/svgs/BookOpen.svg";

const ProductOfferSection = ({ services }: { services: Array<Service> }) => {
	return (
		<div className="flex gap-8 flex-wrap">
			{services.map((v, i) => {
				return <ServiceProductItem key={i} service={v} />;
			})}
		</div>
	);
};

const ServiceProductItem = ({ service }: { service: Service }) => {
	return (
		<article className="font-bold w-full tablet:w-[400px]">
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
			<div className="border-l-2 border-neutral-200 pl-4 w-fit">
				<p className=" text-base mb-2 text-neutral-400 italic">
					&quot;Umsetzung einer Webseite ohne dynamischen Datenverkehr&quot;
				</p>
				<h3 className="text-md font-black">4 Projektphasen</h3>
				<ol className="list-decimal list-inside mb-4">
					<li>Konzeption</li>
					<li>UI/UX-Design</li>
					<li>Umsetzung</li>
					<li>Wartung</li>
				</ol>
				<h3 className="text-md font-black mb-2">Fähigkeitsbereiche</h3>
				<SkillMarquee items={[Skill.uiux, Skill.front]} />
				<h3 className="text-md font-black leading-snug ">
					Relevante Themen/Tools
				</h3>
				<p className=" mb-4">
					#HTML #CSS #TailwindCSS #JS #ReactJS #NextJS #Vercel #Figma
				</p>
			</div>
			<button className="border-2 border-neutral-900 dark:border-neutral-200 rounded-full p-2 w-full mt-2 flex justify-center relative">
				<BookOpen className="w-[20px] h-[20px] absolute left-4 top-1/2 -translate-y-1/2" />
				<p className="text-center">some.pdf</p>
			</button>
		</article>
	);
};

export default ProductOfferSection;
