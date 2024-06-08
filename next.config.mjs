// next.config.mjs
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    // basePath: '/personal-website',
    // assetPrefix: './', // Ensures assets are correctly referenced
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
