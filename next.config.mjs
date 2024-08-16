/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://ecopure.netlify.app",
      "https://ecopure.vercel.app",
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;
