import { TagEnum } from "@/types/gen/tag-enum";
import { Service, Skill } from "@/types/services";

export const serviceProducts: Array<Service> = [
	{
		name: "Entwicklung einer Weboberfläche",
		desc: "Conception, Design & Implementation of a Product, an Idea or a Company",
		phases: [],
		skills: Skill.uiux,
		tags: [TagEnum.austria],
	},
	{
		name: "Design eines Webkonzeptes",
		desc: "",
		phases: [],
		skills: Skill.uiux,
		tags: [TagEnum.austria],
	},
	{
		name: "Erstellung einer Datenbank",
		desc: "",
		phases: [],
		skills: Skill.uiux,
		tags: [],
	},
];
