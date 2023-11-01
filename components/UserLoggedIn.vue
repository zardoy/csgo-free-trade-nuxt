<script setup lang="ts">
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue'
import ExitToApp from 'vue-material-design-icons/ExitToApp.vue'

const userInfo = useUserInfo()

const { result, onResult } = useAuthUserQuery(undefined)

onResult(() => {
    userInfo.userInfo = result.value!.checkAuth as any
})

const { mutate: logout, onDone } = useLogoutMutation()

onDone(() => {
    userInfo.userInfo = null
})
</script>
<template>
    <div class="flex justify-center items-center">
        <div class="text-xl whitespace-nowrap flex items-center">
            <Icon class="align-middle">
                <AccountCircleOutline />
            </Icon>
            <span class="font-extralight ml-1">
                {{ result?.checkAuth.displayName }}
            </span>
        </div>
        <Icon class="align-middle ml-2">
            <ExitToApp class=" text-red-800" role="button" @click="logout()" />
        </Icon>
    </div>
</template>
