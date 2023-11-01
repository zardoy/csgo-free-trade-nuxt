<script setup lang="ts">
const token = useAuthToken()
</script>
<template>
    <div class="w-full border-b border-gray-400 px-5 py-4 flex justify-between flex-col sm:flex-row">
        <div class="flex-1"></div>
        <NuxtLink class="flex-1" to="/">
            <h2 class="inline whitespace-nowrap text-2xl sm:text-4xl font-bold title-name">
                CS GO Free Trade
            </h2>
        </NuxtLink>
        <!-- <div class="flex items-center ml-3 gap-1 flex-1">
            <div class="flex-1 flex justify-end">
                Log In
            </div>
        </div> -->
        <UserLoggedIn v-if="token" />
        <UserLoggedOut v-else />
    </div>
</template>
<style scoped>
.title-name {
    font-family: Fauna-Thin;
    color: #fffdfe;
    letter-spacing: 1.2px;
    text-shadow: cyan 0 2px 25px;
}

.f {
    svg {
        font-size: 1.1em;
        margin-top: -3px;
    }
}
</style>
