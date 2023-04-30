<script lang="ts">
	import { getJoinedCharStrokesPathData } from "../utils/chars.ts";
	import { type ForegroundVariant, getColorVariable } from "../utils/colors.ts";
	import { type Dimensions, DIMENSIONS_AVATAR } from "../utils/dimensions.ts";
	import { getId } from "../utils/meta.ts";

	export let id: string;
	export let dimensions: Dimensions;
	export let useShadow: boolean;
	export let color: ForegroundVariant;

	const componentId = getId(id, "logomark");
	const [widthBg, heightBg] = dimensions;
	const [widthChar, heightChar] = DIMENSIONS_AVATAR;
	const translateX = widthBg / 2 - widthChar / 2;
	const translateY = (heightBg / 2 - heightChar / 2) / 4;
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

<symbol id={componentId}>
	<path d={getJoinedCharStrokesPathData("x")} />
</symbol>

<use
	href="#{componentId}"
	fill={getFill()}
	filter={useShadow ? `url(#${getId(id, "shadow")})` : undefined}
	transform={translate}
/>
