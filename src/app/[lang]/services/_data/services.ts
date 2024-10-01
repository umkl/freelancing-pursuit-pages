import { TagEnum } from "@/types/gen/tag-enum";
import { Phase, Service, ServiceProduct, Skill } from "@/types/services";

export const serviceProducts: Array<ServiceProduct> = [
	{
		name: "Entwicklung einer zeitgerechten Weboberfläche",
		desc: "Conception, Design & Implementation of a Product, an Idea or a Company",
		phases: [Phase.concept, Phase.design, Phase.implement, Phase.maintain],
		skills: [Skill.uiux, Skill.front],
		tags: [TagEnum.nextjs, TagEnum.freelancer],
		pdfName: "1_Webdevelopment.pdf",
	},
	// {
	// 	name: "Design eines Webkonzeptes",
	// 	desc: "",
	// 	phases: [],
	// 	skills: [Skill.uiux, Skill.back],
	// 	tags: [TagEnum.freelancer, TagEnum.modernUx],
	// 	pdfName: "2_Webdevelopment.pdf",
	// },
	// {
	// 	name: "Erstellung einer Datenbanksschnittstelle",
	// 	desc: "",
	// 	phases: [],
	// 	skills: [Skill.uiux, Skill.front],
	// 	tags: [TagEnum.freelancer, TagEnum.modernUx],
	// 	pdfName: "3_Webdevelopment.pdf",
	// },
];

export const services: { [key: string]: Array<Service> } = {
	"de-AT": [
		{
			name: "Webentwicklung",
			num: 1,
			description:
				"Eine Website ist eine der einfachsten und individuellsten Möglichkeiten, die Aufmerksamkeit der Menschen zu gewinnen. Ich kann deine Domain mit einem leistungsoptimierten Webspace ausstatten, der Benutzer durch eine verbesserte Erfahrung mit Motion Design und interaktiven Elementen immer wieder zurückbringt. Mit nahtloser Navigation und ansprechenden visuellen Effekten hinterlässt deine Seite einen bleibenden Eindruck und hilft, stärkere Verbindungen zu deinem Publikum aufzubauen.",
			subitems: [
				"CMS-Integration",
				"Animationen & Motion Design",
				"Statische/Serverseitige Darstellung",
			],
			tags: [
				TagEnum.html,
				TagEnum.css,
				TagEnum.javascript,
				TagEnum.tailwind,
				TagEnum.typescript,
			],
		},
		{
			name: "UI/UX Design",
			num: 2,
			description:
				"Ein durchdachtes Benutzeroberflächendesign kann die Art und Weise verändern, wie Benutzer mit deiner Marke interagieren. Meine UI/UX-Designs sind darauf ausgelegt, intuitive, nahtlose Erlebnisse zu bieten, die nicht nur Aufmerksamkeit erregen, sondern auch die Benutzer mühelos durch deine Seite führen. Mit einem Fokus auf nutzerzentriertes Design, Funktionalität und ästhetischem Reiz stelle ich sicher, dass jede Interaktion sinnvoll ist, Benutzer fesselt und zu wiederholten Besuchen anregt. Hebe deine digitale Präsenz mit einem Design hervor, das nicht nur schön, sondern auch hochfunktional ist.",
			subitems: ["Responsive Design-Systeme", "Wireframing", "UX Writing"],
			tags: [
				TagEnum.responsivedesign,
				TagEnum.interactiondesign,
				TagEnum.uxresearch,
			],
		},
		{
			name: "SEO",
			num: 3,
			description:
				"Eine gut optimierte Website, die darauf ausgelegt ist, den Traffic zu steigern und die Konversionen zu erhöhen, kann die Online-Präsenz deiner Marke erheblich verbessern. Meine maßgeschneiderten Websites werden mit SEO im Hinterkopf erstellt, sodass Suchmaschinen den Wert deiner Seite erkennen und gleichzeitig ein Benutzererlebnis bieten, das auf deine einzigartige Identität zugeschnitten ist. Mit sauberem Code, schnellen Ladezeiten und den besten SEO-Praktiken wird deine Website nicht nur besser ranken, sondern auch Besucher binden und dazu beitragen, den Traffic in treue Kunden zu verwandeln.",
			subitems: [
				"Keyword-Optimierung",
				"Leistungsüberwachung",
				"Technisches SEO",
			],
			tags: [TagEnum.onpageseo, TagEnum.technicalseo, TagEnum.offpageseo],
		},
	],
	"en-US": [
		{
			name: "Web Development",
			num: 1,
			description:
				"A website is one of the easiest and most customizable ways to grab people’s attention. I can equip your domain with a performance-optimized web space that keeps users coming back because of an enhanced experience through motion design and interactive elements. With seamless navigation and engaging visuals, your site will leave a lasting impression and help build stronger connections with your audience.",
			subitems: [
				"CMS Integration",
				"Animations & Motion Design",
				"Static/Server-Side Rendering",
			],
			tags: [
				TagEnum.html,
				TagEnum.css,
				TagEnum.javascript,
				TagEnum.tailwind,
				TagEnum.typescript,
			],
		},
		{
			name: "UI/UX Design",
			num: 2,
			description:
				"A thoughtfully designed user interface can transform the way users interact with your brand. My UI/UX designs are crafted to provide intuitive, seamless experiences that not only capture attention but also guide users effortlessly through your site. With a focus on user-centric design, functionality, and aesthetic appeal, I ensure that every interaction is meaningful, keeping users engaged and encouraging return visits. Elevate your digital presence with a design that’s not just beautiful, but also highly functional.",
			subitems: ["Responsive Design Systems", "Wireframing", "UX Writing"],
			tags: [
				TagEnum.responsivedesign,
				TagEnum.interactiondesign,
				TagEnum.uxresearch,
			],
		},
		{
			name: "SEO",
			num: 3,
			description:
				"A well-optimized website designed to drive traffic and boost conversions can significantly enhance your brand’s online presence. My custom-coded sites are built with SEO in mind, ensuring search engines recognize your site’s value while delivering a user experience tailored to your unique identity. With clean code, fast loading times, and SEO best practices, your site will not only rank higher but also keep visitors engaged, helping you convert traffic into loyal customers.",
			subitems: [
				"Keyword Optimizations",
				"Performance Monitoring",
				"Technical SEO",
			],
			tags: [TagEnum.onpageseo, TagEnum.technicalseo, TagEnum.offpageseo],
		},
	],
};
