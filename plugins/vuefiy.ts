import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    // remove background
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
          },
          variables: {

          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
