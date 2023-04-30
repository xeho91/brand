import { z } from "zod";

const colorAliases = ["primary", "secondary", "shadow"] as const;
const colorNames = ["black", "orange", "purple", "sand", "white"] as const;

export type ColorAlias = (typeof colorAliases)[number];
export type ColorName = (typeof colorNames)[number];
export type ColorKey = ColorAlias | ColorName;

export const COLOR_ALIAS_SCHEMA = z.enum(colorAliases);
export const COLOR_NAME_SCHEMA = z.enum(colorNames);
export const COLOR_NAMES = new Set(colorNames);

export function isValidColorName(name: string): name is ColorName {
	return COLOR_NAME_SCHEMA.safeParse(name).success;
}

export function validateColorName(name: string): asserts name is ColorName {
	COLOR_NAME_SCHEMA.parse(name);
}

export const COLOR_ALIASES = {
	primary: "purple",
	secondary: "orange",
	shadow: "sand",
} as const;

export function isValidColorAlias(name: string): name is ColorAlias {
	return COLOR_ALIAS_SCHEMA.safeParse(name).success;
}

export function validateColorAlias(name: string): asserts name is ColorAlias {
	COLOR_ALIAS_SCHEMA.parse(name);
}

export type ColorAliasValue<Alias extends ColorAlias> = typeof COLOR_ALIASES[Alias];

export function getColorName<Alias extends ColorAlias>(alias: Alias): ColorAliasValue<Alias> {
	validateColorAlias(alias);

	return COLOR_ALIASES[alias];
}
