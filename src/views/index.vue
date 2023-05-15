<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <indexHeader />
    <indexPromote />
    <div class="indexContent">
      <div class="indexContentLeft">
        <indexAsk />
        <indexComments />
      </div>
      <div class="indexContentRight">
        <indexCard />
        <indexAD />
        <indexSearch />
        <indexRecommend />
        <indexFriendURL />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import indexHeader from '../components/index/indexHeader.vue'; // @ is an alias to /src
import indexAsk from '../components/index/indexAsk.vue';
import indexComments from '../components/index/indexComments.vue';
import indexPromote from '../components/index/indexPromote.vue'



import indexCard from '../components/index/indexCard.vue';
import indexAD from '../components/index/indexAD.vue';
import indexSearch from '../components/index/indexSearch.vue';
import indexRecommend from '../components/index/indexRecommend.vue';
import indexFriendURL from '../components/index/indexFriendURL.vue';



@Options({
  components: {
    indexHeader,
    indexAsk,
    indexCard,
    indexAD,
    indexComments,
    indexPromote,
    indexSearch,
    indexRecommend,
    indexFriendURL
  },
})
export default class HomeView extends Vue { }
</script>

<style scoped>
.indexContentLeft {
  margin-left: 300px;
  width: 900px;
}

.indexContentRight {
  margin-left: 20px;
  width: 400px;
}

.indexContent {
  display: flex;

}
</style>