/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  useFileSystemPublicRoutes: true,
  experimental: {},
  images: {
    domains: ['img.youtube.com'],  // Add this if you're using YouTube thumbnails
  },
}

module.exports = nextConfig