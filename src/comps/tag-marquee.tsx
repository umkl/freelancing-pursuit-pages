"use client";
import tags from "@/data/tags.json";
import useViewportWidth from "@/utils/hooks/useViewportWidth";
import Marquee from "react-fast-marquee";
import sizes from "@/data/sizes.json";
import { cn } from "@/utils/cn";

const TagMarquee = () => {
	const width = useViewportWidth();
	const isSmall = width < parseInt(sizes.lg, 10);
	const content = [...Array(isSmall ? 4 : 1)].flatMap((_, i) => {
		return tags.map((content, key) => {
			return (
				<div
					key={`${i}-${key}-${content}`}
					className="text-base font-clash font-semibold rounded-full px-4 py-1 border-[0.2rem] uppercase border-neutral-800 dark:border-neutral-200 mr-2"
				>
					{content}
				</div>
			);
		});
	});

	const Component = isSmall ? Marquee : "div";
	return (
		<div className={cn(isSmall ? "-mx-4" : "mx-0")}>
			<Component className={cn("flex mt-4")}>{content}</Component>
		</div>
	);
};

export default TagMarquee;
