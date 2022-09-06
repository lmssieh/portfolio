const WindiCSSWebpackPlugin = require("windicss-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["twemoji.maxcdn.com"],
	},
	webpack(config) {
		config.plugins.push(new WindiCSSWebpackPlugin());
		return config;
	},
};

module.exports = nextConfig;
