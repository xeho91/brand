import { z } from "zod";

import { FRAME } from "./frame.ts";
import { SHADOW } from "./shadow.ts";

export const DIMENSIONS_AVATAR = [49.45, 59.54] as const;
export const DIMENSIONS_LOGOTYPE = [300, 100] as const;

export const SAFE_SPACE = SHADOW.x + SHADOW.blur + (FRAME.size * 2 + SHADOW.x + SHADOW.blur);
export const LOGO_MIN_WIDTH = DIMENSIONS_LOGOTYPE[0] + SAFE_SPACE;
export const LOGO_MIN_HEIGHT = DIMENSIONS_LOGOTYPE[1] + SAFE_SPACE;

/* prettier-ignore */
export const DIMENSIONS_SCHEMA = z.tuple([
	z.number().min(LOGO_MIN_WIDTH),
	z.number().min(LOGO_MIN_HEIGHT),
]);

export type Dimensions = Readonly<z.infer<typeof DIMENSIONS_SCHEMA>>;

export function validateLogoDimensions(dimensions: Dimensions): asserts dimensions is Dimensions {
	DIMENSIONS_SCHEMA.parse(dimensions);
}
