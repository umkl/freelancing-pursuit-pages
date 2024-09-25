import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import createMiddleware from "next-intl/middleware";
import locales from "@/data/locales.json";

// let headers = { "accept-language": "en-US,en;q=0.5" };
// let languages = new Negotiator({ headers }).languages();
// let locales = ["en-US", "nl-NL", "nl"];
// let defaultLocale = "en-US";
// match(languages, locales, defaultLocale); // -> 'en-US'

export default createMiddleware({
	locales: locales,
	defaultLocale: locales[0],
});

export const config = {
	matcher: ["/", "/(de|en)/:path*", "/impressum", "/services", "/contact"],
};
