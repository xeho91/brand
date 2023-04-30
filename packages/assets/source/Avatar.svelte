<script lang="ts">
	import type { ColorTheme } from "@xeho91/colors";

	import Background from "./sub-components/Background.svelte";
	import Frame from "./sub-components/Frame.svelte";
	import Gradient from "./sub-components/Gradient.svelte";
	import Logomark from "./sub-components/Logomark.svelte";
	import Shadow from "./sub-components/Shadow.svelte";
	import SVG from "./sub-components/SVG.svelte";
	import type { BackgroundVariant, ForegroundVariant } from "./utils/colors.ts";
	import { META_AVATAR } from "./utils/meta.ts";

	/**
	 * Unique ID of the avatar.
	 *
	 * @type {string}
	 */
	export let id: string = META_AVATAR.id;
	/**
	 * Color **variant** for the background.
	 */
	export let colorBackground: BackgroundVariant = "transparent";
	/**
	 * Color **variant** for the foreground _(logomark and frame)_.
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

	const dimensions = [100, 100] as const;
</script>

<SVG {...META_AVATAR} {dimensions} {colorForeground} {theme}>
	<defs>
		{#if !hideShadow}
			<Shadow {id} />
		{/if}
		{#if colorForeground === "gradient"}
			<Gradient {id} target="foreground" useAnimation={animated} />
		{/if}
	</defs>
	<Background {id} color={colorBackground} {dimensions} shape="circle" useAnimation={animated} />
	{#if useFrame}
		<Frame {id} color={colorForeground} {dimensions} shape="circle" useShadow={!hideShadow} />
	{/if}
	<Logomark {id} {dimensions} color={colorForeground} useShadow={!hideShadow} />
</SVG>
