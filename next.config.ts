import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
  },
  // 旧LP（lp.hanatanigardenworks.com）は公開終了。全パスを本体サイトのトップへ恒久転送する。
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.hanatanigardenworks.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
