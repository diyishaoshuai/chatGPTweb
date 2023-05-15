<template>
  <div class="home">
    <indexHeader />
    <indexPromote />
    <div class="indexContent">
      <div class="indexContentLeft">
        <articleDetails />
      </div>
      <div class="indexContentRight">
        <indexSearch />
        <indexRecommend />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import indexHeader from '../components/index/indexHeader.vue'; // @ is an alias to /src
import articleDetails from '../components/articleDetails/articleDetails.vue';

import indexSearch from '../components/index/indexSearch.vue';
import indexRecommend from '../components/index/indexRecommend.vue';

@Options({
  components: {
    indexHeader,
    indexSearch,
    indexRecommend,
    articleDetails
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

