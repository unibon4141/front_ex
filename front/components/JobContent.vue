<script setup></script>

<template>
  <div class="bg2">
    <div class="content">
      <h2>業務内容</h2>
      <div class="content-flex job-box">
        <div class="job-card radius">
          <div class="card-head">
            <p class="card-number">01</p>
            <p class="card-title">設計</p>
          </div>
          <ul class="card-description">
            <li>・要件定義の確認</li>
            <li>・必要な機能の洗い出し</li>
            <li>・UI/UX設計</li>
          </ul>
        </div>
        <div class="job-card radius">
          <div class="card-head">
            <p class="card-number">02</p>
            <p class="card-title">実装</p>
          </div>
          <ul class="card-description">
            <li>・デザイナーとの擦り合わせ</li>
            <li>・WEBページの見た目づくり</li>
            <li>・LP作成</li>
          </ul>
        </div>
        <div class="job-card radius">
          <div class="card-head">
            <p class="card-number">03</p>
            <p class="card-title">改善</p>
          </div>
          <ul class="card-description">
            <li>・保守</li>
            <li>・SEO対策</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.job-box {
  padding-bottom: 64px;
}

.job-card {
  background-color: #009944;
  color: #fff;
  width: 304px;
  padding-bottom: 23px;

  .card-head {
    display: flex;
  }

  .card-number {
    font-size: 95px;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: bold;
    opacity: 0.4;
    padding-left: 23px;
  }

  .card-title {
    padding-top: 56px;
    padding-left: 53px;
    font-size: 36px;
    font-weight: bold;
  }

  .card-description {
    padding-left: 13px;

    li {
      font-size: 19px;
    }
  }
}

.job-card:nth-child(1),
.job-card:nth-child(2) {
  margin-right: 24px;
}
</style>
