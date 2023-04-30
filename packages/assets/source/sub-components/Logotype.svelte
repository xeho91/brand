<script lang="ts">
	import { CHAR_NAMES, type CharName } from "../utils/chars.ts";
	import { type ForegroundVariant, getColorVariable } from "../utils/colors.ts";
	import { type Dimensions, DIMENSIONS_LOGOTYPE } from "../utils/dimensions.ts";
	import { getId } from "../utils/meta.ts";
	import Char from "./Char.svelte";

	export let id: string;
	export let dimensions: Dimensions;
	export let useShadow: boolean;
	export let color: ForegroundVariant;

	const componentId = getId(id, "logotype");
	const setCharId = (name: CharName) => `${componentId}_char_${name}`;
	const [widthBg, heightBg] = dimensions;
	const [widthLogo, heightLogo] = DIMENSIONS_LOGOTYPE;
	const translateX = widthBg / 2 - widthLogo / 2;
	const translateY = heightBg / 2 - heightLogo / 2;
	const translate = `translate(${translateX}, ${translateY})`;

	$: getFill = () => {
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
	};
</script>

<defs>
	<symbol id={componentId}>
		{#each CHAR_NAMES as name}
			<Char charId={setCharId(name)} {name} />
		{/each}
	</symbol>
</defs>

<use
	href="#{componentId}"
	fill={getFill()}
	filter={useShadow ? `url(#${getId(id, "shadow")})` : undefined}
	transform={translate}
/>
