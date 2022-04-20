module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'custom'
  },
  env: {
    MONGO_URI: '...',
    SITE: 'http://localhost:3000',
  },
  
}