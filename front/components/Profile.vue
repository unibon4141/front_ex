<script setup></script>

<template>
  <div class="profile bg1">
    <div class="content profile-content">
      <h2>自己紹介</h2>
      <div class="cards">
        <div class="profile-card radius profile-shadow">
          <p class="myname">中庭陸汰</p>
          <ul>
            <li><p>・やってみたい仕事： フロントエンドエンジニア</p></li>
            <li><p>・生まれ： 大阪</p></li>
            <li><p>・好きな食べ物： パスタ、焼き肉</p></li>
            <li><p>・好きなお笑い芸人： ジャルジャル</p></li>
            <li><p>・好きなこと: 何かに夢中になること</p></li>
          </ul>
        </div>
        <div class="profile-photo-card">
          <div class="profile-photo-human">
            <img src="/image/Picprofile1.svg" alt="" />
          </div>
          <div class="profile-photo-food">
            <img src="/image/food.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.profile {
  .profile-content {
    position: relative;

    .cards {
      display: flex;
      flex-flow: row;

      .profile-card {
        width: 680px;
        display: flex;
        flex-flow: column;
        margin-bottom: 95px;
        background-color: #fff;
        padding: 40px 101px 40px 40px;
        border-radius: 10px;

        .myname {
          font-weight: 300;
          font-size: 30px;
          padding-bottom: 8px;
        }
      }

      .profile-shadow {
        // box-shadow: 7px 7px 7px 7px rgba(0, 0, 0, 0.3);
        box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.45);
      }

      .profile-photo-human {
        position: absolute;
        top: 134px;
        right: 0;
      }

      .profile-photo-food {
        position: absolute;
        top: 330px;
        right: 0;
      }
    }
  }
}
</style>
