import { defineStore } from 'pinia'

export default defineStore('autoState', {
    state: () => ({
        token: null as string | null
    }),
    persist: {
        key: 'auth',
        storage: persistedState.cookies,
    },
})
