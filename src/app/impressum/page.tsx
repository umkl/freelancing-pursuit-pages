import { getMarkdownContent } from "@/lib/md";
import "@/styles/md-section.css";

const Page = async () => {
	const contentHtml = await getMarkdownContent("@/../messages/impressum-de.md");
	return (
		<main
			className="md-section mx-4"
			dangerouslySetInnerHTML={{ __html: contentHtml }}
		></main>
	);
};

export default Page;
