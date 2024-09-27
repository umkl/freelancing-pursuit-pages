import { TagEnum } from "./gen/tag-enum";

export function toHashTag(item: TagEnum) {
	return `#${item.toString()}`;
}
