/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      domains: ['placehold.co'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
        },
      ],
    },
  };
export default nextConfig;
