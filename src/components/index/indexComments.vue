<template>
  <div class="contain">
    <div class="main" v-for="item in paginatedContent" :key="item.id">
      <!-- 头像 -->
      <div class="avatar">
        <img src="../../assets/images/chatGPT.png" style="width: 40px;height: 40px;" alt="">
      </div>
      <div class="content">
        <!-- 标题 -->
        <div class="title" @click="toArticleDetails">{{ item.title }}</div>
        <!-- 时间、地点 -->
        <div class="baseInfo">
          {{ item.questionTime }} 来自 {{ item.adress }} 的网友
        </div>
        <!-- 文字 -->
        <div class="text">
          {{ item.text }}
        </div>
        <!-- 底部 -->
        <div class="bottom">
          <div class="views">
            <img src="../../assets/icon/views1.png" alt="">
            {{ item.views }}
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage">上一页</button>
      <button v-for="page in currentPage.total" :key="page" @click="changePage(page)">{{ page }}</button>
      <button @click="nextPage">下一页</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { reactive, computed } from 'vue'

const content = reactive([
  {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  },
  {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  }, {
    id: "10",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 1
  },
  {
    id: "9",
    title: "我能问你个问题嘛？",
    questionTime: "2023-05-10 22:59:43",
    adress: "湖南省长沙市",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio cupiditate laboriosam dolores deleniti nulla nobis veritatis sequi id tempore officiis accusantium saepe, repudiandae, nam obcaecati voluptatem? Libero qui veniam porro perspiciatis at, magnam velit asperiores similique nemo voluptate officia? Quia, ullam saepe ex eos magnam consequuntur, sint aliquid vero earum voluptatem ab et dolores deleniti culpa laboriosam hic modi distinctio ratione impedit amet illo velit. Sint earum fugiat officiis totam delectus maxime odio incidunt fuga consequatur commodi magni, velit quo asperiores consectetur nobis quisquam quis harum, ut iure molestias sequi? Placeat deserunt sapiente labore, a rerum quod quas quibusdam!",
    views: 567
  },

])

const pageSize = 10 // 每页显示的数量
const currentPage = reactive({
  page: 1, // 当前页码
  total: Math.min(Math.ceil(content.length / pageSize), 15) // 总页数
})

const paginatedContent = computed(() => {
  const start = (currentPage.page - 1) * pageSize
  const end = start + pageSize
  return content.slice(start, end)
})

function changePage(page: number) {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  currentPage.page = page
}
function prevPage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  if (currentPage.page > 1) {
    currentPage.page--
  }
}

function nextPage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  if (currentPage.page < currentPage.total) {
    currentPage.page++
  }
}

//点击title会路由跳转到articleDetails页面
function toArticleDetails(id: string) {
  router.push({
    name: 'articleDetails',
    params: {
      id: id
    }
  })
}

 
// function backToTop() {

// }


</script>

<style scoped>
.main {
  color: white;
  margin-top: 20px;
  border-radius: 25px;
  border: 1px solid #2c3e50;
  display: flex;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: box-shadow 0.3s;
  overflow: hidden;
}

.main:hover {
  box-shadow: white 0px 3px 8px;

}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 20px;
}

.title {
  font-weight: 900;
  font-size: large;
}

.baseInfo {
  color: darkgrey;
  font-size: small;
}

.text {
  margin-top: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}
.title:hover {
  color: yellow;
  transition: color 1s;
  cursor: pointer;
}

.title:active {
  color: blue;
}

.views {
  margin-top: 20px;
  display: flex;
  align-items: center;
  line-height: 20px;
}

.views img {
  width: 20px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #2c3e50;
  color: white;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #34495e;
}

.pagination button.active {
  background-color: #3498db;
}
</style>

 
 
