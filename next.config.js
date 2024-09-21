/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 生成静态HTML输出，适用于静态托管
  basePath: '/rising-repo', // 设置基本路径，所有页面和资源都将从此路径开始
  images: { unoptimized: true },
  logging: { fetches: { fullUrl: true } },
};

export default nextConfig;
