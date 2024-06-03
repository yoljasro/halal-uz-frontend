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
    domains: ['localhost', 'api.kardise.com'], // Mahalliy server va tashqi API server uchun domainlarni qo'shing
  },
}

module.exports = nextConfig
