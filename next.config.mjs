/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: true,
  },
  devIndicators: {
    allowedDevOrigins: ['http://localhost:3000', 'http://192.168.1.20:3000', 'http://nas:3000'],
  },
};

export default nextConfig;
