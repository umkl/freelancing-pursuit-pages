import GobackHeader, { Adheader } from "@/comps/header";

export default async function BaseLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<Adheader />
			{children}
		</main>
	);
}
