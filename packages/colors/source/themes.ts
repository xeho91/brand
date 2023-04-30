import { z } from "zod";

const colorThemes = ["dark", "light"] as const;

export type ColorTheme = (typeof colorThemes)[number];
export const COLOR_THEME_SCHEMA = z.enum(colorThemes);

export function validateColorTheme(name: string): asserts name is ColorTheme {
	COLOR_THEME_SCHEMA.safeParse(name);
}

export function isValidColorTheme(name: string): name is ColorTheme {
	return COLOR_THEME_SCHEMA.safeParse(name).success;
}
