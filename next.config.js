const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'ru', 'uz', 'tr', 'ar-SA'],
    defaultLocale: 'ru'
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  images: {
    domains: ['localhost'], // backend hostnomasi shu yerda qo'shiladi
  },
}

module.exports = nextConfig
