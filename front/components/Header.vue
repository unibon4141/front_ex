<script setup>

</script>

<template>
    <div
        class="wrap-bg"
        v-motion
        :initial="{
            y: 100,
            opacity: 0,
        }"
        :enter="{
            y: 0,
            opacity: 1,
                transition: {
                type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.5,
            },
        }"
    >
    <div class="bg">
        <h1>中庭のやってみたい仕事</h1>
        <div>
            <img
                class="img1"
                src="image/Living1.svg"
                alt=""
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :hovered="{ scale: 1.2 }"
                :delay="200"
            />
        </div>
        <div>
            <img
                class="img2"
                src="image/RemoteMeeting1.svg" 
                alt="" 
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :hovered="{ scale: 1.2 }"
                :delay="200"
            />
        </div>
        <div>
            <img 
                class="img3" 
                src="image/Teamwork1.svg" 
                alt=""
                v-motion
                :initial="{ opacity: 0, y: 100 }"
                :enter="{ opacity: 1, y: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :hovered="{ scale: 1.2 }"
                :delay="200"
                />
            </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@900&display=swap');
    h1{
        font-family: 'Noto Sans JP', sans-serif;
    }
    .wrap-bg {
        background-image: url(/image/header/bg.svg);
        background-color: #FCF4E8;
        background-size: 100%;
        background-position: bottom;

        .bg {
            width:1280px;
            height: 572px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
        }
    }

    .img1 {
        position: absolute;
        top:37px;
        left:73px;
    }

    .img2 {
        position: absolute;
        top:36px;
        right:68px;
    }

    .img3 {
        position: absolute;
        bottom:36px;
        left:87px;
    }

</style>