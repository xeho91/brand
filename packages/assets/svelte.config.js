import preprocess from "svelte-preprocess";

/**
 * @type {import("@sveltejs/vite-plugin-svelte").SvelteOptions}
 */
const config = {
	preprocess: preprocess({}),
};

export default config;
