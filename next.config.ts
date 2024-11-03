import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn0.matrimonio.com.co',
        port: '',
        pathname: '/vendor/**',
      },
    ],
  },
};

export default nextConfig;
