<template>
  <div class="main">
    <div class="title">
      Lorem ipsum dolor sit amet.
    </div>
    <div class="baseInfo">
      2023-05-10 22:59:43 来自 湖南省长沙市 的网友
      <hr>
    </div>
    <div class="text">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dolorem consectetur aliquam, fuga in eos dolorum corrupti velit aliquid magni debitis ratione quia ipsum, laboriosam quo doloremque molestiae placeat praesentium cupiditate, sint neque. Magnam ipsum numquam molestias alias repellat vitae quam nobis dolore minima vero, consectetur mollitia libero quasi enim voluptatum ab natus! Aut esse aliquam corrupti id ipsum nobis ratione veniam necessitatibus obcaecati similique aspernatur voluptatum cum eum, culpa perspiciatis voluptate. Error rem illo ab dolor labore accusamus assumenda consequatur fuga sequi quibusdam, optio, dolores, incidunt amet. Quae perferendis a inventore aperiam quam, amet dicta! Minus quam ab earum!
    </div>  

    <div class="tips">
      <hr>
      AI智能问答网免责声明：
      以上内容除特别注明外均来源于网友提问、ChatGPT回答，权益归原著者所有，本站仅作效果演示和欣赏之用；
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.main {
  height: 800px;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: box-shadow 0.3s;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}



.main:hover {
  box-shadow: white 0px 3px 8px;
}

.title {
  color: white;
  font-weight: 900;
  font-size: larger;
}
.baseInfo{
  color: darkgrey;
}

hr{
  margin: 20px 0;
  border: 1px dotted;
  color: white;
}
.text {
  white-space: pre-wrap;
  color: white;
  margin: 20px 0;
  text-align: left;
}

.tips{
  color: darkgray;
  font-size: smaller; 
}
</style>