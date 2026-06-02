/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.usls.edu.ph',
      },
      {
        protocol: 'https',
        hostname: 'usls.edu.ph',
      },
    ],
  },
};

export default nextConfig;
