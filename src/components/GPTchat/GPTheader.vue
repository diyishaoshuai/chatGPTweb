<template>
    <div class="main">
        <div class="button">

        </div>
        <div class="login">
            <img src="../../assets/images/no_avatar.png" alt="">
            <div class="text">
                未设置昵称

            </div>
            <el-icon>
                <CaretBottom />
            </el-icon>
        </div>
    </div>
</template>
<script></script>

<style scoped>
.main {
    /* border: 1px solid; */
    height: 50px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
}

img {
    height: 30px;
    border-radius: 5px;
}

.login{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
}

.text{
    margin: 0 10px;
}
</style>

