import { z } from "zod";

export const MONOSPACE = "Jetbrains Mono";
export const SANS_SERIF = "Work Sans";
export const SERIF = "Fraunces";

const fontFamilies = ["mono", "sans", "serif"] as const;
export const FONT_FAMILY_SCHEMA = z.enum(fontFamilies);
export const FONT_FAMILY = new Set(fontFamilies);
export type FontFamily = (typeof fontFamilies)[number];

export const FONT_FAMILIES = {
	mono: MONOSPACE,
	sans: SANS_SERIF,
	serif: SERIF,
} as const;
