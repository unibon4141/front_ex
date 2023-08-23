<script setup>
const imgUrls = [
    {
        url: "https://mahjong-vis.vdslab.jp/",
        img: "/image/collectionSites/mahjong.svg"
    },
    {
        url: "https://roadmap-legends.vdslab.jp/",
        img: "/image/collectionSites/qiita.svg"
    },
    {
        url: "",
        img: "/image/collectionSites/anime-log.svg"
    }
];

let currentSlide = ref(1);
const carousel = ref(null);
const isTransParent = ["normal", "normal", "normal"];

const handleClick = (val) => {
    currentSlide.value = val;
    // setTimeout(() => {
    //     window.open(imgUrls[val].url, "_blank");
    // }, 1000);
}
let isHover = ["hidden", "hidden", "hidden"];
const handleMouseOver = (val) => {
    isHover[val] = "show";
    isTransParent[val] = "trans";
}

const handleMouseLeave = (val) => {
    isHover[val] = "hidden";
    isTransParent[val] = "normal";
}
</script>

<template>
    <div class="bg2">
        <div class="site-box">
        <h2>中庭のこれまで</h2>
        <Carousel
            :items-to-show="2"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
        >
            <Slide v-for="(imgUrl, index) in imgUrls" :key="index">
                <div 
                  class="carousel_item img-box" 
                  @click="handleClick(index)"
                  @mouseover="handleMouseOver(index)"
                  @mouseleave="handleMouseLeave(index)"
                  >
                    <div :class="isTransParent[index]" class="transparent-box"></div>
                    <a :class="isHover[index]" class="url-link" :href="imgUrl.url" target="_blank">{{ imgUrl.url }}</a>

                        <!-- <p :class="isHover[index]" class="url-link">{{ imgUrl.url }}</p> -->
                        <img :src="imgUrl.img" :alt="index" style="width: 716px; height: 403px;" />
                    <!-- </a> -->
                </div>
            </Slide>
        </Carousel>
    </div>
    </div>
</template>

<style lang="scss" scoped>
.site-box {
    padding-bottom: 64px;
}

.img-box {
    width: 716px;
    position: relative;
}

.hidden {
    display: none;
}

.url-link {
    position: absolute;
    top: 200px;
    left: 200px;
    font-size: 24px;
    color: #1a73e8;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        text-decoration:underline;
    }

    &:active {
        color: #093dd7;
    }
}

.transparent-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 716px;
    height: 403px;
}
.trans {
    background-color: rgba(255,255,255, 0.5);
    transition: 0.4s ease;
}

    .carousel_item {
        &:hover { 
            transform: scale(1.1);
            transition: 0.4s ease;
        }
    }
</style>