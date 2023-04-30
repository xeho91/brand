<script lang="ts">
	import { type Dimensions } from "../utils/dimensions.ts";

	export let id: string;
	export let dimensions: Dimensions;

	const [width, height] = dimensions;

	function getBase64document() {
		const logo = document.querySelector(`#${id}`);

		if (logo) {
			return btoa(unescape(encodeURIComponent(logo.outerHTML)));
		}
	}

	type LogoFileExtension = "png" | "svg";

	function generateLinkAndClick(href: string, extension: LogoFileExtension): void {
		const anchor = document.createElement("a");
		const event = new MouseEvent("click");

		const filename = window.prompt("File basename?");

		if (filename) {
			anchor.download = `${filename}.${extension}`;
			anchor.href = href;
			anchor.dispatchEvent(event);
		}
	}

	function handleSVGClick() {
		const href = "data:image/svg+xml;base64," + getBase64document();

		generateLinkAndClick(href, "svg");
	}

	function handlePNGClick() {
		const canvas = document.createElement("canvas");
		const img = document.createElement("img");
		const multiplier = 4;
		const newWidth = width * multiplier;
		const newHeight = height * multiplier;

		img.src = "data:image/svg+xml;base64," + getBase64document();
		img.addEventListener("load", () => {
			canvas.setAttribute("width", `${newWidth}`);
			canvas.setAttribute("height", `${newHeight}`);

			const context = canvas.getContext("2d");

			if (!context) {
				throw new Error("Something went wrong with generating canvas 2d context!");
			}

			context.drawImage(img, 0, 0, newWidth, newHeight);

			const href = canvas.toDataURL("image/png", 100);

			generateLinkAndClick(href, "png");
		});
	}
</script>

<slot />
<div class="download-buttons">
	<button id="download-svg" class="button" on:click={handleSVGClick}>{"Download *.SVG file"}</button>
	<button id="download-png" class="button" on:click={handlePNGClick}>{"Download *.PNG file"}</button>
</div>

<style>
	.download-buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		column-gap: 1rem;
	}
</style>
