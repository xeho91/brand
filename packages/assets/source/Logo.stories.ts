import type { Meta, StoryObj } from "@storybook/svelte";
import { COLOR_THEMES } from "@xeho91/colors";

import Logo from "./Logo.svelte";
import DownloadButtons from "./storybook/DownloadButtons.svelte";
import { BACKGROUND_VARIANTS, FOREGROUND_VARIANTS } from "./utils/colors.ts";
import { LOGO_MIN_HEIGHT, LOGO_MIN_WIDTH } from "./utils/dimensions.ts";
import { META_LOGO } from "./utils/meta.ts";

export default {
	component: Logo,
	args: {
		id: META_LOGO.id,
	},
	argTypes: {
		// Meta
		id: {
			control: { type: "text" },
			table: {
				category: "Meta",
				defaultValue: { summary: META_LOGO.id },
			},
		},
		// Colors
		colorBackground: {
			control: { type: "radio" },
			options: BACKGROUND_VARIANTS,
			table: { category: "Colors" },
		},
		colorForeground: {
			control: { type: "radio" },
			options: FOREGROUND_VARIANTS,
			table: { category: "Colors" },
		},
		theme: {
			control: { type: "select" },
			options: [...COLOR_THEMES],
			table: {
				category: "Colors",
				defaultValue: { summary: "system" },
			},
		},
		// Dimensions
		backgroundWidth: {
			control: { type: "number", min: LOGO_MIN_WIDTH },
			table: { category: "Dimensions" },
		},
		backgroundHeight: {
			control: { type: "number", min: LOGO_MIN_HEIGHT },
			table: { category: "Dimensions" },
		},
		// Options
		useFrame: { table: { category: "Options" } },
		hideShadow: { table: { category: "Options" } },
		animated: { table: { category: "Options" } },
	},
	decorators: [
		(_, story) => ({
			Component: DownloadButtons,
			props: {
				...story.args,
				asset: "logo",
				dimensions: [
					story.args["backgroundWidth"] ?? LOGO_MIN_WIDTH,
					story.args["backgroundHeight"] ?? LOGO_MIN_HEIGHT,
				],
			},
		}),
	],
	parameters: {
		layout: "fullscreen",
		options: { showPanel: true },
	},
} satisfies Meta<Logo>;

export const Default: StoryObj<Logo> = {};

export const Animated: StoryObj<Logo> = {
	args: {
		animated: true,
	},
};

export const AnimatedWithFrame: StoryObj<Logo> = {
	args: {
		animated: true,
		colorBackground: "gradient",
		backgroundWidth: 600,
		backgroundHeight: 200,
		useFrame: true,
	},
};

export const Black: StoryObj<Logo> = {
	args: {
		colorForeground: "black",
	},
};

export const White: StoryObj<Logo> = {
	args: {
		colorForeground: "white",
	},
};

export const LinkedinCover: StoryObj<Logo> = {
	args: {
		colorBackground: "gradient",
		backgroundWidth: 774,
		backgroundHeight: 198,
		theme: "light",
		useFrame: true,
	},
};

export const TwitterCover: StoryObj<Logo> = {
	args: {
		colorBackground: "gradient",
		backgroundWidth: 600,
		backgroundHeight: 200,
		theme: "light",
		useFrame: true,
	},
};

export const OpenGraphFacebook: StoryObj<Logo> = {
	args: {
		colorBackground: "gradient",
		backgroundWidth: 600,
		backgroundHeight: 215,
		theme: "light",
		useFrame: true,
	},
};
export const OpenGraphGithub: StoryObj<Logo> = {
	args: {
		colorBackground: "gradient",
		backgroundWidth: 400,
		backgroundHeight: 200,
		theme: "light",
		useFrame: true,
	},
};

export const OpenGraphLinkedin: StoryObj<Logo> = {
	args: {
		colorBackground: "gradient",
		backgroundWidth: 600,
		backgroundHeight: 213.5,
		theme: "light",
		useFrame: true,
	},
};

export const OpenGraphTwitter: StoryObj<Logo> = {
	args: {
		colorBackground: "gradient",
		backgroundWidth: 400,
		backgroundHeight: 400,
		theme: "light",
		useFrame: true,
	},
};
