<template>
  <div class="sidebar">
    <div class="logo-container" :style="{ backgroundColor: $store.getters.cssVar.menuBg }">
      <el-avatar
        size="44"
        shape="square"
        :src="qtlogo"
      >
      </el-avatar>
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        青藤工作室
      </h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from "./SidebarMenu";
import qtlogo from '@/assets/qtlogo.jpg'

</script>
<style lang="scss">
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
