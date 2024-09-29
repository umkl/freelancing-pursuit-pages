const ProjectsPage = ({ params }: { params: { lang: string } }) => {
	return (
		<section className="flex-1 w-full h-full relative overflow-hidden ">
			<div className="h-full w-full overflow-hidden absolute ">
				<div className="flex w-full uppercase font-black text-neutral-900 dark:text-neutral-100 py-4 px-8">
					<p className="flex-[2] block">projectname</p>
					<p className="flex-[4]">description</p>
					<p className="flex-[2]">client</p>
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
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2">
				<p className="font-clash uppercase text-2xl relative font-extra-bold">
					no projects
				</p>
				<p className="text-center font-bold">let's get one started</p>
			</div>
		</section>
	);
};

export default ProjectsPage;
