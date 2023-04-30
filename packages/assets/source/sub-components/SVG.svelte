<script lang="ts">
	import type { ColorTheme } from "@xeho91/colors";

	import type { ForegroundVariant } from "../utils/colors.ts";
	import type { Dimensions } from "../utils/dimensions.ts";
	import { createStylesContent } from "../utils/styles.ts";

	// Meta
	export let id: string;
	export let title: string;
	export let description: string;
	// Dimensions
	export let dimensions: Dimensions;
	// Theme
	export let colorForeground: ForegroundVariant;
	export let theme: ColorTheme | "system";

	const [width, height] = dimensions;
	const idDescription = `${id}_description`;
	const idTitle = `${id}_title`;

	$: styles = createStylesContent(colorForeground);
</script>

<svg
	{id}
	role="img"
	aria-labelledby="{idTitle} {idDescription}"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 {width} {height}"
	preserveAspectRatio="xMinYMin meet"
	data-theme={theme === "system" ? undefined : theme}
>
	<title id={idTitle}>{title}</title>
	<desc id={idDescription}>{description}</desc>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html styles}
	<slot />
</svg>
