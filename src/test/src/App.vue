<template>
  <div>
    <div id="test">{{ msg }}</div>
    <button @click="change">change</button>
  </div>
</template>
<script>
// import A from './views/A/index'
export default {
  name: "App",
  // components: { A },
  data() {
    return {
      msg: "测试"
    };
  },
  methods: {
    change() {
      const test = document.querySelector("#test");
      this.$nextTick(() => {
        console.log(test.innerText);
      });
      this.$nextTick().then(() => {
        console.log(test.innerText);
      })
      this.msg = 123
    }
  }
};
</script>

<style lang="scss">
</style>
