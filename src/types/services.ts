import { TagEnum } from "./gen/tag-enum";

export interface ServiceProduct {
	name: string;
	desc: string;
	phases: Array<Phase>;
	skills: Array<Skill>;
	tags: Array<TagEnum>;
	pdfName: string;
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

export interface Service {
	name: string;
	num: number;
	description: string;
	subitems: Array<string>;
	tags: Array<TagEnum>;
}
