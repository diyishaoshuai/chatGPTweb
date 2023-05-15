<template>
    <div class="main">
        <div class="create" @click="dialogVisible = true">
            <el-icon>
                <Plus color="white" />
            </el-icon>
            <div class="text">创建新对话</div>
        </div>
        <div class="items" v-for="item in data" :key="item.id" :style="{ backgroundColor: item.selected ? '#343541' : '' }"
            @click="selectItem(item)">
            <el-icon>
                <ChatDotSquare color="white" size="" />
            </el-icon>
            <div class="text">{{ item.text }}</div>
        </div>
        <el-dialog v-model="dialogVisible" title="新建对话" width="30%" :before-close="handleClose">
            <div class="contain">
                <div class="dialogText">会话标题：</div><el-input style="width: 200px;">
                </el-input>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        确认
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed, ref } from 'vue';
import { ElDialog, ElButton, ElInput, ElMessageBox } from 'element-plus';

const data = reactive([
    { id: '1', text: '会话1', selected: false },
    { id: '2', text: '会话2', selected: false },
    { id: '3', text: '会话3', selected: false },
    { id: '4', text: '会话4', selected: false },
    { id: '5', text: '会话5', selected: false },
    { id: '6', text: '会话6', selected: false },
]);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectedItemId = computed(() => {
    const selectedItem = data.find((item) => item.selected);
    return selectedItem ? selectedItem.id : null;
});


function selectItem(item: { id: string; }) {
    data.forEach((i) => {
        i.selected = i.id === item.id;
    });
}
const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('你确定要关闭此弹窗吗？')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}

</script>

<style scoped>
.main {
    position: absolute;
    width: 13%;
    top: 0;
    left: 0;
    bottom: 0;
    border: 1px solid;
    background-color: rgb(32, 33, 35);

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
}

.create {
    width: 93%;
    height: 4%;
    border: 1px solid;
    margin: 10px 0;

    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    overflow: hidden;
    box-sizing: border-box;

    padding-left: 10%;
}

.create:hover {
    background-color: #2a2b32;
    cursor: pointer;
}

.items {
    width: 93%;
    height: 4%;
    margin: 10px 0;

    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    overflow: hidden;
    box-sizing: border-box;

    padding-left: 10%;
    cursor: pointer;
}

.items:hover {
    background-color: #2a2b32;
}

.el-icon {
    color: white;
}

.text {
    font-size: 16px;
    color: white;
    padding-left: 5%;

    line-height: 100%;
}

.contain {
    display: flex;
    justify-content: center;
    align-items: center;
}



/* 滚动条样式 */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
}

::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
}
</style>