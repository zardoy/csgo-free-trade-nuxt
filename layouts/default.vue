<script setup lang="ts">

</script>
<template>
    <v-app>
        <div class="flex flex-col h-screen text-white justify-between">
            <div>
                <NavBar />
                <slot />
            </div>
            <Footer />

        </div>
    </v-app>
</template>
