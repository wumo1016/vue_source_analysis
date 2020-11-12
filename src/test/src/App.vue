<template>
  <div>
    <router-link to="/a">
      <button>A</button>
    </router-link>
    <router-link to="/b">
      <button>B</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
</style>



