import { Blog } from "@/types/blogs";
import { Skill } from "@/types/services";

export const Blogs: Array<Blog> = [
	{
		name: "Alles über frontend",
		desc: "strasdfing",
		link: "youtube.com",
		skills: [Skill.front],
		skillDomain: Skill.front,
	},
	{
		name: "bissl uiux",
		desc: "striasdfang",
		link: "youtube.com",
		skills: [Skill.uiux],
		skillDomain: Skill.uiux,
	},
	{
		name: "bissl devops",
		desc: "joo",
		link: "youtube.com",
		skills: [Skill.devops],
		skillDomain: Skill.devops,
	},
];
