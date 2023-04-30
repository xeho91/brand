import {
	type ColorAlias,
	type ColorAliasValue,
	type ColorKey,
	type ColorName,
	getColorName,
	isValidColorAlias,
	isValidColorName,
} from "./name.ts";
import { BLACK } from "./palette/black.ts";
import { ORANGE, ORANGE_DARK } from "./palette/orange.ts";
import { PURPLE, PURPLE_DARK } from "./palette/purple.ts";
import { SAND, SAND_DARK } from "./palette/sand.ts";
import { WHITE } from "./palette/white.ts";
import type { ColorTheme } from "./themes.ts";

export * from "./palette/black.ts";
export * from "./palette/orange.ts";
export * from "./palette/purple.ts";
export * from "./palette/sand.ts";
export * from "./palette/white.ts";

export const COLOR_PALETTE = {
	black: { light: BLACK, dark: WHITE },
	orange: { light: ORANGE, dark: ORANGE_DARK },
	purple: { light: PURPLE, dark: PURPLE_DARK },
	sand: { light: SAND, dark: SAND_DARK },
	white: { light: WHITE, dark: BLACK },
} as const;

export type ColorPaletteName<Key extends ColorKey> = Key extends ColorAlias ? ColorAliasValue<Key> : Key;
export type ColorPalette<Name extends ColorKey> = (typeof COLOR_PALETTE)[ColorPaletteName<Name>];
export type ColorThemedPalette<Name extends ColorKey, Theme extends ColorTheme> = ColorPalette<Name>[Theme];

export function getColorPalette<
	Name extends ColorAlias | ColorName,
	Key extends ColorName = Name extends ColorAlias ? ColorAliasValue<Name> : Name,
>(name: Name): ColorPalette<Key> {
	let paletteKey: ColorName;

	if (isValidColorAlias(name)) {
		paletteKey = getColorName(name);
	} else if (isValidColorName(name)) {
		paletteKey = name;
	} else {
		throw new TypeError(`Unrecognized color name provided: "${name}"`);
	}

	return COLOR_PALETTE[paletteKey] as ColorPalette<Key>;
}

export function getColorThemedPalette<
	Name extends ColorAlias | ColorName,
	Theme extends ColorTheme = "light",
	Key extends ColorName = Name extends ColorAlias ? ColorAliasValue<Name> : Name,
>(name: Name, theme?: Theme): ColorThemedPalette<Key, Theme> {
	return getColorPalette(name)[theme ?? "light"] as ColorThemedPalette<Key, Theme>;
}
