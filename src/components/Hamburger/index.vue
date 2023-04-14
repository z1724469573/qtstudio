<template>
  <div class="hamburger-container" @click="toggleClick">
    <el-icon v-if="$store.getters.sidebarOpened"><Open /></el-icon>
    <el-icon v-else><TurnOff /></el-icon>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { Open, TurnOff } from "@element-plus/icons";

const store = useStore();
const toggleClick = () => {
  store.commit("app/triggerSidebarOpened");
};

</script>
<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
