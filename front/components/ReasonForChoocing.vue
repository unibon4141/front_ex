<script setup></script>

<template>
  <div class="bg1">
    <div class="content">
      <h2>この仕事を選んだ理由</h2>
      <div class="content-flex reason-content">
        <div class="reason-box">
          <div class="reason-card radius">
            <img src="/image/reasonForChoosing/Webdevices1.svg" alt="" />
          </div>
          <p>デバイスを問わずに<br />サービスを届けられる</p>
        </div>
        <div class="reason-box">
          <div class="reason-card radius">
            <img src="/image/reasonForChoosing/Development1.svg" alt="" />
          </div>
          <p>自分の考えを形にできる</p>
        </div>
        <div class="reason-box">
          <div class="reason-card radius">
            <img
              src="/image/reasonForChoosing/JavaScriptFrameworks1.svg"
              alt=""
            />
          </div>
          <p>幅広い分野を深められる</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reason-content {
  padding-bottom: 66px;
}

.reason-card {
  // box-sizing: border-box;
  // border: 8px solid #fff;
  background-color: #fff;
  padding: 33px 50px;

  img {
    width: 200px;
    height: 163px;
  }
}

.reason-box:nth-child(1),
.reason-box:nth-child(2) {
  margin-right: 27px;
}

.reason-box {
  padding: 0;

  p {
    text-align: center;
    padding-top: 16px;
    padding-left: 14px;
    padding-right: 14px;
  }
}
</style>
