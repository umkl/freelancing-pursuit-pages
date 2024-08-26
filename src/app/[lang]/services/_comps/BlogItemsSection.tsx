import GetSvgBySkill from "@/comps/GetSvgBySkill";
import { Blog } from "@/types/blogs";
import { Skill } from "@/types/services";

const BlogItemsSection = ({ blogs }: { blogs: Array<Blog> }) => {
	return (
		<section>
			{blogs.map((v, i) => {
				return <BlogItem key={i} item={v} />;
			})}
		</section>
	);
};

const BlogItem = ({ item }: { item: Blog }) => {
	return (
		<div className="w-full flex justify-between items-end">
			<div>
				<div className="w-[180px]">
					<GetSvgBySkill skill={Skill.front} />
				</div>
				<h1 className="font-bold uppercase font-clash mt-4 text-xl">
					{item.name}
				</h1>
			</div>
			<a className="font-bold">mehr erfahren</a>
		</div>
	);
};

export default BlogItemsSection;
