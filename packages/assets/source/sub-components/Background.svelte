<script lang="ts">
	import { type BackgroundShape, type BackgroundVariant, getColorVariable } from "../utils/colors.ts";
	import type { Dimensions } from "../utils/dimensions.ts";
	import { getId } from "../utils/meta.ts";
	import Gradient from "./Gradient.svelte";

	export let id: string;
	export let color: BackgroundVariant = "transparent";
	export let dimensions: Dimensions;
	export let shape: BackgroundShape;
	export let useAnimation: boolean;

	const componentId = getId(id, "background");
	const [width, height] = dimensions;

	$: fill = (variant: BackgroundVariant) => {
		switch (variant) {
			case "transparent": {
				return "transparent";
			}
			case "gradient": {
				return `url(#${getId(id, "gradient_background")})`;
			}
			default: {
				throw new Error(`Unrecognized background color variant: ${variant}`);
			}
		}
	};
</script>

<defs>
	{#if color === "gradient"}
		<Gradient {id} target={"background"} {useAnimation} />
	{/if}
	<symbol id={componentId}>
		{#if shape === "circle"}
			<circle cx={width / 2} cy={height / 2} r={height / 2} />
		{:else if shape === "rect"}
			<rect {width} {height} />
		{/if}
	</symbol>
</defs>

<use href="#{componentId}" fill={fill(color)} />
