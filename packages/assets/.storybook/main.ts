import type { StorybookConfig } from "@storybook/svelte-vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-links",
		{
			name: "@storybook/addon-essentials",
			options: {
				docs: {
					configureJSX: true,
					transcludeMarkdown: true,
				},
			},
		},
		"@storybook/addon-a11y",
		"@storybook/addon-interactions",
		"@storybook/addon-styling",
		"storybook-dark-mode",
	],
	docs: {
		autodocs: true,
		defaultName: "Documentation",
	},
	features: {
		/* interactionsDebugger: true, */
	},
	framework: {
		name: "@storybook/svelte-vite",
		options: {},
	},
	stories: ["../source/**/*.stories.@(js|jsx|md|mdx|ts|tsx|svelte)"],
};

export default config;
