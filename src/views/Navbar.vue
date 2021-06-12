<template>
  <div>
    <el-menu :default-active="this.$router.path"
             router="true"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             background-color="#2c3e50"
             text-color="#fff"
             active-text-color="#42b983">
      <el-menu-item index="cover">首页
      </el-menu-item>
      <el-menu-item index="article">
        <template #title>文章</template>
      </el-menu-item>
      <el-menu-item index="share">说说</el-menu-item>
      <el-row type="flex"
              class="row-bg"
              justify="end">
        <el-menu-item index="register">注册</el-menu-item>
        <el-menu-item index="login">登陆</el-menu-item>
      </el-row>
    </el-menu>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>
