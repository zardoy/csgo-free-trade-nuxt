export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
      // handle error, e.g. report to a service
      console.log(error)
    }

    // Also possible
    nuxtApp.hook('vue:error', (error, instance, info) => {
        console.log(2, error)
      // handle error, e.g. report to a service
    })
  })
