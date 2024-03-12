/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    domains: ["quebuster.s3.ap-south-1.amazonaws.com"],
  },
  output: "export",
};

module.exports = nextConfig;
