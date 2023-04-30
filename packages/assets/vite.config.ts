import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

/**
 * @see {@link https://vitejs.dev/config}
 */
const config = defineConfig({
	plugins: [svelte()],
});

export default config;
