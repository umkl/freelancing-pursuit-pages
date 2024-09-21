#!/usr/bin/env node
const tags = require("../data/tags.json");
const fs = require("fs");
console.log(tags);
fs.writeFileSync(
	"./src/types/gen/tag-enum.ts",
	`enum TagEnum {
	${tags
		.map((x) => {
			const words = x.split(" ");
			const camelCaseStr = words.reduce((accumulator, word, index) => {
				// If it's the first word, keep it lowercase; otherwise, capitalize the first letter
				if (index === 0) {
					return word; // The first word remains in lowercase
				} else {
					return accumulator + word[0].toUpperCase() + word.slice(1); // Capitalize the first letter of subsequent words
				}
			}, "");
			return `${camelCaseStr} = \"${x}\"`;
		})
		.join(",\n\t")}
}`
);
