<script setup></script>

<template>
  <div class="bg3 footer-box">
    <div class="message">
      <p>ぜひ、私と一緒のチームで働きませんか？</p>
      <p>一度お話しませんか?</p>
    </div>
    <div class="img1"><img src="/image/footer/footer1.svg" alt="" /></div>
    <div class="img2"><img src="/image/footer/footer2.svg" alt="" /></div>

    <BackToTop />
  </div>
</template>

<style lang="scss" scoped>
.footer-box {
  position: relative;
}

.message {
  height: 489px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.message p {
  font-size: 32px;
  color: #fff;
  font-weight: 700;
}

.img1 {
  position: absolute;
  left: 112px;
  top: 32px;
}

.img2 {
  position: absolute;
  right: 35px;
  bottom: 19px;
}
</style>
