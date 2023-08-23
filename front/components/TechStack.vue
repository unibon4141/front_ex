<script setup></script>

<template>
  <div class="bg1">
    <div class="content">
      <h2>技術スタック</h2>
      <div class="content-flex tech-box">
        <div class="content-flex tech-card">
          <p class="card-title">見た目</p>
          <div class="tech-card-content">
            <div class="tech-item">
              <div class="tech-img"><img src="/image/techStack/html.svg" alt="" /></div>
              <p class="tech-name">HTML</p>
            </div>

            <div class="tech-item">
              <div class="tech-img css-item"><img src="/image/techStack/css.svg" alt="" /></div>
              <p class="tech-name">CSS</p>
            </div>
          </div>
        </div>

        <div class="content-flex tech-card">
          <p class="card-title">システム</p>
          <div class="tech-card-content">
            <div class="tech-item">
              <div class="tech-img"><img src="/image/techStack/React.svg" alt="" /></div>
              <p class="tech-name">JavaScript</p>
            </div>

            <div class="tech-item">
              <div class="tech-img"><img src="/image/techStack/Javascript.svg" alt="" /></div>
              <p class="tech-name">React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tech-box {
  padding-bottom: 64px;
}

.tech-card {
  background-color: #fff;
  display: flex;
  flex-flow: column;

  .card-title {
    text-align: center;
    padding-top: 20px;
    padding-bottom: 16px;
  }

  .tech-name {
    text-align: center;
    padding-bottom:20px;
  }
}

.tech-card-content {
  display: flex;
  margin-left: 79px;
  margin-right: 79px;
  margin-bottom: 20px;

  .tech-item {
    width:131px;
    height:176px;

    .tech-img {
      width:112px;
      height:140px;
    }
  }

  .tech-item:nth-child(1) {
    margin-right: 32px;
  }

  .css-item {
    padding-top:7px;
  }
}

.tech-card:nth-child(1) {
  margin-right: 24px;
}
</style>
