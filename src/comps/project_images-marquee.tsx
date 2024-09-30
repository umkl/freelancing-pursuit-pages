"use client";
import tags from "@/data/tags.json";
import useViewportWidth from "@/utils/hooks/useViewportWidth";
import Marquee from "react-fast-marquee";
import sizes from "@/data/sizes.json";
import { cn } from "@/utils/cn";
import Image from "next/image";

const ProjectImagesMarquee = () => {
	const featured_projects = [
		"ballkarten-project-1866x1400",
		"charge-project-3266x1400",
		"deets-project-3266x1400",
		"filliStudio-project-3266x1400",
		"heed-project-3266x1400",
		"octagon-project-1866x1400",
		"synopsis-project-2100x1400",
		"wbyt_web-project-1866x1400",
	];
	return (
		<Marquee speed={300} pauseOnHover>
			<div className="flex flex-nowrap mb-4 gap-4 mr-10">
				{featured_projects.map((x) => {
					return (
						<Image
							src={`/imgs/project-imgs/${x}.png`}
							style={{
								width: "auto",
								height: "400px",
							}}
							width={600}
							height={400}
							quality={100}
							objectFit="contain"
							alt={`/images/project-imgs/${x}`}
						/>
					);
				})}
			</div>
		</Marquee>
	);
};

export default ProjectImagesMarquee;
