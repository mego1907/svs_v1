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
            },
            {
                protocol: "https",
                hostname: "images.cryptocompare.com",
                port: '',
                pathname: "/news/default/**"
            },
            {
                protocol: "https",
                hostname: "svscoin.org",
                port: '',
                pathname: "/theme-assets/**"
            },
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    api: {
        externalResolver: true,
    },
};

export default nextConfig;
