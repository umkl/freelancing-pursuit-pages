"use client";
import tags from "@/data/tags.json";
import useViewportWidth from "@/utils/hooks/useViewportWidth";
import Marquee from "react-fast-marquee";
import sizes from "@/data/sizes.json";
import { cn } from "@/utils/cn";
import Image from "next/image";

const ImageMarquee = () => {
	const width = useViewportWidth();
	const isSmall = width < parseInt(sizes.tablet, 10);
	const imageLinkArray = [
		"/imgs/illustrations/Frontend-Art-Poster.png",
		"/imgs/illustrations/Backend-Art-Poster.png",
		"/imgs/illustrations/Brand-Art-Poster.png",
		"/imgs/illustrations/UX-Art-Poster.png",
	];
	const content = [...Array(isSmall ? 4 : 1)].flatMap((_, i) => {
		return imageLinkArray.map((content, key) => {
			// className="text-base font-clash font-bold rounded-full text-nowrap px-4 py-1 border-[0.2rem] uppercase border-neutral-800 dark:border-neutral-200 mr-2"
			return (
				<div className={cn(isSmall ? "" : " w-full h-fit")}>
					<Image
						src={content}
						width={1000}
						height={1000}
						className={cn(
							!isSmall ? "h-auto inline object-contain" : "h-[200px] w-[200px]"
						)}
						alt={"Illustration"}
					/>
				</div>
			);
		});
	});

	const Component = isSmall ? Marquee : "div";
	return (
		<div className={cn(isSmall ? "-mx-4" : "mx-0")}>
			<Component className={cn("flex mt-4 gap-4 relative w-fill")}>
				<div className="flex gap-4">{content}</div>
			</Component>
		</div>
	);
};

export default ImageMarquee;
