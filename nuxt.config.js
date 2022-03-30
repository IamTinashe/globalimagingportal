export default {
  env: {
    BASE_URL: "https://wadeamg.my.salesforce.com",
    title: 'Customer Portal',
    CLIENT_ID: "3MVG9JZ_r.QzrS7iBlm11gVzyscKtVi2mIiWfpwhmcneG7K0MwhbqFshlxd0hR92Jbbf1OF1HArBSpH1oe9yg",
    CLIENT_SECRET: "D188BD0F3054C061602E5861E276F4F531464B090519859320B130F86BBC35C8",
    REDIRECT_URI: "https://wadeamg.my.salesforce.com/services/oauth2/success",
    GRANT_TYPE: "password",
    USERNAME: "office@wadeamg.com",
    PASSWORD: "Zimglobalusa2022!",
    TOKEN_URL: "https://login.salesforce.com/services/oauth2/token"
  },
  helmet: {
    dnsPrefetchControl: true,
    expectCt: true,
    frameguard: true,
    hsts: true,
    ieNoOpen: true,
    noSniff: true,
    permittedCrossDomainPolicies: true,
    referrerPolicy: true,
  },
  head: {
    title: 'globalimagingportal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css" },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js' }
    ]
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/tailwind.output.css',
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@nuxt/content',
  ],
  axios: {
    baseURL: '/',
  },
  
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  content: {},
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
