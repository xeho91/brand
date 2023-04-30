import type { GradientMode } from "@xeho91/colors";

const GRADIENT_MODE: GradientMode = "oklch";

export const GRADIENT = {
	mode: GRADIENT_MODE,
	rotate: 90,
	stops: 5,
} as const;

export type GradientTarget = "background" | "foreground";
