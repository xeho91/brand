import type { Meta, StoryObj } from "@storybook/svelte";
import { COLOR_THEMES } from "@xeho91/colors";

import Avatar from "./Avatar.svelte";
import DownloadButtons from "./storybook/DownloadButtons.svelte";
import { BACKGROUND_VARIANTS, FOREGROUND_VARIANTS } from "./utils/colors.ts";
import { META_AVATAR } from "./utils/meta.ts";

export default {
	component: Avatar,
	args: {
		id: META_AVATAR.id,
	},
	argTypes: {
		// Meta
		id: {
			control: { type: "text" },
			table: {
				category: "Meta",
				defaultValue: { summary: META_AVATAR.id },
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
				asset: "avatar",
				dimensions: [100, 100],
			},
		}),
	],
	parameters: {
		layout: "fullscreen",
		options: { showPanel: true },
	},
} satisfies Meta<Avatar>;

export const Default: StoryObj<Avatar> = {
	args: {
		theme: "light",
	},
};

export const Framed: StoryObj<Avatar> = {
	args: {
		useFrame: true,
	},
};

export const FramedWithBackground: StoryObj<Avatar> = {
	args: {
		theme: "light",
		colorBackground: "gradient",
		useFrame: true,
	},
};

export const Animated: StoryObj<Avatar> = {
	args: {
		animated: true,
	},
};

export const AnimatedWithFrame: StoryObj<Avatar> = {
	args: {
		animated: true,
		useFrame: true,
	},
};

export const AnimatedWithFrameAndBackground: StoryObj<Avatar> = {
	args: {
		animated: true,
		colorBackground: "gradient",
		useFrame: true,
	},
};

export const Black: StoryObj<Avatar> = {
	args: {
		colorForeground: "black",
	},
};

export const White: StoryObj<Avatar> = {
	args: {
		colorForeground: "white",
	},
};
