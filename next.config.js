/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  useFileSystemPublicRoutes: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig