import chroma from "chroma-js";

import type { getTargetColor } from "./utils.ts";

export const GRADIENT_MODES = ["hsl", "rgb", "hsv", "hsi", "lab", "oklab", "lch", "oklch", "hcl", "lrgb"] as const;
export type GradientMode = (typeof GRADIENT_MODES)[number];

interface GetGradientColorScales {
	start: ReturnType<typeof getTargetColor>;
	end: ReturnType<typeof getTargetColor>;
	/**
	 * @description Color mode.
	 *
	 * @default "lch"
	 */
	mode?: GradientMode;
	stops?: number;
}

export function getGradientColors(options: Partial<GetGradientColorScales> = {}) {
	const { start, end, mode = "oklch", stops = 5 } = options;

	return chroma.scale([start, end]).mode(mode).colors(stops, "hex");
}
