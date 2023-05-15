<template>
    <div class="main">
        <div class="head">
            友情链接
        </div>
        <div class="list">
            <div class="items" v-for="item in data" :key="item.id">
                <el-icon>
                    <Right />
                </el-icon>
                <div class="text" @click="openUrl(item.url)" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ item.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const data = reactive([
    {
        id: "1",
        text: "百度",
        url: "http://www.baidu.com/"
    },
    {
        id: "2",
        text: "必应",
        url: "https://cn.bing.com/"
    },
])
// 点击items可以通过url打开新的标签页
const openUrl = (url: string) => {
    window.open(url, '_blank');
}

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

.head {
    font-weight: 900;
    font-size: larger;
}

.list {
    margin-top: 20px;
}

.items {
    display: flex;
    height: 40px;
    line-height: 40px;
    align-items: center;
}

.items:hover {
    color: yellow;
    transition: color 1s;
    cursor: pointer;
}
</style>