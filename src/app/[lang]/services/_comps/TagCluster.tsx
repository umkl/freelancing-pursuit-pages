const TagCluster = ({ items }: { items: Array<string> }) => {
	return (
		<p className="font-bold flex-row-reverse text-lg leading-[120%] mb-4 mt-36 flex flex-wrap overflow-hidden text-neutral-700 tablet:max-w-[400px] tablet:ml-auto laptop:mt-[400px]">
			{items.map((v, i) => {
				return <span key={i}>#{v}&nbsp;</span>;
			})}
		</p>
	);
};

export default TagCluster;
