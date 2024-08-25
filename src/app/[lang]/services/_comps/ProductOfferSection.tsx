const SkillMarquee = dynamic(() => import("@/comps/skill-marquee"), {
	ssr: false,
});
import { Skill } from "@/types/services";
import dynamic from "next/dynamic";

const ProductOfferSection = () => {
	return (
		<article className="font-bold">
			<h2 className="text-lg">
				<span>#1</span>
				<br />
				<span className="leading-tight">statische Web Entwicklung</span>
			</h2>
			<p className=" text-base mb-4">
				Umsetzung einer Webseite ohne dynamischen Datenverkehr
			</p>
			<h3 className=" text-md">4 Projektphasen</h3>
			<ol className=" list-decimal list-inside mb-4">
				<li>Konzeption</li>
				<li>UI/UX-Design</li>
				<li>Umsetzung</li>
				<li>Wartung</li>
			</ol>
			<h3 className="text-lg mb-2">Fähigkeitsbereiche</h3>
			<SkillMarquee items={[Skill.uiux, Skill.front]} />
			<h3 className="text-lg leading-snug">Relevante Themen/Tools</h3>
			<p className=" mb-4">
				#HTML #CSS #TailwindCSS #JS #ReactJS #NextJS #Vercel #Figma
			</p>
			<button className="border-2 border-neutral-900 rounded-full p-2 w-full mt-4">
				genauere Informationen
			</button>
		</article>
	);
};

export default ProductOfferSection;
