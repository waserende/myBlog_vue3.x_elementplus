<template>
  <div class="home">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/blog">Blog</router-link>
    </div>

    <img alt="Vue logo"
         src="@\assets\wallpaper.jpg">

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Cover',
  components: {

  },
};
</script>

<style lang="scss">
#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
