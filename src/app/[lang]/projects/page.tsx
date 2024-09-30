import Link from "next/link";
import "@/styles/projects-page.css";

const ProjectsPage = ({ params }: { params: { lang: string } }) => {
	return (
		<section className="flex-1 w-full h-full relative overflow-hidden ">
			<div className="h-full w-full overflow-hidden absolute ">
				<div className="flex w-full uppercase font-black text-neutral-900 dark:text-neutral-100 py-4 px-8">
					<p className="flex-[2] block">projectname</p>
					<p className="flex-[4] hidden">description</p>
					<p className="flex-[2] hidden">client</p>
					<p className="flex-[2] text-right">release date</p>
				</div>
				<div className="relative">
					<div className="absolute dark:from-neutral-900/100 from-neutral-100/100 bg-gradient-to-t to-neutral-100/0 w-full h-full"></div>
					{Array.from({ length: 20 }).map((_, index) => {
						return (
							<div
								key={index}
								className="border-t-2 border-neutral-800 h-[2rem]"
							></div>
						);
					})}
				</div>
				{/* <div className="flex-1 overflow-y-scroll"> 
				</div> */}
			</div>
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-fit px-5  projects-radial-gradient flex flex-col items-center">
				<p className="font-clash uppercase text-2xl relative font-extra-bold text-center leading-[3rem] mt-4 mb-[0.8rem]">
					pretty empty
				</p>
				<p className="text-center font-bold text-lg">Let’s get that fixed:</p>
				<Link href="/contact">
					<button className="mx-auto px-6 py-3 relative rounded-lg text-lg font-clash font-bold underline">
						&gt;&gt; contact
					</button>
				</Link>
			</div>
		</section>
	);
};

export default ProjectsPage;
