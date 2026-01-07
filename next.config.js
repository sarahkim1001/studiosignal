/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable prefetching to reduce fetch errors during development
  reactStrictMode: true,
  // Reduce aggressive prefetching that can cause fetch errors
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

module.exports = nextConfig;
