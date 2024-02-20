/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://productsdalas2730.s3.amazonaws.com',
        port: '',
        pathname: '/*',
      },
    ],
  }
};

export default nextConfig;
