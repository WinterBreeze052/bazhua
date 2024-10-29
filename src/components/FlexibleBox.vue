<template>
  <div class="flex-container">
    <div class="flex-item" v-for="(item, index) in items" :key="index">
      <img :src="item.image" alt="Image" class="image" />
      <div class="text">
        <p class="line1">{{ item.line1 }}</p>
        <p class="line2">{{ item.line2 }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Item {
  image: string;
  line1: string;
  line2: string;
}

export default defineComponent({
  data() {
    return {
      items: [
        {
          image: 'https://via.placeholder.com/300', // 替换为实际图片链接
          line1: '第一段文本，内容较长以测试溢出效果。第一段文本，内容较长以测试溢出效果。第一段文本，内容较长以测试溢出效果。第一段文本，内容较长以测试溢出效果。',
          line2: '第二段文本，内容较长以测试溢出效果。',
        },
        {
          image: 'https://via.placeholder.com/300',
          line1: '长文本，内容较长以测试溢出效果。长文本，内容较长以测试溢出效果。长文本，内容较长以测试溢出效果。长文本，内容较长以测试溢出效果。长文本，内容较长以测试溢出效果。长文本，内容较长以测试溢出效果。',
          line2: '短文本',
        },
        {
          image: 'https://via.placeholder.com/300',
          line1: '内容正常',
          line2: '这段文字会被截断...',
        },
        {
          image: 'https://via.placeholder.com/300',
          line1: '这段文本很短',
          line2: '也很短',
        },
        {
          image: 'https://via.placeholder.com/300',
          line1: '又一段长文本来测试溢出效果',
          line2: '再长一点，看看效果如何。',
        },
      ] as Item[],
    };
  },
});
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 30vh;
  /* 高度设置为全屏 */
  padding: 10px;
  /* 内边距 */
  box-sizing: border-box;
  /* 包括内边距在内的宽度计算 */
}

.flex-item {
  flex: 0 0 calc(18% - 10px);
  /* 每个盒子占 20% 的宽度，减去间距 */
  background-color: #f0f0f0;
  /* 背景颜色 */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  /* 超出内容隐藏 */
}

.image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.text {
  text-align: center;
  overflow: hidden;
  /* 隐藏超出内容 */
}

.line1,
.line2 {
  margin: 5px 0;
  display: -webkit-box;
  /* 使用 flexbox */
  -webkit-box-orient: vertical;
  /* 垂直排列 */
  -webkit-line-clamp: 2;
  /* 限制为两行 */
  overflow: hidden;
  /* 隐藏超出内容 */
  text-overflow: ellipsis;
  /* 超出部分用省略号表示 */
}
</style>
