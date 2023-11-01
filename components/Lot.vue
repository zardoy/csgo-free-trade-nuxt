<script lang="ts">
export interface LotProps {
    type:
    | {
        offerId: number
    }
    | {
        toggleInventoryItemId: string
    }
    | {
        addItemFromOtherSide: boolean
    }
    | {
        otherSideOffering: string
    }
    items: {
        title: string
        pictureUrl: string | null
    }[]
    displayOnlyAdded?: boolean
    disabledReason?: string
}
</script>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';

const { displayOnlyAdded, items, type, disabledReason } = defineProps<LotProps>()

const title = items.map(item => item.title).join(' ')

const newOfferItems = useNewOfferItems()
const { ourSide, otherSide } = storeToRefs(newOfferItems)
const globalState = useGlobalState()

const itemAdded = computed(() => {
    if ('toggleInventoryItemId' in type) {
        return ourSide.value.includes(type.toggleInventoryItemId)
    }
    return 'otherSideOffering' in type
})

const handleButtonClick = () => {
    if (disabledReason) {
        alert(disabledReason)
        return
    }

    if ('toggleInventoryItemId' in type) {
        if (itemAdded.value) {
            const index = ourSide.value.indexOf(type.toggleInventoryItemId)
            if (index !== -1) {
                ourSide.value.splice(index, 1)
            }
        } else {
            if (!isNaN(+type.toggleInventoryItemId[0]!)) {
                alert('This item is not in our database yet.')
                return
            }
            ourSide.value.push(type.toggleInventoryItemId)
        }
    }

    if ('addItemFromOtherSide' in type) {
        globalState.value.globalModal = 'select-offering'
    }

    if ('otherSideOffering' in type) {
        const index = otherSide.value.indexOf(type.otherSideOffering)
        if (index !== -1) {
            otherSide.value.splice(index, 1)
        }
    }
}

const handleClick = () => {
    if (disabledReason) {
        return
    }

    if ('offerId' in type) {
        // Navigate to the offer page
    } else {
        handleButtonClick()
    }
}

</script>
<template>
    <div class="relative" v-if="!displayOnlyAdded || itemAdded">
        <div :class="[
            'root',
            'text-gray-100 flex flex-col m-[2px] justify-between overflow-hidden text-center select-text transition-shadow',
            'hover:bg-black',
            disabledReason ? 'cursor-not-allowed' : 'cursor-pointer',
        ]" @click="handleClick">
            <div class="relative">
                <!-- <AvatarGroup max="4" spacing="small" class="h-[100px] flex items-center justify-center"> -->
                <template v-for="(item, index) in items" :key="`${index}-${item.title}`">
                    <v-avatar v-if="item.pictureUrl" :alt="item.title" :img-props="{ draggable: false }"
                        :src="item.pictureUrl" :style="{
                            border: items.length === 0 ? 'none' : 'none',
                            width: items.length === 0 ? '100%' : '40px',
                            height: items.length === 0 ? '100%' : '40px',
                        }">
                        <v-img :src="item.pictureUrl"></v-img>
                    </v-avatar>
                </template>
                <!-- </AvatarGroup> -->
                <div class="absolute inset-0 flex invisible justify-center items-center slot-show-hint-on-hover">
                    <MainIconActionComponent :sx="{ fontSize: '100px' }" class="opacity-15" />
                </div>
            </div>
            <span class="line-clamp-2" :title="title">{{ title }}</span>
        </div>
    </div>
</template>
<style scoped lang="scss">
.root {
    background-color: rgb(45 45 51 / 50%);
    width: 150px;
    height: 150px;
}
</style>
