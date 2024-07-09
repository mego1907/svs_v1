/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "svscoin.org",
                port: '',
                pathname: '/wp-content/**',
            },
            {
                protocol: "https",
                hostname: "s.geckoterminal.com",
                port: '',
                pathname: "/_next/static/media/**"
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                port: '',
                pathname: "/wikipedia/commons/**"
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
