/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            punycode: 'punycode/'
        };
        return config;
    }
};

export default nextConfig;