import GobackHeader, { Adheader } from "@/comps/header";

export default async function BaseLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex-1 relative flex flex-col laptop:min-h-[1100px]">
			<Adheader />
			{children}
		</main>
	);
}
