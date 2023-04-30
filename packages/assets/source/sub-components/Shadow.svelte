<script lang="ts">
	import { getColorVariable } from "../utils/colors.ts";
	import { getId } from "../utils/meta.ts";
	import { SHADOW } from "../utils/shadow.ts";

	export let id: string;
	export let color: string = getColorVariable("shadow");
	export let opacity: number = SHADOW.opacity;
	export let offsetX: number = SHADOW.x;
	export let offsetY: number = SHADOW.y;
	export let blur: number = SHADOW.blur;
</script>

<filter id={getId(id, "shadow")} filterUnits="userSpaceOnUse">
	<feDropShadow dx={offsetX} dy={offsetY} stdDeviation={blur} flood-color={color} flood-opacity={opacity} />
</filter>
