const ProjectsPage = ({ params }: { params: { lang: string } }) => {
	return (
		<section className="flex-1 w-full h-full relative overflow-hidden bg-red-200">
			<div className="h-full w-full overflow-hidden flex flex-col bg-red-300 relative">
				{/* <div className="flex-1 overflow-y-scroll">
					{Array.from({ length: 40 }).map((_, index) => {
						return (
							<tr key={index} className="border-b-2 border-white h-[2rem]">
								<td>projectname</td>
							</tr>
						);
					})}
				</div> */}
			</div>
		</section>
	);
};

export default ProjectsPage;
