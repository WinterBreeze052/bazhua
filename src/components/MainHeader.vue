<template>
  <header class="header">
    <div class="logo">MyWebsite</div>
    <nav class="nav">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/photography">摄影区</router-link></li>
        <li><router-link to="/illustration">插画区</router-link></li>
        <li><router-link to="/share">分享区</router-link></li>
      </ul>
    </nav>
    <div class="search">
      <input type="text" placeholder="搜索..." v-model="searchQuery" />
      <button @click="performSearch">搜索</button>
    </div>
    <div class="user-info" @click="toggleUserMenu">
      <img :src="user.avatar" alt="用户头像" class="avatar" />
      <span>{{ user.username }}</span>
      <div v-if="showUserMenu" class="user-menu">
        <button @click="logout">注销</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const searchQuery = ref<string>('');
    const showUserMenu = ref<boolean>(false);
    const user = ref<{ avatar: string; username: string }>({
      avatar: 'path/to/avatar.jpg', // 替换为实际头像路径
      username: '用户昵称',
    });

    const performSearch = () => {
      // 处理搜索逻辑
      console.log('搜索:', searchQuery.value);
    };

    const toggleUserMenu = () => {
      showUserMenu.value = !showUserMenu.value;
    };

    const logout = () => {
      // 处理注销逻辑
      console.log('用户已注销');
    };

    return {
      searchQuery,
      showUserMenu,
      user,
      performSearch,
      toggleUserMenu,
      logout,
    };
  },
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 2rem;
}

.nav {
  flex-grow: 1;
}

.nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav li {
  margin-right: 1rem;
}

.search {
  display: flex;
  align-items: center;
}

.search input {
  padding: 0.5rem;
  margin-right: 0.5rem;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.user-menu {
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  padding: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
