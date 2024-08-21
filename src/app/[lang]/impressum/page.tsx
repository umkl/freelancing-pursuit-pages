import { getMarkdownContent } from "@/lib/md";
import "@/styles/md-section.css";

import { getLocale, unstable_setRequestLocale } from "next-intl/server";

const Page = async ({ params }: { params: { lang: string } }) => {
	// const l = await getLocale();
	unstable_setRequestLocale(params.lang);
	const content = await getMarkdownContent(
		`@/../dictionaries/impressum-${params.lang}.md`
	);
	return (
		<main
			className="md-section mx-4"
			dangerouslySetInnerHTML={{ __html: content }}
		></main>
		// <Language />
	);
};

export default Page;
