import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import locales from "@/data/locales.json";

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: locales,

	// Used when no locale matches
	defaultLocale: locales[0],
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
	createSharedPathnamesNavigation(routing);