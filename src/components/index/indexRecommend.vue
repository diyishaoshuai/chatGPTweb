<template>
    <div class="main">
        <div class="head">
            热门推荐
        </div>
        <div class="list">
            <div class="items" v-for="item in data" :key="item.id">
                <el-icon>
                    <CaretRight />
                </el-icon>
                <div class="text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ item.text }}
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
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ex?"
    }, {
        id: "2",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, sed?"
    }, {
        id: "3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ex?"
    }, {
        id: "4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ex?"
    }, {
        id: "5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ex?"
    }, {
        id: "7",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ex?"
    },
])
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