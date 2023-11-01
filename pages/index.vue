<script setup lang="ts">
import { capitalize, times } from 'lodash-es'
import { random } from 'superb'

const getPhrase = () => capitalize(random())

const fakeSlotsData = times(
    6,
    (i) => ({
        type: {
            // offerId: i,
            toggleInventoryItemId: i.toString(),
        },
        items: [
            {
                title: `${getPhrase()} ${getPhrase()} amazing stuff lorem`,
                pictureUrl:
                    'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_um25V4dB8teXA54vwxgbtrRVqNm_xJdKXcQVqMg7W_lDtl7vq1pe4753KynJqsnZ25n_alxapwUYbStGwX0o/360fx360f',
            },
            {
                title: `${getPhrase()} ${getPhrase()} amazing stuff lorem`,
                pictureUrl:
                    'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_um25V4dB8teXA54vwxgbtrRVqNm_xJdKXcQVqMg7W_lDtl7vq1pe4753KynJqsnZ25n_alxapwUYbStGwX0o/360fx360f',
            },
        ],
    }),
)

const token = useAuthToken()
const { result: allOffersSlice, error } = useOffersQuery({ first: 10, offset: 0, }, {})

// const slots = [
//     {
//         type: {
//             addItemFromOtherSide: true,
//         },
//         items: [
//             {
//                 title: 'Add item',
//                 pictureUrl: '',
//             },
//         ],
//     },
//     ...otherSideOferrings.map(itemId => {
//         let item = itemsData
//             ? itemsData.find(
//                 x => x.id === itemId,
//             )
//             : {
//                 name: 'Loading...',
//                 image: '',
//             }
//         item ??= {} as any
//         return {
//             items: [
//                 {
//                     pictureUrl: item!.image,
//                     title: item!.name,
//                 },
//             ],
//             type: {
//                 otherSideOffering: itemId,
//             },
//         }
//     }),
// ]

const auth = useAuthSteamMutation({
    // onSuccess({ authSteam: data }) {
    //     useAuthState.setState(data as AuthState)
    // },
})
const userInfo = useUserInfo()

auth.onDone(({ data }) => {
    if (data) {
        userInfo.userInfo = data.authSteam
        token.value = data.authSteam.token
    }
})

onMounted(() => {
    const url = new URL(location.href)
    const openIdEndpoint = url.searchParams.get('openid.op_endpoint')
    if (openIdEndpoint === 'https://steamcommunity.com/openid/login') {
        auth.mutate({
            search: url.search,
        })
        url.search = ''
        window.history.pushState({}, '', url.toString())
    }
})

const testItem = {
    image: 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_um25V4dB8teXA54vwxgbtrRVqNm_xJdKXcQVqMg7W_lDtl7vq1pe4753KynJqsnZ25n_alxapwUYbStGwX0o/360fx360f',
    title: 'test'
}

</script>
<template>
    <div class="p-4">
        <!-- <SelectGameItem itemsData={itemsData} /> -->
        <div class="grid grid-cols-2">
            <div>
                <h3 class="pb-5 text-2xl font-bold">My inventory</h3>
                <Lots :slots="fakeSlotsData" />
                <!-- <Lots slots={inventorySlots} inventoryState={inventoryOpen} disabledNoToken={!token}
                    disabledLoading={isLoading} /> -->
                <!-- <div v-if="token && !isLoading && !!selectedInventoryItems.length">
                    <h3 class="pb-5 text-2xl font-bold">
                        Selected items for an offer
                    </h3>
                    <Lots slots={inventorySlots} displayOnlyAdded />
                    <h3 class="pb-5 text-2xl font-bold">
                        Selected items from other side
                    </h3>
                    <Lots :slots="slots" />
                    <Button @click="placeOffer()">
                        Place new offer
                    </Button>
                </div> -->
            </div>

            <div>
                <h3 class="pb-5 text-2xl font-bold">All offers</h3>
                <OfferLot :wanted="[testItem, testItem, testItem]" :offering="[testItem, testItem, testItem]" />
                <!-- <p v-if="allOffersSlice">All offers loading</p>
                <template v-else-if="allOffersSlice">
                    <Lots :slots="allOffersSlice.offers.edges.map(edge => ({
                        items: [
                            ...edge.offeringItems,
                            ...edge.wantedItems,
                        ].map(x => ({
                            title: x.name,
                            pictureUrl: x.image!,
                        })),
                        type: {
                            offerId: edge.id,
                        },
                    }),
                    )" />
                    <div v-if="allOffersSlice.offers.edges.length">More offers available with search</div>
                </template> -->
            </div>
        </div>
    </div>
</template>
