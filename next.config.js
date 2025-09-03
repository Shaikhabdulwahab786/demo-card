/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true // For static export if needed
  },
  transpilePackages: ['lucide-react']
}

module.exports = nextConfig