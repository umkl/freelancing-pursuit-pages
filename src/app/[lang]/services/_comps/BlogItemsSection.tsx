import getSvgBySkill from "@/comps/get-svg-by-skill";
import GetSvgBySkill from "@/comps/get-svg-by-skill";
import { Blog } from "@/types/blogs";
import { Skill } from "@/types/services";
import BlogItem from "./BlogItem";

const BlogItemsSection = ({ blogs }: { blogs: Array<Blog> }) => {
	type GroupedBlogs = {
		[key in Skill]: Blog[];
	};
	const groupedBlogs: GroupedBlogs = blogs.reduce(
		(acc: GroupedBlogs, blog: Blog) => {
			if (!acc[blog.skillDomain]) {
				acc[blog.skillDomain] = [];
			}
			acc[blog.skillDomain].push(blog);
			return acc;
		},
		{} as GroupedBlogs
	);
	const sortedSkillDomains = Object.keys(groupedBlogs);
	return (
		<section className="mt-8">
			{sortedSkillDomains.map((skillDomain) => (
				<div key={skillDomain}>
					{/* <h2>{skillDomain}</h2> 
					<ul>
						{groupedBlogs[skillDomain as Skill].map((blog, i) => (
							<li key={i}>
								<h3>{blog.name}</h3>
								<p>{blog.desc}</p>
							</li>
						))}
					</ul> */}
					<BlogSection
						skill={skillDomain as Skill}
						items={groupedBlogs[skillDomain as Skill]}
					/>
				</div>
			))}
		</section>
	);
};

const BlogSection = ({
	skill,
	items,
}: {
	skill: Skill;
	items: Array<Blog>;
}) => {
	const skillSvg = getSvgBySkill(skill);
	return (
		<div className="z-0">
			<div className="w-full flex relative">
				<h1 className="font-bold uppercase font-clash text-xl z-20">{skill}</h1>
				<div className="w-[180px] top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 scale-75 -rotate-12 absolute z-10">
					<skillSvg.type
						skill={skill}
						className="w-full h-full skill-badge-svg"
					/>
				</div>

				{/* <a className="font-bold">mehr erfahren &gt;&gt;&gt;</a> */}
			</div>
			<div className="grid grid-cols-1 laptop:grid-cols-2 ">
				{items.map((v, i) => {
					return <BlogItem key={i} blog={v} />;
				})}
			</div>
			{/* <hr className="h-[2px] w-full bg-neutral-200 my-4" /> */}
		</div>
	);
};

export default BlogItemsSection;
