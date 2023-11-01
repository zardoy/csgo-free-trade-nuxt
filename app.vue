<script lang="ts">
import 'assets/MyFontsWebfontsKit.css'

// import { DefaultApolloClient } from '@vue/apollo-composable';
// import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client'
// // import { ApolloClient, InMemoryCache } from '@apollo/client/'
// import '~/assets/MyFontsWebfontsKit.css'

// const apolloClient = new createApolloClient({
//     // uri: 'https://api.csgofreetrade.com/graphql',
//     httpEndpoint: 'http://localhost:3030'
// })

// // provide(DefaultApolloClient, apolloClient)
onErrorCaptured((err) => {
    console.log(err)
    return false
})
</script>
<template>
    <NuxtErrorBoundary>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <template #error="ctx">
            <div class="error-container">
                <h1>Oops...</h1>
                <p>Something went wrong</p>
            </div>
        </template>
    </NuxtErrorBoundary>
</template>
<style>
body {
    user-select: none;
}

body .v-application {
    background: linear-gradient(to bottom, #0d011e 0, 70%, black), black;
    background-attachment: fixed;
}

.error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
