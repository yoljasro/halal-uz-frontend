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
<<<<<<< HEAD
    domains: ['localhost'], // backend hostnomasi shu yerda qo'shiladi
=======
    domains: ['localhost', 'api.kardise.com'], // Mahalliy server va tashqi API server uchun domainlarni qo'shing
>>>>>>> bfab3d7f70db42abb9d3ed4022c349af883e992e
  },
}

module.exports = nextConfig
