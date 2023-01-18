/** @type {import('next').NextConfig} */
const nextConfig = {

	// reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "rukminim1.flixcart.com",
				port: "",
				pathname: "/image/612/612/**",
			},
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assetscdn1.paytm.com",
				port: "",
				pathname: "/images/catalog/view_item/**",
			},
		],
		 domains: ['paytmmall.com'],
	},
};

module.exports = nextConfig;
