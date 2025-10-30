import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos", // 替换为你的图片来源域名
        port: "",
        pathname: "/**", // 你可以更具体地指定路径
      },
    ],
  },
};

export default nextConfig;
