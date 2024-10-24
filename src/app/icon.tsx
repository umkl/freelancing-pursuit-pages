import { ImageResponse } from "next/og";

// Image metadata
export const size = {
	width: 32,
	height: 32,
};
import Favicon from "@/svgs/favicon.svg";
export const contentType = "image/jpeg";

export default function Icon() {
	return new ImageResponse(
		<Favicon />,
		// ImageResponse options
		{
			// For convenience, we can re-use the exported icons size metadata
			// config to also set the ImageResponse's width and height.
			...size,
		}
	);
}
