/** @see {@link https://github.com/JamieMason/syncpack/#-configuration-file} */
const config = {
	...require("@terminal-nerds/syncpack-config"),
	source: ["package.json"],
};

module.exports = config;
