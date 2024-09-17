"use client";
import { Blog } from "@/types/blogs";
import { useRouter } from "next/navigation";

const BlogItem = ({ blog }: { blog: Blog }) => {
	return (
		<div className="z-30 mb-8 tablet:w-full">
			<div className="p-4 rounded-lg border-2 mt-4 font-bold relative flex flex-col tablet:flex-row gap-4 w-full">
				<div className="rounded-lg bg-neutral-200/30 h-[300px] tablet:h-[200px] laptop:h-[200px] tablet:flex-1  relative"></div>
				<div className="lg:min-w-[300px]">
					<p className="text-neutral-300">c240820</p>
					<p className="text-neutral-600">{blog.name}</p>
					<p className="text-neutral-500">{blog.desc}</p>
					<a
						href={"https://medium.com"}
						target="_blank"
						className="text-neutral-300"
					>
						read about it &gt;&gt;&gt;
					</a>
				</div>
			</div>
		</div>
	);
};

export default BlogItem;
