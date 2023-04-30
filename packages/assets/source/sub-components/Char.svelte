<script lang="ts">
	import { type CharName, getJoinedCharStrokesPathData } from "../utils/chars.ts";

	export let charId: string;
	export let name: CharName;

	const pathData = getJoinedCharStrokesPathData(name);
</script>

<defs data-id={charId}>
	<symbol id={charId}>
		<path d={pathData} />
	</symbol>
</defs>

<use href="#{charId}" />
