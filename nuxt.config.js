export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  globalName: 'tiandev',
  head: {
    title: 'TianDev | Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'At TianDev, we excel in delivering innovative software solutions tailored to your needs. Our team is dedicated to turning your vision into reality with cutting-edge technology and expertise.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'qdcZOoSAayf1c2-iruOw1pnz-BDzHmir7xZmTNs6ajk' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'TianDev | Developer' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'fb:app_id', property: 'fb:app_id', content: '399524598269268' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@TianDev' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://anhkevin.github.io",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://anhkevin.github.io/img/tiandev_card.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://anhkevin.github.io/img/tiandev_card.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'TianDev'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://anhkevin.github.io/img/tiandev_card.png'
      }
    ],
    link: [
      { hid: 'canonical', rel: 'canonical', href: 'https://anhkevin.github.io' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/style.scss'
  ],

  content: {
    // Only search in title and description
    fullTextSearchFields: ['title', 'description'],
    liveEdit: false
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/disqus'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/templates',
    '~/components/pages'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    'vue-social-sharing/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  robots: {
    UserAgent: '*',
    Disallow: '/norobots',
    Sitemap: 'https://anhkevin.github.io/sitemap.xml'
  },

  sitemap: {
    hostname: 'https://anhkevin.github.io',
    gzip: true,
    filter ({ routes }) {
      return routes.map(route => {
        route.url = `${route.url}/`
        return route
      })
    },
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    async routes () {
      const { $content } = require('@nuxt/content')

      // post
      const data_post = await $content('articles').only(['slug', 'tags']).fetch()
      const route_post = data_post.map(myroute => myroute.slug === '/index' ? '/' : '/' + myroute.slug)
      
      // video
      const data_video = await $content('video').only(['slug']).fetch()
      const route_video = data_video.map(myroute => myroute.slug === '/index' ? '/' : '/video/' + myroute.slug)

      // tags
      const postTags = [];
      data_post.forEach(data => {
        data.tags.forEach(tag => {
          postTags.push('/tags/' + tag);
        });
      });
      const route_tag = postTags.filter(function(elem, index, self) {
        return index === self.indexOf(elem);
      })

      const dynamicRoutes = route_post.concat(route_video, route_tag);
      return dynamicRoutes
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    publicPath: '/public/'
  },

  generate: {
    fallback: true,
    routes: ['/', '404', '/video/']
  },

  router: {
    // middleware: 'user-agent',
    linkActiveClass: 'active',
    trailingSlash: true
  },

  pwa: {
    manifest: {
      name: 'TianDev',
      description: 'Developer',
      theme_color: '#00C58E'
    }
  },

  googleAnalytics: {
    id: 'GT-55KX94T'
  },

  env: {
    baseUrl: (process.env.NODE_ENV == 'production') ? 'https://anhkevin.github.io' : 'http://localhost:3000',
    namePage: 'TianDev',
    description: 'At TianDev, we excel in delivering innovative software solutions tailored to your needs. Our team is dedicated to turning your vision into reality with cutting-edge technology and expertise.',
    slogan: 'Innovating Tomorrow, Today'
  }
}
