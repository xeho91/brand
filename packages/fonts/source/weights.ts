import { z } from "zod";

const weightAliases = [
	"thin",
	"extralight",
	"light",
	"regular",
	"medium",
	"semibold",
	"bold",
	"extrabold",
	"black",
] as const;
export const FONT_WEIGHT_SCHEMA = z.enum(weightAliases);
export type FontWeight = (typeof weightAliases)[number];
export const FONT_WEIGHTS = new Set(weightAliases);

export const FONT_WEIGHT_VALUES = {
	thin: 100,
	extralight: 200,
	light: 300,
	regular: 400,
	medium: 500,
	semibold: 600,
	bold: 700,
	extrabold: 800,
	black: 900,
} as const;

type FontWeightValue<Alias extends FontWeight> = (typeof FONT_WEIGHT_VALUES)[Alias];

export function validateFontWeight(weight: string): asserts weight is FontWeight {
	FONT_WEIGHT_SCHEMA.parse(weight);
}

export function isValidFontWeight(weight: string): weight is FontWeight {
	return FONT_WEIGHT_SCHEMA.safeParse(weight).success;
}

export function getFontWeightValue<Alias extends FontWeight>(weight: Alias): FontWeightValue<Alias> {
	validateFontWeight(weight);

	return (weightAliases.indexOf(weight) + 1 * 100) as FontWeightValue<Alias>;
}
