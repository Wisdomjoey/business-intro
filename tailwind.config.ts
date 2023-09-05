import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
		screens: {
			xs: { max: "480px" },
			sm: { max: "768px" },
			md: "796px",
		},
	},
	plugins: [],
};
export default config;

