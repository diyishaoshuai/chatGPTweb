<template>
  <div class="main">
    <div class="head">
      搜索
    </div>
    <div class="search">
      <el-input v-model="data.search" placeholder="请输入您想搜索的内容" />
      <el-button type="primary" round>搜索</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive  } from 'vue'
const data = reactive({
  search:""
})

</script>

<style scoped>
.main {
  /* height: 300px; */
  border: 1px solid #2c3e50;
  border-radius: 25px;
  color: white;
  margin-top: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: box-shadow 0.3s;
  overflow: hidden;
}


.main:hover {
  box-shadow: white 0px 3px 8px;

}

.search{
  display: flex;
  margin: 50px 0;
}
.head{
    font-weight: 900;
    font-size: larger;
}

</style>