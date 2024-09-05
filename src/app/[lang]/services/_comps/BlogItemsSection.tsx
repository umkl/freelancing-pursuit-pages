import getSvgBySkill from "@/comps/get-svg-by-skill";
import GetSvgBySkill from "@/comps/get-svg-by-skill";
import { Blog } from "@/types/blogs";
import { Skill } from "@/types/services";

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
			<div className="w-full flex justify-between items-end relative">
				<h1 className="font-bold uppercase font-clash text-xl z-20">{skill}</h1>
				<div className="w-[180px] top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 scale-75 -rotate-12 absolute z-10">
					<skillSvg.type
						skill={skill}
						className="w-full h-full skill-badge-svg"
					/>
				</div>

				{/* <a className="font-bold">mehr erfahren &gt;&gt;&gt;</a> */}
			</div>
			{items.map((v, i) => {
				return (
					<div className="z-30 mb-8" key={i}>
						<div className="p-4 rounded-lg border-2 mt-4 font-bold relative flex flex-col gap-4">
							<div className="rounded-lg bg-neutral-200/30 h-[300px] relative"></div>
							<div>
								<p className="text-neutral-300">c240820</p>
								<p className="text-neutral-600">{v.name}</p>
								<p className="text-neutral-500">{v.desc}</p>
								<p className="text-neutral-300">read about it &gt;&gt;&gt;</p>
							</div>
						</div>
					</div>
				);
			})}
			{/* <hr className="h-[2px] w-full bg-neutral-200 my-4" /> */}
		</div>
	);
};

export default BlogItemsSection;
