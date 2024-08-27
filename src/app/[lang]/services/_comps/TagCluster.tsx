const TagCluster = ({ items }: { items: Array<string> }) => {
	return (
		<p className="font-bold text-lg italic text-neutral-700">
			{items.map((v, i) => {
				return <span key={i}>#{v}&nbsp;</span>;
			})}
		</p>
	);
};

export default TagCluster;
