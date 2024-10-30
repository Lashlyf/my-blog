/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "", // empty string, not a space string
                pathname: "/**" // add this to allow all paths
            }
        ]
    }
};

export default nextConfig;