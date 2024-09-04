import DivIco from "@/svgs/divider-icon.svg";

const FancyDivider = () => {
	return (
		<div className="-mx-4">
			<div className="w-full flex flex-row my-8 items-center">
				<div className="border-t-2 w-full border-neutral-200 dark:border-neutral-800"></div>
				<div className="mx-4">
					<DivIco className="w-[80px] path-slate-200 divider-color-svg" />
				</div>
				<div className="border-t-2 w-full border-neutral-200 dark:border-neutral-800"></div>
			</div>
		</div>
	);
};

export default FancyDivider;
