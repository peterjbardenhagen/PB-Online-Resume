/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            punycode: 'punycode/'
        };
        return config;
    },
    turbopack: {
        resolveAlias: {
            punycode: 'punycode/'
        }
    }
};

export default nextConfig;