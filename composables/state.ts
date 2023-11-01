export const useNewOfferItems = defineStore('newTradeOfferings', () => ({
    /** from inventory */
    ourSide: ref([] as string[]),
    otherSide: ref([] as string[])
}))

type UserInfo = {
    displayName: string
    avatarUrl: string
    steamID: string
}

export const useUserInfo = defineStore('userInfo', () => ({
    userInfo: ref(null as UserInfo | null),
}))
