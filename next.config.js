/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/rising-repo',
  images: { unoptimized: true },
  logging: { fetches: { fullUrl: true } },
};

export default nextConfig;
