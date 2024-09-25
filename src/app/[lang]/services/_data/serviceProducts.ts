import { TagEnum } from "@/types/gen/tag-enum";
import { Phase, Service, Skill } from "@/types/services";

export const serviceProducts: Array<Service> = [
	{
		name: "Entwicklung einer zeitgerechten Weboberfläche",
		desc: "Conception, Design & Implementation of a Product, an Idea or a Company",
		phases: [Phase.concept, Phase.design, Phase.implement, Phase.maintain],
		skills: [Skill.uiux, Skill.front],
		tags: [TagEnum.nextjs, TagEnum.freelancer],
		pdfName: "1_Webdevelopment.pdf",
	},
	// {
	// 	name: "Design eines Webkonzeptes",
	// 	desc: "",
	// 	phases: [],
	// 	skills: [Skill.uiux, Skill.back],
	// 	tags: [TagEnum.freelancer, TagEnum.modernUx],
	// 	pdfName: "2_Webdevelopment.pdf",
	// },
	// {
	// 	name: "Erstellung einer Datenbanksschnittstelle",
	// 	desc: "",
	// 	phases: [],
	// 	skills: [Skill.uiux, Skill.front],
	// 	tags: [TagEnum.freelancer, TagEnum.modernUx],
	// 	pdfName: "3_Webdevelopment.pdf",
	// },
];
