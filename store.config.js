module.exports = {
  seo: {
    title: 'Ótica Chilli Beans',
    description: 'Ótica Chilli Beans',
    titleTemplate: '%s | Ótica Chilli Beans',
    author: 'Undefined Group',
    canonical: 'https://corelabiz.myvtex.com',
  },

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'corelabiz',
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
  },

  // Default session
  session: {
    currency: {
      code: 'BRL',
      symbol: 'R$',
    },
    locale: 'pt-BR',
    channel: '{"salesChannel":"1","regionId":""}',
    country: 'BR',
    postalCode: null,
    person: null,
  },

  // Production URLs
  storeUrl: 'https://undefined.vercel.app',
  secureSubdomain: 'https://corelabiz.myvtex.com',
  checkoutUrl: 'https://corelabiz.myvtex.com/checkout',
  loginUrl: 'https://corelabiz.myvtex.com/api/io/login',
  accountUrl: 'https://corelabiz.myvtex.com/api/io/account',

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: '/apple-magic-mouse/p',
      collection: '/office',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/apple-magic-mouse/p',
      collection: '/office',
      collection_filtered:
        '/office/?category-1=office&marca=acer&facets=category-1%2Cmarca',
      search: '/s?q=orange',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-PGHZ95N',
  },
}
