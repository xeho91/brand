<script lang="ts">
	import type { ColorTheme } from "@xeho91/colors";

	import Background from "./sub-components/Background.svelte";
	import Frame from "./sub-components/Frame.svelte";
	import Gradient from "./sub-components/Gradient.svelte";
	import Logotype from "./sub-components/Logotype.svelte";
	import Shadow from "./sub-components/Shadow.svelte";
	import SVG from "./sub-components/SVG.svelte";
	import type { BackgroundVariant, ForegroundVariant } from "./utils/colors.ts";
	import { type Dimensions, LOGO_MIN_HEIGHT, LOGO_MIN_WIDTH, validateLogoDimensions } from "./utils/dimensions.ts";
	import { META_LOGO } from "./utils/meta.ts";

	/**
	 * Unique ID of the logo.
	 *
	 * @type {string}
	 */
	export let id: string = META_LOGO.id;
	/**
	 * Width of the background - has to be higher than logotype's width _(**including the safe space** for the shadow
	 * and the frame)_.
	 */
	export let backgroundWidth = LOGO_MIN_WIDTH;
	/**
	 * Height of the background - has to be higher than logotype's height _(**including the safe space** for the shadow
	 * and the frame)_.
	 */
	export let backgroundHeight = LOGO_MIN_HEIGHT;
	/**
	 * Color **variant** for the background.
	 */
	export let colorBackground: BackgroundVariant = "transparent";
	/**
	 * Color **variant** for the foreground _(logotype and frame)_.
	 */
	export let colorForeground: ForegroundVariant = "gradient";
	/**
	 * Override system's/browser's color theme.
	 */
	export let theme: ColorTheme | "system" = "system";
	/**
	 * Enable animation _(on the gradients only)_.
	 */
	export let animated = false;
	/**
	 * Hide the shadow for whatever reason?
	 */
	export let hideShadow = false;
	/**
	 * Display frame?
	 */
	export let useFrame = false;

	const backgroundDimensions: Dimensions = [backgroundWidth, backgroundHeight];

	validateLogoDimensions(backgroundDimensions);
</script>

<SVG {...META_LOGO} dimensions={backgroundDimensions} {theme} {colorForeground}>
	<defs>
		{#if !hideShadow}
			<Shadow {id} />
		{/if}
		{#if colorForeground === "gradient"}
			<Gradient {id} target="foreground" useAnimation={animated} />
		{/if}
	</defs>
	{#if colorBackground !== "transparent"}
		<Background
			{id}
			color={colorBackground}
			dimensions={backgroundDimensions}
			shape="rect"
			useAnimation={animated}
		/>
	{/if}
	{#if useFrame}
		<Frame {id} color={colorForeground} dimensions={backgroundDimensions} shape="rect" useShadow={!hideShadow} />
	{/if}
	<Logotype {id} color={colorForeground} dimensions={backgroundDimensions} useShadow={!hideShadow} />
</SVG>
