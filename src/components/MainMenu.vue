<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <el-menu-item index="0">
      <img style="width: 100px" src="https://element-plus-docs.bklab.cn/images/element-plus-logo.svg"
        alt="Element logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <RouterLink to="/" class="nav-link">
      <el-menu-item index="1">
        主页
      </el-menu-item>
    </RouterLink>
    <RouterLink to="/photo" class="nav-link">
      <el-menu-item index="2">
        摄像区
      </el-menu-item>
    </RouterLink>
    <RouterLink to="/inset" class="nav-link">
      <el-menu-item index="3">
        插画区
      </el-menu-item>
    </RouterLink>
    <RouterLink to="/share" class="nav-link">
      <el-menu-item index="4">
        分享区
      </el-menu-item>
    </RouterLink>
    <el-sub-menu index="2">
      <template #title>用户</template>
      <RouterLink to="/user" class="nav-link">
        <el-menu-item index="2-1">
          个人中心
        </el-menu-item>
      </RouterLink>
      <el-menu-item index="2-2">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss">
.flex-grow {
  flex-grow: 1;
}
</style>
