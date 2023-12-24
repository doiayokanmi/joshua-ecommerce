/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['cdn.sanity.io'],
    }
}

module.exports = nextConfig
