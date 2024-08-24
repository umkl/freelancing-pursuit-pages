import Backend from "@/svgs/Backend.svg";
import Branding from "@/svgs/Branding.svg";
import Devops from "@/svgs/Devops.svg";
import Frontend from "@/svgs/Frontend.svg";
import UIUX from "@/svgs/UX Design.svg";
import { Skill } from "@/types/services";
import { cn } from "@/utils/cn";
import "@/styles/skill.css";

const SkillMarquee = ({ items }: { items: Array<Skill> }) => {
	return (
		<div className="w-full flex gap-4 mb-4">
			{items.map((x, i) => {
				const Comp = renderSkill(x);
				return (
					<div key={i} className="h-[50px] relative stack">
						<p className="text-nowrap text-sm text-center font-clash uppercase h-fit text-neutral-900 z-10 top-1/2 -translate-y-1/2 relative">
							{x}
						</p>
						<div className="h-full w-[100px] relative mx-auto z-0">
							<Comp.type className="w-full h-full stroke-neutral-700 skill-badge-svg" />
						</div>
					</div>
				);
			})}
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
