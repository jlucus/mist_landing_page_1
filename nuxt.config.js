export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mist',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "application-name", content: "&nbsp;" },
      { name: "msapplication-TileColor", content: "#FFFFFF" },
      { name: "msapplication-TileImage", content: "/img/mstile-144x144.png" },
      { name: "msapplication-square70x70logo", content: "/img/mstile-70x70.png" },
      { name: "msapplication-square150x150logo", content: "/img/mstile-150x150.png" },
      { name: "msapplication-wide310x150logo", content: "/img/mstile-310x150.png" },
      { name: "msapplication-square310x310logo", content: "/img/mstile-310x310.png" },
      { hid: 'description', name: 'description', content: 'Mist is a blockchain-based NFT Action RPG game on our Mist NFT Game Framework. Collect NFTs, battle epic monsters, and explore multiple immersive environments.' }
    ],
    link: [
      { rel: "apple-touch-icon-precomposed", sizes: "57x57", href: "/img/apple-touch-icon-57x57.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "114x114", href: "/img/apple-touch-icon-114x114.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "72x72", href: "/img/apple-touch-icon-72x72.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "144x144", href: "/img/apple-touch-icon-144x144.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "60x60", href: "/img/apple-touch-icon-60x60.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "120x120", href: "/img/apple-touch-icon-120x120.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "76x76", href: "/img/apple-touch-icon-76x76.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "152x152", href: "/img/apple-touch-icon-152x152.png" },
      { rel: "icon", type: "image/png", href: "/img/favicon-196x196.png", sizes: "196x196" },
      { rel: "icon", type: "image/png", href: "/img/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/png", href: "/img/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", type: "image/png", href: "/img/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", type: "image/png", href: "/img/favicon-128.png", sizes: "128x128" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lora&display=swap" },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" },
      { rel: "stylesheet", type: "text/css", href: "https://pro.fontawesome.com/releases/v5.15.1/css/all.css" },
      { rel: "stylesheet", type: "text/css", href: "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
    '@/assets/css/animate.css',
    '@/assets/css/staking.css',
    '@/assets/css/hamburgers.css',
  ],
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
    { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
    { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
