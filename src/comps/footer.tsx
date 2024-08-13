"use client";
import AtFlag from "@/svgs/at-flag.svg";

const Footer = () => {
	return (
		<footer className="flex justify-between items-center font-inter capitalize m-4 font-bold text-base">
			<div>impressum</div>
			<AtFlag className="scale-75" />
		</footer>
	);
};

export default Footer;
