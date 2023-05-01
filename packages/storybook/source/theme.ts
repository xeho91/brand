import { create, type ThemeVars } from "@storybook/theming";
import { type ColorTheme, getTargetColor } from "@xeho91/colors";

// @ts-ignore - No types for this
/* import logo from "./xeho91-logo.svg"; */

export function createStorybookTheme(theme: ColorTheme): ThemeVars {
	return create({
		base: theme,
		// App
		appBg: getTargetColor("appBg", "default", "primary", theme),
		appContentBg: getTargetColor("elementBg", "subtle", "secondary", theme),
		appBorderColor: getTargetColor("border", "subtle", "primary", theme),
		appBorderRadius: 0,
		// Bar
		barBg: getTargetColor("elementBg", "subtle", "primary", theme),
		barTextColor: getTargetColor("text", "lowContrast", "primary", theme),
		barSelectedColor: getTargetColor("solid", "default", "secondary", theme),
		// Brand
		brandTitle: "xeho91",
		brandUrl: "https://github.com/xeho91",
		/* brandImage: logo, */
		brandTarget: "_self",
		// Colors
		colorPrimary: getTargetColor("solid", "default", "primary", theme),
		colorSecondary: getTargetColor("solid", "default", "secondary", theme),
		// Typography
		/* fontBase: '"Open Sans", sansserif', */
		/* fontCode: "monospace", */
		// Text colors
		textColor: getTargetColor("text", "lowContrast", "secondary", theme),
		textInverseColor: getTargetColor("text", "lowContrast", "primary", theme),
	});
}
