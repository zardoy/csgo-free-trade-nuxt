<script setup lang="ts">
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
import Popper from "vue3-popper";

type Item = {
    title: string
    image: string
}

const { offering, wanted } = defineProps<{
    wanted: Item[]
    offering: Item[]
}>()

</script>
<template>
    <Popper :content="'test'">
        <div class="root">
            <div class="image-list">
                <!-- todo stack like in avatar group -->
                <img v-for="item of wanted" class="image" :src="item.image" />
            </div>
            <div class="flex flex-col justify-between items-center text-black" style="flex: 0;">
                <span class="items-count">{{ wanted.length }}</span>
                <ArrowRight class="icon" size="40" />
                <span class="items-count">{{ offering.length }}</span>
            </div>
            <div class="image-list">
                <img v-for="item of offering" class="image" :src="item.image" />
            </div>
        </div>
    </Popper>
</template>
<style scoped lang="scss">
.root {
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.75);
    border-radius: 8px;
    margin: 5px 5px;
    height: 100px;

    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }

    &>div {
        flex: 1;
    }
}

.items-count {
    font-size: 18px;
    font-weight: 600;
    padding: 2px 0;
}

.image-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;
}

.image {
    width: 50px;
    aspect-ratio: 1;
}

.icon {
    margin: auto 0;
    color: #000;
}
</style>
