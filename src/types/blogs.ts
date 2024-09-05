import { Skill } from "./services";

export interface Blog {
	name: string;
	desc: string;
	link: string;
	skills: Array<Skill>;
	skillDomain: Skill;
}
