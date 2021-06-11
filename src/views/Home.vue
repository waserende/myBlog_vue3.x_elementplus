<template>
  <div>
    <div class="line"></div>
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
      <el-menu-item index="2">
        <template #title>文章</template>
      </el-menu-item>
      <el-menu-item index="3">说说</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me"
           target="_blank">登陆</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>
