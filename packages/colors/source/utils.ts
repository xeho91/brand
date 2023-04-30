import type { ColorAlias, ColorAliasValue, ColorKey, ColorName } from "./name.ts";
import { type ColorThemedPalette, getColorThemedPalette } from "./palette.ts";
import {
	type ColorScale,
	type ColorTargetName,
	getTargetColorScale,
	type TargetColorScale,
	type TargetStateName,
} from "./scale.ts";
import type { ColorTheme } from "./themes.ts";

export type Color<Name extends ColorKey, Theme extends ColorTheme, Scale extends ColorScale> = ColorThemedPalette<
	Name,
	Theme
>[Scale];

export function getColor<
	Name extends ColorAlias | ColorName,
	Scale extends ColorScale,
	Theme extends ColorTheme = "light",
	Key extends ColorName = Name extends ColorAlias ? ColorAliasValue<Name> : Name,
>(name: Name, scale: Scale, theme?: Theme): Color<Key, Theme, Scale> {
	return getColorThemedPalette(name, theme ?? "light")[scale] as Color<Key, Theme, Scale>;
}

export type TargetColor<
	Target extends ColorTargetName,
	State extends TargetStateName<Target>,
	Name extends ColorKey,
	Theme extends ColorTheme,
> = Color<Name, Theme, TargetColorScale<Target, State>>;

export function getTargetColor<
	Target extends ColorTargetName,
	State extends TargetStateName<Target>,
	Name extends ColorKey,
	Theme extends ColorTheme,
>(target: Target, state: State, name: Name, theme?: Theme): TargetColor<Target, State, Name, Theme> {
	return getColor(name, getTargetColorScale(target, state), theme) as TargetColor<Target, State, Name, Theme>;
}
