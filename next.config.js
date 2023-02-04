const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'ru', 'uz' , 'tr'  , 'arab'] ,
    defaultLocale: 'ru'
  },
  typescript : {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
