"use client";
import Backend from "@/svgs/Backend.svg";
import Branding from "@/svgs/Branding.svg";
import Devops from "@/svgs/Devops.svg";
import Frontend from "@/svgs/Frontend.svg";
import UIUX from "@/svgs/UX Design.svg";
import { Skill } from "@/types/services";
import { cn } from "@/utils/cn";
import "@/styles/svg-stylings.css";
import Marquee from "react-fast-marquee";
import useViewportWidth from "@/utils/hooks/useViewportWidth";
import sizes from "@/data/sizes.json";

const SkillMarquee = ({ items }: { items: Array<Skill> }) => {
	const width = useViewportWidth();
	const isSmall = width < parseInt(sizes.tablet, 10);
	const content = [...Array(isSmall ? 4 : 1)].flatMap((_, i) => {
		return items.map((x, i) => {
			const Comp = renderSkill(x);
			return (
				<div key={i} className="h-[60px] relative stack mr-4">
					<p className="text-nowrap text-sm text-center font-clash uppercase h-fit text-neutral-900 dark:text-neutral-200 z-10 top-1/2 -translate-y-1/2 relative">
						{x}
					</p>
					<div className="h-full w-[100px] relative mx-auto z-0">
						<Comp.type className="w-full h-full stroke-neutral-700 skill-badge-svg" />
					</div>
				</div>
			);
		});
	});

	const Component = isSmall ? Marquee : "div";
	return (
		<div className={cn("mb-4", isSmall ? "-mx-4" : "mx-0")}>
			<Component className={cn("flex relative mt-4")}>{content}</Component>
		</div>
	);
};

const renderSkill = (skill: Skill): JSX.Element => {
	switch (skill) {
		case Skill.back:
			return <Backend />;
		case Skill.front:
			return <Frontend />;
		case Skill.devops:
			return <Devops />;
		case Skill.uiux:
			return <UIUX />;
		case Skill.branding:
			return <Branding />;
		default:
			throw new Error();
	}
};

export default SkillMarquee;
