import chroma from "chroma-js";

export const getHSLColor = (hex: string) => chroma(hex).css("hsl");
export const setHSLColor = (hsl: [number, number, number]) => chroma(...hsl).css("hsl");

export const COLOR_VARIABLES = [
	"primary",
	"secondary",
	"shadow",
	...([1, 2, 3, 4, 5] as const).map((index) => `gradient-bg-stop-${index}` as const),
	...([1, 2, 3, 4, 5] as const).map((index) => `gradient-fg-stop-${index}` as const),
] as const;
export type ColorVariable = (typeof COLOR_VARIABLES)[number];

export function getColorVariable(color: ColorVariable): `var(--color-${ColorVariable})` {
	return `var(--color-${color})`;
}

export const FOREGROUND_VARIANTS = ["gradient", "black", "white"] as const;
export type ForegroundVariant = (typeof FOREGROUND_VARIANTS)[number];

export const BACKGROUND_VARIANTS = ["transparent", "gradient"] as const;
export type BackgroundVariant = (typeof BACKGROUND_VARIANTS)[number];

export type BackgroundShape = "circle" | "rect";
