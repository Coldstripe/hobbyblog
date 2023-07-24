/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['picsum.photos'],
        disableStaticImages: true
    }
}

module.exports = nextConfig
