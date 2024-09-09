/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  useFileSystemPublicRoutes: true,
  experimental: {
    // Remove any experimental.appDir configuration
  },
}

module.exports = nextConfig