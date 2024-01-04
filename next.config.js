/** @type {import('next').NextConfig} */
const nextConfig = {
   
    images: {
        domains: [
          'files.stripe.com',
        ],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      },
}

module.exports = nextConfig
