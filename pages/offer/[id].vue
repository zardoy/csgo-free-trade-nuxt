<script setup lang="ts">

const { data: libContents, pending } = useFetch<string>('https://gist.githubusercontent.com/zardoy/d28c6eab678883cfa13a8b56927dc34f/raw')

</script>
<template>
    <div class="mt-28 ml-7">
        <h1 class="mb-5 text-3xl">API Explorer (Playground)</h1>
        <ClientOnly>
            <MonacoEditor v-if="libContents" :lib-contents="libContents" />
            <div v-else-if="pending">Loading typings...</div>
            <div v-else>Something went wrong</div>
        </ClientOnly>
    </div>
</template>
