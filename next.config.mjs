import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your actual image domain
    formats: ['image/avif', 'image/webp']
},
  optimizeFonts: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: 'file-loader'
});
    return config;
  },
  experimental: {
    optimizeCss: true,
    images: {
      layoutRaw: true
}
}
};

export default nextConfig;