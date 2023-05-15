<template>
    <div class="main">
        <background />
        <div class="sidebar">
            <GPTsidebar />
        </div>
        <div class="contain">
            <div class="GPTheader">
                <GPTheader />
            </div>
            <div class="chat">
                <chat />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GPTsidebar from "../components/GPTchat/GPTsidebar.vue"
import background from "../components/GPTchat/background.vue"
import GPTheader from "../components/GPTchat/GPTheader.vue"
import chat from "../components/GPTchat/GPTchat.vue"



@Options({
    components: {
        GPTsidebar,
        background,
        GPTheader,
        chat,
    }
})

export default class GPTchat extends Vue { }

</script>

<style scoped>
.sidebar {
    width: 200px;
}
</style>