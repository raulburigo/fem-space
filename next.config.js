/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["raw.githubusercontent.com", "cdn.traction.one"]
  }
}

module.exports = nextConfig
