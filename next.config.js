/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
  images: { unoptimized: true },
  experimental: {
    cpus: 1,
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;