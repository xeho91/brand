import { kebabCase } from "@terminal-nerds/snippets-string/case";

import { FONT_FAMILIES, type FontFamily } from "./families.ts";
import { FONT_WEIGHT_VALUES } from "./weights.ts";

const PROVIDER_URL = "https://fonts.bunny.net/css";

export function getFontURL(font: FontFamily): URL {
	const url = new URL(PROVIDER_URL);

	url.searchParams.set("family", kebabCase(FONT_FAMILIES[font]) + ":" + Object.values(FONT_WEIGHT_VALUES).join(","));

	return url;
}
