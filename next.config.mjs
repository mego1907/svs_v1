/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "svscoin.org",
                port: '',
                pathname: '/wp-content/**',
            }
        ]
    }
};

export default nextConfig;
