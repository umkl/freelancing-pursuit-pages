import { TagEnum } from "./gen/tag-enum";

export interface Service {
	name: string;
	desc: string;
	phases: Array<Phase>;
	skills: Skill;
	tags: Array<TagEnum>;
}
export enum Skill {
	uiux = "UI/UX Design",
	front = "Frontend Development",
	back = "Backend Development",
	devops = "DevOps",
	branding = "Branding",
}
export enum Phase {
	concept = "Konzept",
	design = "Design",
	implement = "Implementation",
	maintain = "Maintain",
}
