import { Blog } from "@/types/blogs";
import { Skill } from "@/types/services";

export const Blogs: Array<Blog> = [
	{
		name: "Alles über frontend",
		desc: "strasdfing",
		link: "string",
		skills: [Skill.front],
		skillDomain: Skill.front,
	},
	{
		name: "bissl uiux",
		desc: "striasdfang",
		link: "string",
		skills: [Skill.uiux],
		skillDomain: Skill.uiux,
	},
	{
		name: "bissl devops",
		desc: "joo",
		link: "string",
		skills: [Skill.devops],
		skillDomain: Skill.devops,
	},
];
