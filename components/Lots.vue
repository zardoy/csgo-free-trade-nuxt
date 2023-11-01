<script lang="ts" setup>
import { LotProps } from '~/components/Lot.vue';
import { openSteamLoginPage } from '~/components/UserLoggedOut.vue';

const { disabledLoading, disabledNoToken, displayOnlyAdded, slots, disabledButton, inventoryState } = defineProps<{
    slots: Array<LotProps>
    inventoryState?: {
        state: boolean
        on: () => void
    }
    disabledLoading?: boolean
    disabledButton?: {
        text: string
        action: () => void
    }
    disabledNoToken?: boolean
    displayOnlyAdded?: boolean
}>()

const generateKey = (lotProps: any) => {
    const type = lotProps.type
    if ('offerId' in type) return type.offerId
    if ('toggleInventoryItemId' in type) return `${type.toggleInventoryItemId}`
    if ('otherSideOffering' in type) return type.otherSideOffering
    return 'fallback'
}

const handleButtonClick = () => {
    if (disabledNoToken) {
        openSteamLoginPage()
    } else {
        inventoryState!.on()
    }
}

const disabled = ref(
    disabledNoToken ||
    (inventoryState && !inventoryState.state) ||
    disabledLoading
)

</script>
<template>
    <div class="relative">
        <div :class="['flex flex-wrap', disabled && 'filter blur pointer-events-none']">
            <Lot v-for="lotProps in slots" :key="generateKey(lotProps)" v-bind="{
                ...lotProps,
                displayOnlyAdded
            }" />
        </div>
        <div v-if="disabled" class="absolute top-[125px] left-0 right-0 flex justify-center">
            <v-btn @click="handleButtonClick" v-if="disabledLoading">
                <v-progress-circular indeterminate></v-progress-circular>
            </v-btn>
            <v-btn v-else variant="tonal" @click="handleButtonClick">
                {{ disabledNoToken ? 'Login with steam' : 'Load inventory' }}
            </v-btn>
        </div>
    </div>
</template>
