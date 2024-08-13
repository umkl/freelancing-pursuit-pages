declare module "*.svg" {
	import { FC, SVGProps } from "react";
	interface SVGWithClassNameProps extends SVGProps<SVGElement> {
		className?: string;
	}

	const content: FC<SVGWithClassNameProps>;
	export default content;
}

declare module "*.svg?url" {
	const content: any;
	export default content;
}
