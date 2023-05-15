<template>
  <div class="main">
    <div class="text">最新提问</div>
    <div class="textArea">
      <el-input v-model="form.desc" type="textarea" :rows="10" placeholder="请输入您要提问的问题" />
    </div>
    <div class="bottom">
      <el-button type="primary" plain>提交</el-button>

      <div class="select">
        <el-select v-model="form.region" placeholder="请选择提问类型">
          <el-option label="文字版" value="1" />
          <el-option label="图片版" value="2" />
        </el-select>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  desc: '',
  region:'',
})


</script>

<style scoped>
.main {
  /* width: 900px; */
  /* height: 300px; */
  border: 1px solid;
  margin-top: 20px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: box-shadow 0.3s;
}
.main:hover {
  box-shadow: white 0px 3px 8px;

}

.text {
  font-weight: 900;
  margin: 20px 0;
  color:white;
  font-size: larger;
  
}

.textArea {
  margin: 0 20px;
  border: 2px solid rgb(25, 91, 204);
  border-radius: 20px;
  overflow: hidden;
}

.button {
  height: 30px;
  line-height: 30px;
  width: 80px;
  border: 1px solid;
  margin: 20px 0;
  border-radius: 25px;
  /* margin-left: 20px; */
  background: rgb(35, 111, 234);
  color: white;
  font-weight: 900;
  user-select: none;
}

.button:active {
  background: rgb(25, 91, 204);
}

.bottom{
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}


</style>