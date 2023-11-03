/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cookinplus-images.s3.us-west-2.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
