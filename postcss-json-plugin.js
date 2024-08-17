export default function postcssJsonPlugin(opts = {}) {
	return {
		postcssPlugin: "postcss-json-plugin",
		Once(root, { result }) {
			// Example JSON object
			const jsonData = opts.jsonData || {};

			// Loop through JSON data and create custom properties
			root.prepend(
				Object.entries(jsonData)
					.map(([key, value]) => `:root { --${key}: ${value}; }`)
					.join("\n")
			);
		},
	};
}

// Ensure PostCSS recognizes it as a plugin
postcssJsonPlugin.postcss = true;
