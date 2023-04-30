import { z } from "zod";

const colorScales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export type ColorScale = (typeof colorScales)[number];
export const COLOR_SCALES = new Set(colorScales);

export const COLOR_SCALE_SCHEMA = z
	.number()
	.refine((value: unknown): value is ColorScale => COLOR_SCALES.has(value as ColorScale));

export function isValidColorScale(swatch: string | number): swatch is ColorScale {
	return COLOR_SCALE_SCHEMA.safeParse(String(swatch)).success;
}

export function validateColorScale(swatch: string | number): asserts swatch is ColorScale {
	COLOR_SCALE_SCHEMA.parse(String(swatch));
}

export const TARGET_COLOR_SCALES = {
	appBg: {
		default: 1,
	},
	elementBg: {
		subtle: 2,
		default: 3,
		hover: 4,
		active: 5,
	},
	border: {
		subtle: 6,
		default: 7,
		hover: 8,
	},
	solid: {
		default: 9,
		hover: 10,
	},
	text: {
		lowContrast: 11,
		highContrast: 12,
	},
} as const;

export type ColorTargetName = keyof typeof TARGET_COLOR_SCALES;
export type TargetStateName<Name extends ColorTargetName> = keyof (typeof TARGET_COLOR_SCALES)[Name];
export type TargetColorScale<Target extends ColorTargetName, State extends TargetStateName<Target>> = Extract<
	(typeof TARGET_COLOR_SCALES)[Target][State],
	ColorScale
>;

export function getTargetColorScale<Target extends ColorTargetName, State extends TargetStateName<Target>>(
	target: Target,
	state: State,
): TargetColorScale<Target, State> {
	return TARGET_COLOR_SCALES[target][state] as TargetColorScale<Target, State>;
}
