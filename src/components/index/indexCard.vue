<template>
  <div class="main">
    <div class="bacimg">
      <img src="../../assets/images/Robot.jpg" alt="" class="img">
    </div>
    <div class="avatar">
      <img src="../../assets/images/chatGPT.png" alt="" class="">
    </div>
    <div class="text">
      <div class="name">ChatGPT问答网</div>
      <div class="url">www.aaaaaaaa.com</div>
    </div>
    <hr style="width: 80%; margin: 0 auto;">
    <div class="bottom">
      <div class="bottomLeft">
        <div class="bottomNum">223442</div>
        <div class="bottomText">内容</div>
      </div>
      <div class="bottomRight">
        <div class="bottomNum">1231223</div>
        <div class="bottomText">浏览</div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
  
</script>

<style scoped>
.main {
  margin-top: 20px;
  /* border: 1px solid; */
  border-radius: 25px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: box-shadow 0.3s;

}

.main:hover{
  box-shadow: white 0px 3px 8px;
}

.img {
  width: 100%;
  height: auto;
}

.text {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top:-60px ;
}
.name{
    font-weight: 900;
    color: white;
}
.url{
  color: darkgrey;
}

.avatar {
  height: 110px;
  width: 110px;
  border: 5px white solid;
  border-radius: 100px;
  position: relative;
  bottom: 70px;
  left: 140px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bottom {
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
}

.bottomText{
  color:darkgrey;
}
</style>

