import GetSvgBySkill from "@/comps/GetSvgBySkill";
import { Blog } from "@/types/blogs";
import { Skill } from "@/types/services";

const BlogItemsSection = ({ blogs }: { blogs: Array<Blog> }) => {
	return (
		<section className="mt-8">
			{blogs.map((v, i) => {
				return <BlogItem key={i} item={v} />;
			})}
		</section>
	);
};

const BlogItem = ({ item }: { item: Blog }) => {
	return (
		<div>
			<div className="w-full flex justify-between items-end">
				<div className="ml-2">
					<div className="w-[180px] ">
						<GetSvgBySkill skill={item.skill} />
					</div>
					<h1 className="font-bold uppercase font-clash mt-4 text-xl">
						{item.name}
					</h1>
				</div>
				<a className="font-bold">mehr erfahren &gt;&gt;&gt;</a>
			</div>
			<hr className="h-[2px] w-full bg-neutral-200 my-4" />
		</div>
	);
};

export default BlogItemsSection;
