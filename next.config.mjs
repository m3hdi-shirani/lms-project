/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.classbon.com",
      },
      {
        protocol: "https",
        hostname: "minio-classbon.darkube.app",
      },
    ],
  },
};

export default nextConfig;
