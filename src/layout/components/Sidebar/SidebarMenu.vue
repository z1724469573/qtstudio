<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :uniqueOpened="true"
    :collapse="!$store.getters.sidebarOpened"
    default-active="2"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
  >
    <!-- 具体菜单项 -->
    <el-menu-item :index="'/welcome'">
      <i class="el-icon-setting"></i>
      <template #title>欢迎</template>
    </el-menu-item>
    <el-menu-item index="/user/manage">
      <i class="el-icon-setting"></i>
      <template #title>用户管理</template>
    </el-menu-item>
    <!-- 子集 menu 菜单 -->
    <el-submenu index="/signup/createTable">
      <template #title>
        <i class="el-icon-location"></i>
        <span>报名</span>
      </template>
      <el-menu-item index="/signup/createTable">创建报名表</el-menu-item>
      <el-menu-item index="/signup/manage">报名管理</el-menu-item>
    </el-submenu>
    <el-submenu index="/assessment/list">
      <template #title>
        <i class="el-icon-location"></i>
        <span>文章</span>
      </template>
      <el-menu-item index="/assessment/list">文章列表</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <el-submenu index="/assessment/list">
      <template #title>
        <i class="el-icon-location"></i>
        <span>考核</span>
      </template>
      <el-menu-item index="/assessment/list">考核列表</el-menu-item>
      <el-menu-item index="/assessment/toServer">审批考核</el-menu-item>
      <el-menu-item index="/assessment/answer">考核答案</el-menu-item>
      <el-menu-item index="/assessment/stuAnswer">学生答案</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template #title>
        <i class="el-icon-location"></i>
        <span>工作室</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script setup>
import { useStore } from "vuex"

const store = useStore()
console.log(store.getters.cssVar.menuBg)



</script>
<style lang="scss"></style>
