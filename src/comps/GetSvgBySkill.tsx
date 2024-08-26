import Backend from "@/svgs/Backend.svg";
import Branding from "@/svgs/Branding.svg";
import Devops from "@/svgs/Devops.svg";
import Frontend from "@/svgs/Frontend.svg";
import UIUX from "@/svgs/UX Design.svg";
import { Skill } from "@/types/services";

export default function GetSvgBySkill({ skill }: { skill: Skill }) {
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
			throw new Error("no skill selected");
	}
}
