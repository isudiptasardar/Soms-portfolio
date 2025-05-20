/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      }
    ],
    // Enable image optimization
    minimumCacheTTL: 60,
    domains:["api.microlink.io"]
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable HTTP/2 server push
  poweredByHeader: false,
  compress: true,
  // Improve build performance
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add trailing slash for better SEO
  trailingSlash: true,
  // Improve page speed
  swcMinify: true,
}

export default nextConfig
