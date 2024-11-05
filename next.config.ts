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
      {
        protocol: 'https',
        hostname: 'maqueta.fidepuntos.com.co',
        port: '',
        pathname: '/public/img/**',
      },
    ],
  },
};

export default nextConfig;
