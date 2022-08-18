const path = require('path')

/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pageExtensions: ['.tsx', '.ts', '.jsx', '.js'],
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
