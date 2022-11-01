/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lzd-img-global.slatic.net',
        pathname: '/g/**',
      },
      {
        protocol: 'https',
        hostname: 'sijoritoday.com',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'media.croma.com',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'macstore.id',
        pathname: '/konten/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        pathname: '/originals/**',
      },
    ],
  },
}

module.exports = nextConfig
