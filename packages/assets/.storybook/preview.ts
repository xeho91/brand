import { withThemeByDataAttribute } from "@storybook/addon-styling";
import type { Decorator, Parameters, Preview } from "@storybook/svelte";
import { createStorybookTheme } from "@xeho91/storybook/theme";

/* import logo from "./assets/xeho91-logo.svg"; */

export const decorators: Array<Decorator> = [
	withThemeByDataAttribute({
		themes: {
			light: "light",
			dark: "dark",
		},
		defaultTheme: "light",
		attributeName: "data-theme",
	}),
];

export const parameters: Parameters = {
	darkMode: {
		classTarget: "html",
		current: "dark",
		darkClass: "dark",
		lightClass: "light",
		dark: {
			...createStorybookTheme("dark"),
			/* brandImage: logo */
		},
		light: {
			...createStorybookTheme("light"),
			/* brandImage: logo */
		},
	},
};

export const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};
