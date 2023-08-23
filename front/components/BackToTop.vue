<script setup>
let isShow = ref(false);
const topLocation = ref(0);

const showScrollBottun = () => {
    topLocation.value = window.scrollY;
    const movedLocation = 100;

    if(topLocation.value > movedLocation) {
        isShow.value = true;
    } else {
        isShow.value = false;
    }
}

window.addEventListener("scroll", showScrollBottun)

const handleClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

</script>

<template>
    <div class="back-box">
        <div
            :class="{ 'active': isShow }"
            @click="handleClick">
            <Icon 
                name="bxs:to-top"
                color="white"
                size="40"
            />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.back-box {
    div {
        opacity: 0;
        transition: 0.2s opacity;
        position: fixed;
        bottom: 10px;
        right: 24px;
        border:1px solid #000;
        border-radius: 10px;
        padding: 10px;
        background-color: #000;

        &.active {
            opacity: 1;
            transition: 1s opacity;
        }
    }
}
</style>