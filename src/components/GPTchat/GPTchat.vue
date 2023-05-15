<template>
    <div class="main">
        <div class="noneInfo" :hidden="!isChatEmpty">
            <div class="title">
                ChatGPT-AI
            </div>
            <div class="list">
                <div class="icon">
                    <img src="../../assets/icon/chat1.png" alt="">
                    <div class="iconText">AI 创作</div>
                    <div class="btns">
                        <div class="btn">{{ data.btns[0] }}<el-icon>
                                <Right />
                            </el-icon></div>
                        <div class="btn">{{ data.btns[1] }}<el-icon>
                                <Right />
                            </el-icon></div>
                        <div class="btn">{{ data.btns[2] }}<el-icon>
                                <Right />
                            </el-icon></div>
                    </div>
                </div>
                <div class="icon">
                    <img src="../../assets/icon/chat2.png" alt="">
                    <div class="iconText">AI 创作</div>
                    <div class="btns">
                        <div class="btn">{{ data.btns[3] }}<el-icon>
                                <Right />
                            </el-icon></div>
                        <div class="btn">{{ data.btns[4] }}<el-icon>
                                <Right />
                            </el-icon></div>
                        <div class="btn">{{ data.btns[5] }}<el-icon>
                                <Right />
                            </el-icon></div>
                    </div>
                </div>
                <div class="icon">
                    <img src="../../assets/icon/chat3.png" alt="">
                    <div class="iconText">AI 创作</div>
                    <div class="btns">
                        <div class="btn">{{ data.btns[6] }}<el-icon>
                                <Right />
                            </el-icon></div>
                        <div class="btn">{{ data.btns[7] }}<el-icon>
                                <Right />
                            </el-icon></div>
                        <div class="btn">{{ data.btns[8] }}<el-icon>
                                <Right />
                            </el-icon></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="info" :hidden="isChatEmpty">
            <div class="chatContent" v-for="item in data.chat" :key="item.id">
                <div class="user">
                    <div>
                        <img class="avatar" src="../../assets/images/user.png" alt="">
                    </div>
                    <div class="text"> {{ item.user }}
                    </div>
                </div>
                <div class="GPT">
                    <div>
                        <img class="avatar" src="../../assets/images/chatGPT.png" alt="">
                    </div>
                    <div class="text"> {{ item.GPT }}
                    </div>
                </div>
            </div>
        </div>
        <div class="input">
            <el-input style="width: 800px;" v-model="data.input" :autosize="{ minRows: 1, maxRows: 9 }" type="textarea"
                placeholder="输入你的问题" />

            <div class="inputBtn" @click="addChatData">
                <el-icon>
                    <Position />
                </el-icon>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { ElMessage } from 'element-plus'



const data = reactive({
    btns: [
        "写一首赞美祖国的诗",
        "写一篇科幻小说",
        "安排一场发布会流程",

        "有哪些有趣的科学实验",
        "问一个AI也答不出的问题",
        "AI会替代人类工作吗",

        "简单解释一下人工智能",
        "红烧牛肉的做法",
        "请介绍一下百度文心",
    ],
    input: "",
    chat:
        [
            {
                id: 1,
                user: "你好",
                GPT: "我是丁真",
            }, {
                id: 2,
                user: "你好",
                GPT: "我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真我是丁真",
            }
        ]
})

const isChatEmpty = computed(() => data.chat.length === 0);

function addChatData() {
  if (data.input === "") {
    ElMessage({
        message: "请输入您的问题",
        type:"error",
    })
  } else {
    const newChatData = {
      id: data.chat.length + 1,
      user: data.input,
      GPT: "GPT"
    };
    data.chat.push(newChatData);
    data.input = "";
  }
}


</script>

<style scoped>
.main {
    margin-left: 13%;
    /* border: 1px solid; */

}

.noneInfo {
    margin-top: 7%;
}

.title {
    color: #333;
    font-size: 40px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 2px;
    user-select: none;

}

.list {
    margin-top: 2%;
    display: flex;
    justify-content: center;

}

.icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 1%;
}

.iconText {
    width: 200px;
    user-select: none;

}

img {
    height: 24px;
    width: 24px;
    user-select: none;

}

.iconText {
    font-size: 16px;
    line-height: 44px;
    user-select: none;

}

.btn {
    height: 16px;
    width: 200px;
    background: #f7f7f8;
    border-radius: 4px;
    padding: 12px 15px;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

}

.btn:active {
    background: #E5E7EB;
}

.input {
    position: absolute;
    width: 840px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(0, 0, 0, .1);
    /* margin: 0 auto; */
    left: 35%;
    bottom: 20px;
}

.inputBtn {
    /* border: 1px solid ; */
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.inputBtn:hover {
    color: #409eff;
    background-color: #ecf5ff;
}

.input>>>.el-input__inner {
    border: 0;
}


:deep(.el-textarea__inner) {
    box-shadow: 0 0 0 0px;
}

:deep(.el-textarea__inner:hover) {
    box-shadow: 0 0 0 0px;
}

:deep(.el-textarea__inner:focus) {
    box-shadow: 0 0 0 0px;
}


.info{
    height: 800px;
    border: 1px solid ;
    overflow-y: auto;

}

.chatContent{
    display: flex;
    flex-direction: column;
    
}

.user{
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 70px;
    padding: 20px 0;
    /* border: 1px solid ; */
}

.GPT{
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 70px;
    padding: 20px 0;
    /* border: 1px solid ; */
    background: #F7F7F8;
}

.avatar {
    width: 30px;
    height: 30px;
}

.text{
    width: 800px;
    /* border: 1px solid; */
    margin: 0 20px;
    text-align: left;

}
</style>

<style>
.el-textarea__inner {
    resize: none;
}
</style>

