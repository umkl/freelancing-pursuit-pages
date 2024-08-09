/** @type {import('next').NextConfig} */
import { dir } from "console";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
	i18n: {
		locales: ["de-AT"],
		defaultLocale: "de-AT",
	},
};

export default withNextIntl(nextConfig);
