<script lang="ts">
	import { type ForegroundVariant, getColorVariable } from "../utils/colors.ts";
	import type { Dimensions } from "../utils/dimensions.ts";
	import { FRAME, type FrameShape } from "../utils/frame.ts";
	import { getId } from "../utils/meta.ts";

	export let id: string;
	export let color: ForegroundVariant;
	export let dimensions: Dimensions;
	export let size: number = FRAME.size;
	export let shape: FrameShape;
	export let useShadow: boolean;

	const componentId = getId(id, "frame");
	// Circle
	const [widthOuter, heightOuter] = dimensions;
	const [widthInner, heightInner] = [widthOuter - size * 2, heightOuter - size * 2];
	const radiusOuter = widthOuter / 2;
	const radiusInner = radiusOuter - size * 2;
	// Rect
	const [width, height] = dimensions;
	const backgroundWidth = width - size * 2;
	const backgroundHeight = height - size * 2;

	function getFill() {
		switch (color) {
			case "gradient": {
				return `url(#${getId(id, "gradient_foreground")})`;
			}
			case "black":
			case "white": {
				return getColorVariable("primary");
			}
			default: {
				throw new Error(`Unrecognized color variant: ${color}`);
			}
		}
	}
</script>

<defs>
	<symbol id={componentId} fill-rule="evenodd">
		{#if shape === "circle"}
			<path
				d="
				M0 {radiusOuter}a{radiusOuter} {radiusOuter} 0 1 0 {widthOuter} 0a{radiusOuter} {radiusOuter} 0 1 0 -{heightOuter} 0
				M{size} {radiusOuter}a{radiusInner} {radiusInner} 0 1 0 {widthInner} 0a{radiusInner} {radiusInner} 0 1 0 -{heightInner} 0
				"
			/>
		{:else if shape === "rect"}
			<path
				d="
				M0 0h {width} v{height} H0 z
				M{size} {size}h {backgroundWidth} v{backgroundHeight} H{size} z
				"
			/>
		{/if}
	</symbol>
</defs>

<use href="#{componentId}" fill={getFill()} filter={useShadow ? `url(#${getId(id, "shadow")})` : undefined} />
