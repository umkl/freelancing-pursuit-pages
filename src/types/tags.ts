import { Tag } from "@/types/services";
import tags from "@/data/tags.json";

enum TagEnum {
	tag1,
	tag2,
}

function createTagListFromTagList() {
	let tagEntry = new Tag(TagEnum.tag1);
}

export const Tags = new Map([[TagEnum.tag1]]);
