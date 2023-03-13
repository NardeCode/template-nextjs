/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [''],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  }
};

module.exports = nextConfig;
