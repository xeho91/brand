<script lang="ts">
	import { type ColorVariable, getColorVariable } from "../utils/colors.ts";
	import { GRADIENT, type GradientTarget } from "../utils/gradient.ts";
	import { getId } from "../utils/meta.ts";

	export let id: string;
	export let rotate: number = GRADIENT.rotate;
	export let target: GradientTarget;
	export let useAnimation: boolean;

	const aliases = {
		background: "bg",
		foreground: "fg",
	} as const;

	function getColor(index: number) {
		return getColorVariable(`gradient-${aliases[target]}-stop-${index + 1}` as ColorVariable);
	}

	function getOffset(index: number) {
		return (100 / (GRADIENT.stops - 1)) * index;
	}
</script>

{#if target === "background"}
	<radialGradient id={getId(id, "gradient_background")} spreadMethod="pad">
		{#each { length: GRADIENT.stops } as _, index}
			<stop offset="{getOffset(index)}%" stop-color={getColor(index)} />
		{/each}
		{#if useAnimation}
			<animateTransform
				attributeName="gradientTransform"
				type="rotate"
				from="0"
				to="360"
				dur="6s"
				repeatCount="indefinite"
			/>
		{/if}
	</radialGradient>
{:else if target === "foreground"}
	<linearGradient
		id={getId(id, "gradient_foreground")}
		gradientTransform="rotate({rotate})"
		gradientUnits="objectBoundingBox"
		spreadMethod="pad"
	>
		{#each { length: GRADIENT.stops } as _, index}
			<stop offset="{getOffset(index)}%" stop-color={getColor(index)} />
		{/each}
		{#if useAnimation}
			<animateTransform
				attributeName="gradientTransform"
				type="rotate"
				from="0"
				to="360"
				dur="6s"
				repeatCount="indefinite"
			/>
		{/if}
	</linearGradient>
{/if}
