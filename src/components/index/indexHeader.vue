<template>
  <div class="indexHeader">
    <div class="indexHeaderLeft">
      <img src="../../assets/images/logo.png" alt="" class="indexLogo">
    </div>

    <div class="indexHeaderRight">
      <ul class="split-menu">
        <li><a href="#">首 页</a></li>
        <li @click="toGPTchat"><a href="#">ChatGPT -4.0</a></li>
        <li><a href="#">Al 交流群</a></li>
        <li><a href="#">关于 我们</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';



function toGPTchat(id: string) {
  router.push({
    name: 'GPTchat',
    params: {
      id: id
    }
  })
}
</script>

<style scoped src="../../assets/css/indexHeader.css"></style>

<style scoped>
.indexHeader {
  background: black;
  border: 1px solid;
  height: 100px;
  display: flex;
  justify-content: space-around;
}

.indexHeaderLeft {
  height: 100px;
}
.indexHeaderRight {
  height: 100px;
  line-height: 60px;
}

.indexLogo {
  /* 图片根据高度自适应 */
  width: auto;
  height: 100%;
}
</style>