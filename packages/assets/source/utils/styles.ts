import { type ColorTheme, getGradientColors, getTargetColor } from "@xeho91/colors";

import { type ForegroundVariant, getHSLColor } from "./colors.ts";
import { GRADIENT } from "./gradient.ts";

type Variables = Partial<{
	primary: string;
	secondary: string;
	shadow: string;
}>;

function createColorTheme(theme: ColorTheme, variant: ForegroundVariant): string {
	const variables: Variables = {};

	if (variant === "gradient") {
		variables.primary = getHSLColor(getTargetColor("solid", "default", "primary", theme));
		variables.secondary = getHSLColor(getTargetColor("solid", "default", "secondary", theme));
		variables.shadow = getHSLColor(getTargetColor("solid", "default", "shadow", theme));
		Object.assign(variables, {
			...variables,
			...Object.fromEntries(
				getGradientColors({
					start: getHSLColor(getTargetColor("elementBg", "default", "primary", theme)),
					end: getHSLColor(getTargetColor("elementBg", "default", "secondary", theme)),
					stops: GRADIENT.stops,
				}).map((color, index) => [`gradient-bg-stop-${index + 1}`, getHSLColor(color)]),
			),
			...Object.fromEntries(
				getGradientColors({
					start: variables.primary,
					end: variables.secondary,
					stops: GRADIENT.stops,
				}).map((color, index) => [`gradient-fg-stop-${index + 1}`, getHSLColor(color)]),
			),
		});
	}

	if (variant === "black") {
		variables.primary = getHSLColor(getTargetColor("text", "highContrast", "black", theme));
		variables.shadow = getHSLColor(getTargetColor("solid", "default", "shadow", theme));
	}

	if (variant === "white") {
		variables.primary = getHSLColor(getTargetColor("text", "highContrast", "white", theme));
		variables.shadow = getHSLColor(getTargetColor("solid", "default", "shadow", theme));
	}

	return Object.entries(variables)
		.map(([key, value]) => `--color-${key}: ${value};`)
		.join("\n");
}

function wrapInSelectors(theme: ColorTheme, variant: ForegroundVariant): string {
	return `html.${theme}, [data-theme="${theme}"] {\n${createColorTheme(theme, variant)}\n}`;
}

export function createStylesContent(variant: ForegroundVariant) {
	return `<style>\n${wrapInSelectors("dark", variant)}\n${wrapInSelectors("light", variant)}\n</style>`;
}
