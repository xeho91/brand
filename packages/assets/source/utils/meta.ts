export const META_AVATAR = {
	id: "xeho91-avatar",
	title: "",
	description: "",
} as const;

export const META_LOGO = {
	id: "xeho91-logo",
	title: "xeho91's logo",
	description:
		'It contains logotype painted in the style of quickly using a paintbrush on the wall. It\'s written "xeho91" in capital letters.',
} as const;

const targets = [
	"background",
	"gradient_background",
	"gradient_foreground",
	"frame",
	"logomark",
	"logotype",
	"shadow",
] as const;
type IDTarget = (typeof targets)[number];
export function getId<T extends string>(id: T, target: IDTarget): `${T}_${IDTarget}` {
	return `${id}_${target}`;
}
