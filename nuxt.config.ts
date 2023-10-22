const description = 'Best free online service for trading cs go weapons skins cases knifes and other items'

export default () => defineNuxtConfig({
    modules: [
        'nuxt-graphql-client',
        "@nuxtjs/tailwindcss",
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],
    runtimeConfig: {
        public: {
            GQL_HOST: 'http://localhost:3030/graphql',
            repo: `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`
        },
    },
    "graphql-client": {
        codegen: {
          avoidOptionals: true
        }
      },
    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
    app: {
        baseURL: './',
        head: {
            title: 'CS:GO Free Trade',
            // gen description
            meta: [
                { hid: 'description', name: 'description', content: description },
                { hid: 'og:title', property: 'og:title', content: 'CS:GO Free Trade' },
                { hid: 'og:description', property: 'og:description', content: description },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                // { hid: 'og:url', property: 'og:url', content: 'https://ra1next.com/' },
                { hid: 'og:url', property: 'og:url', content: 'https://jb-team-site.zardoy.com' },
            ]
        },
    },
})
