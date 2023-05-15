<template>
  <background class="background"/>
  <div class="backgroundColor"></div>
  
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import background from './components/index/background.vue'

@Options({
  components: {
    background,
  },
})
export default class App extends Vue { }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background: rgb(13, 19, 29);

  // position: fixed;
  background-size: 100% 100%;
  // color: white;
}

* {
  margin: 0;
  padding: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.background{
  z-index: -1;
}
.backgroundColor{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(13, 19, 29);
  z-index: -2;
}
</style>
