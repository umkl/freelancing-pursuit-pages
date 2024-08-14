import GobackHeader from "@/comps/header";

export default async function ImpressumLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<GobackHeader />
			{children}
		</>
	);
}
