import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/images/**', 
      },
      {
        protocol: 'https',
        hostname: 'api-portfolio-8ktz.onrender.com',
        pathname: '/images/**',
      }
    ]
  }
};

export default nextConfig;
